"use client";

import { useState, type ReactNode } from "react";
import { BookingModal } from "./booking-modal";

export function BookingTrigger({ children, className }: { children: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} type="button" onClick={() => setOpen(true)}>{children}</button>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
