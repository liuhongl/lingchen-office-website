"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export type ContactSubmitToastState = {
  type: "success" | "error";
  message: string;
} | null;

export function ContactSubmitToast({
  toast,
  onDismiss,
}: {
  toast: ContactSubmitToastState;
  onDismiss: () => void;
}) {
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(onDismiss, 3600);
    return () => window.clearTimeout(timer);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return createPortal(
    <div
      className={`contact-submit-toast is-${toast.type}`}
      role={toast.type === "error" ? "alert" : "status"}
      aria-live={toast.type === "error" ? "assertive" : "polite"}
    >
      <span className="contact-submit-toast__mark" aria-hidden="true">
        {toast.type === "success" ? (
          <Image
            alt=""
            src="/images/contact/product-check.svg"
            width={11}
            height={8}
          />
        ) : null}
      </span>
      <span>{toast.message}</span>
    </div>,
    document.body,
  );
}
