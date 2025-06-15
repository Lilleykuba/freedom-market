"use client";

import { FormEvent, useRef, useTransition } from "react";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function CreateOffer({ onClose }: { onClose: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, start] = useTransition();
  const router = useRouter();

  async function submit(e: FormEvent) {
    e.preventDefault();
    const fd = new FormData(formRef.current!);
    start(async () => {
      await supabase.from("offers").insert({
        title: fd.get("title"),
        description: fd.get("description"),
        price_czk: Number(fd.get("price") || 0),
      });
      onClose();
      router.refresh();
    });
  }

  return (
    <dialog
      open
      className="fixed inset-0 m-auto z-50 grid place-items-center border-2 border-gray-300 rounded-md backdrop-blur-sm"
    >
      <form
        ref={formRef}
        onSubmit={submit}
        className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-lg"
      >
        <h2 className="text-lg font-medium">Nová nabídka</h2>

        <input
          name="title"
          required
          placeholder="Název"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Popis"
          rows={4}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />

        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          placeholder="Cena (Kč)"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="btn inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Zrušit
          </button>
          <button
            disabled={pending}
            className="btn inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 disabled:opacity-50"
          >
            {pending ? "Ukládám…" : "Vytvořit"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
