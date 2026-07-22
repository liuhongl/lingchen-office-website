"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Check, Target, X } from "lucide-react";
import { createPortal } from "react-dom";
import {
  buildContactDemand,
  contactProducts,
  submitContactUs,
} from "@/lib/contact-us";

export function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  function toggleProduct(product: string) {
    setSelected((current) =>
      current.includes(product)
        ? current.filter((item) => item !== product)
        : [...current, product],
    );
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const value = (name: string) => String(formData.get(name) ?? "").trim();
    const demand = buildContactDemand({
      role: value("role"),
      email: value("email"),
      products: selected,
      message: value("message"),
    });

    setSubmitting(true);
    setNotice("");

    try {
      await submitContactUs({
        name: value("name"),
        company: value("company"),
        phone: value("phone"),
        demand: demand || "预约演示与体验",
      });

      form.reset();
      setSelected([]);
      setNotice("提交成功，我们会尽快与您联系");
    } catch (error) {
      console.error("预约表单提交失败:", error);
      setNotice("提交失败，请稍后重试或直接联系我们");
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return createPortal(
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <button
        className="modal__backdrop"
        onClick={onClose}
        aria-label="关闭预约弹窗"
      />
      <div className="modal__panel" ref={panelRef}>
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="关闭"
          ref={closeRef}
        >
          <X size={20} />
        </button>
        <div className="modal__heading">
          <span>
            <Target size={22} />
          </span>
          <div>
            <h2 id="booking-title">立刻预约演示与体验</h2>
            <p>预约您的专属客户经理，一对一商业方案演示与体验</p>
          </div>
        </div>
        <form onSubmit={submit}>
          <div className="form-grid">
            <label>
              您的姓名 *
              <input name="name" placeholder="沈经理" required />
            </label>
            <label>
              您的公司 *
              <input
                name="company"
                placeholder="如某某科技有限公司"
                required
              />
            </label>
            <label>
              职位 / 部门
              <input name="role" placeholder="职位 / 部门" />
            </label>
            <label>
              您的手机 *
              <input
                autoComplete="tel"
                inputMode="numeric"
                maxLength={11}
                name="phone"
                pattern="1[3-9][0-9]{9}"
                type="tel"
                placeholder="188xxxxxxxx"
                required
              />
            </label>
            <label className="form-grid__full">
              您的邮箱 *
              <input
                name="email"
                type="email"
                placeholder="example@company.com"
                required
              />
            </label>
          </div>
          <fieldset>
            <legend>您感兴趣的灵宸 AI 产品（可多选）</legend>
            <div className="product-options">
              {contactProducts.map(([product]) => (
                <button
                  className={selected.includes(product) ? "is-selected" : ""}
                  key={product}
                  onClick={() => toggleProduct(product)}
                  type="button"
                  aria-pressed={selected.includes(product)}
                >
                  <span
                    aria-hidden="true"
                    className="product-option__check"
                    data-visible={selected.includes(product)}
                  >
                    <Check size={14} />
                  </span>
                  <span className="product-option__label">{product}</span>
                </button>
              ))}
            </div>
          </fieldset>
          <label className="form-message">
            业务场景需求描述/其他合作需求 *
            <textarea
              name="message"
              placeholder="请描述您的产品方案或者业务合作需求..."
              required
            />
          </label>
          <button className="form-submit" type="submit" disabled={submitting}>
            {submitting ? "提交中..." : "提交产品合作需求/预约解决方案"}
          </button>
          {notice && (
            <p className="form-notice" role="status">
              {notice}
            </p>
          )}
        </form>
      </div>
    </div>,
    document.body,
  );
}
