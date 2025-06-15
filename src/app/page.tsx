import React from "react";
import "./globals.css";
import Header from "./ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Freedom Market</h1>
        <p className="mt-4 text-lg">
          A decentralized marketplace for freedom-loving individuals.
        </p>
      </main>
    </>
  );
}
