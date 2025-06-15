import React from "react";
import Header from "../ui/header";

export default function Poptávky() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center px-24 py-12">
        <h1 className="text-4xl font-bold">Poptávky</h1>
        <div className="mt-8 text-center space-y-4">
          <p className="mt-4 text-lg">
            Zde můžete procházet a přidávat poptávky na produkty a služby.
          </p>
          {/* Placeholder for future content */}
          <p>Brzy zde budou vaše poptávky.</p>
        </div>
      </main>
    </>
  );
}
