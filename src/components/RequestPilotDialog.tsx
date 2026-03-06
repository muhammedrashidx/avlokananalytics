"use client";

import React, { createContext, useContext, useState, FormEvent } from "react";

type RequestPilotDialogContextValue = {
  openDialog: () => void;
  closeDialog: () => void;
};

const RequestPilotDialogContext = createContext<RequestPilotDialogContextValue | undefined>(
  undefined,
);

export const useRequestPilotDialog = () => {
  const ctx = useContext(RequestPilotDialogContext);
  if (!ctx) {
    throw new Error("useRequestPilotDialog must be used within RequestPilotDialogProvider");
  }
  return ctx;
};

export const RequestPilotDialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const openDialog = () => {
    setResult("");
    setOpen(true);
  };

  const closeDialog = () => {
    setResult("");
    setOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult("Missing Web3Forms access key. Add it in .env.local first.");
      return;
    }

    setSubmitting(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      formData.append("access_key", accessKey);
      formData.append("subject", "New Pilot Request from Website");
      formData.append("from_name", "Avlokan Analytics Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Submitted successfully. We will reach out soon.");
        form.reset();

        setTimeout(() => {
          closeDialog();
        }, 1200);
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <RequestPilotDialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8 cursor-pointer"
          onClick={closeDialog}
          role="presentation"
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-zinc-200 overflow-hidden cursor-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Request a Pilot / Collaborate with Us"
          >
            <div className="relative px-5 py-4 pr-14 border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/60" />

              <h2 className="text-base sm:text-lg font-semibold tracking-normal text-zinc-800 leading-snug">
                Request a Pilot / Collaborate with Us
              </h2>

              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                Share a few details and we’ll reach out.
              </p>

              <button
                type="button"
                onClick={closeDialog}
                className="absolute right-2 top-2 h-9 w-9 grid place-items-center rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 text-sm cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
              {/* Hidden bot field for spam protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-zinc-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="businessType" className="text-xs font-medium text-zinc-700">
                  Type of Business
                </label>
                <input
                  id="businessType"
                  name="businessType"
                  type="text"
                  required
                  placeholder="e.g., FMCG, logistics, energy, public sector…"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="collaboration" className="text-xs font-medium text-zinc-700">
                  How would you like us to collaborate with you?
                </label>
                <textarea
                  id="collaboration"
                  name="collaboration"
                  required
                  rows={4}
                  placeholder="Describe your problem, goals, and what success looks like…"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none resize-y focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact" className="text-xs font-medium text-zinc-700">
                  Contact (Email / Phone Number)
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  placeholder="Email or phone number"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {result && (
                <p className="text-sm text-zinc-600">
                  {result}
                </p>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeDialog}
                  disabled={submitting}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900 cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-primary px-4 py-2.5 text-xs font-mono uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow cursor-pointer disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </RequestPilotDialogContext.Provider>
  );
};