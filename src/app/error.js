"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-10 bg-slate-950 text-white">
      <div className="max-w-xl rounded-3xl border border-slate-700 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
        <h1 className="text-3xl font-semibold mb-4">Something went wrong</h1>
        <p className="text-slate-300 mb-6">An unexpected error occurred while rendering this page.</p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-slate-200 px-5 py-2 text-slate-950 hover:bg-slate-100"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
