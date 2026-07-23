"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import {
  buildContactDemand,
  contactFormCopy,
  contactProducts,
  submitContactUs,
} from "@/lib/contact-us";

import styles from "./page.module.css";

export function ContactForm() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(["Sales in"]);
  const [validated, setValidated] = useState(false);
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);

  function toggleProduct(product: string) {
    setValidated(false);
    setSelectedProducts((current) =>
      current.includes(product)
        ? current.filter((item) => item !== product)
        : [...current, product],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const value = (name: string) => String(formData.get(name) ?? "").trim();
    const demand = buildContactDemand({
      role: value("role"),
      email: value("email"),
      products: selectedProducts,
      message: value("message"),
    });

    setSubmitting(true);
    setNotice("");

    try {
      await submitContactUs({
        name: value("name"),
        company: value("company"),
        phone: value("phone"),
        demand: demand || "产品合作需求/预约解决方案",
      });
      form.reset();
      setSelectedProducts([]);
      setValidated(true);
      setNotice("提交成功，我们会尽快与您联系");
    } catch (error) {
      console.error("联系我们表单提交失败:", error);
      setValidated(false);
      setNotice("提交失败，请稍后重试或直接联系我们");
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit} data-validated={validated}>
      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>{contactFormCopy.fields.name.label}</span>
          <input name="name" placeholder={contactFormCopy.fields.name.placeholder} required />
        </label>
        <label className={styles.field}>
          <span>{contactFormCopy.fields.company.label}</span>
          <input name="company" placeholder={contactFormCopy.fields.company.placeholder} required />
        </label>
        <label className={styles.field}>
          <span>{contactFormCopy.fields.role.label}</span>
          <input name="role" placeholder={contactFormCopy.fields.role.placeholder} required />
        </label>
        <label className={styles.field}>
          <span>{contactFormCopy.fields.phone.label}</span>
          <input
            autoComplete="tel"
            inputMode="numeric"
            maxLength={11}
            name="phone"
            pattern="1[3-9][0-9]{9}"
            placeholder={contactFormCopy.fields.phone.placeholder}
            required
            type="tel"
          />
        </label>
        <label className={`${styles.field} ${styles.fullField}`}>
          <span>{contactFormCopy.fields.email.label}</span>
          <input name="email" placeholder={contactFormCopy.fields.email.placeholder} type="email" />
        </label>
      </div>

      <fieldset className={styles.products}>
        <legend>{contactFormCopy.productsLegend}</legend>
        <div className={styles.productList}>
          {contactProducts.map(([name, description]) => {
            const selected = selectedProducts.includes(name);
            return (
              <button
                aria-pressed={selected}
                className={selected ? styles.productSelected : styles.product}
                key={name}
                onClick={() => toggleProduct(name)}
                type="button"
              >
                <span className={styles.productCheck} aria-hidden data-visible={selected}>
                  <Image alt="" src="/images/contact/product-check.svg" width={11} height={8} />
                </span>
                <span>{name}</span>
                <small>{description}</small>
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className={styles.messageField}>
        <span>{contactFormCopy.messageLabel}</span>
        <textarea name="message" placeholder={contactFormCopy.messagePlaceholder} />
      </label>

      <button className={styles.submitButton} type="submit" disabled={submitting}>
        <span>{submitting ? "提交中..." : contactFormCopy.submit}</span>
        <Image alt="" aria-hidden src="/images/contact/submit-arrow.svg" width={7} height={12} />
      </button>
      {notice ? <p className={styles.formNotice} role="status">{notice}</p> : null}
    </form>
  );
}
