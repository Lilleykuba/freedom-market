import React from "react";
import Header from "../ui/header";
import { supabaseServer } from "@/utils/supabase/server";
import OfferActions from "../../components/OfferActions";

export const dynamic = "force-dynamic";
export default async function NabidkyPage() {
  const supabase = supabaseServer();
  const { data: offers } = await supabase
    .from("offers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <Header title="Nabídky" description="Prohlédněte si aktuální nabídky." />

      <main className="max-w-6xl mx-auto space-y-6 px-4 pt-8">
        {/* header */}
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Nabídky</h1>
          <OfferActions />
        </header>

        {/* grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers?.map((o) => (
            <article
              key={o.id}
              className="card rounded-xl bg-white p-5 shadow ring-1 ring-gray-200/60 transition hover:shadow-lg"
            >
              <h2 className="mb-1 text-lg font-semibold">{o.title}</h2>
              {o.description && (
                <p className="line-clamp-3 text-sm text-gray-600">
                  {o.description}
                </p>
              )}
              {o.price_czk && (
                <span className="mt-3 block font-mono text-blue-700">
                  {o.price_czk} Kč
                </span>
              )}
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
