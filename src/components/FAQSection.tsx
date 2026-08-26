"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/business";
import { ChevronDownIcon } from "@/components/icons";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const idBase = useId();

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="container-page mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 divide-y divide-black/5 rounded-2xl border border-black/5">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            const panelId = `${idBase}-panel-${i}`;
            const buttonId = `${idBase}-button-${i}`;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-navy-900 sm:text-base"
                  >
                    {faq.question}
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-ink-500 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="px-5 pb-4 text-sm leading-relaxed text-ink-500"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
