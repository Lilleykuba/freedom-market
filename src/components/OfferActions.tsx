"use client";
import { useState } from "react";
import CreateOffer from "./CreateOffer";

export default function OfferActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="text-lg leading-none">＋</span>
        Vytvořit nabídku
      </button>

      {open && <CreateOffer onClose={() => setOpen(false)} />}
    </>
  );
}
