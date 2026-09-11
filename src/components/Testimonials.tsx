import StaticImage from "@/components/StaticImage";
import { business } from "@/lib/business";

const testimonials = [
  {
    name: "Priya S.",
    location: "Koramangala",
    rating: 5,
    text: "Called Meghana Ambulance at 2 AM when my father had a cardiac episode. The team arrived quickly and the staff nurse on board was calm and professional throughout. Highly recommended.",
  },
  {
    name: "Ravi Kumar",
    location: "Whitefield",
    rating: 5,
    text: "We needed a hospital-to-hospital transfer for my mother from a private hospital to a specialty center. Meghana handled everything smoothly — punctual, experienced, and caring staff.",
  },
  {
    name: "Anitha M.",
    location: "Jayanagar",
    rating: 5,
    text: "Used their service for a long-distance transfer from Bangalore to Mysore. The driver was very experienced on the route and the journey was as comfortable as it could be for the patient.",
  },
  {
    name: "Deepak R.",
    location: "Hebbal",
    rating: 5,
    text: "24/7 availability is real — I called on a Sunday morning and got immediate assistance. The team coordinated with the receiving hospital too. Very professional service.",
  },
  {
    name: "Sunitha B.",
    location: "BTM Layout",
    rating: 5,
    text: "When my husband needed an emergency ambulance, the response was fast and the staff nurse was reassuring throughout the journey. The direct phone lines make a huge difference in a crisis.",
  },
  {
    name: "Mohammed A.",
    location: "Indiranagar",
    rating: 5,
    text: "We had to arrange multiple hospital transfers for an elderly relative over two weeks. Meghana Ambulance was consistent, punctual, and the staff nurse was attentive every time.",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-4 w-4 ${filled ? "text-amber-400" : "text-gray-200"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < count} />
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  hidden,
}: {
  t: (typeof testimonials)[number];
  hidden?: boolean;
}) {
  return (
    <figure
      aria-hidden={hidden}
      className="mr-5 flex w-[19rem] shrink-0 flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:w-[22rem]"
    >
      <div className="flex items-center justify-between">
        <Stars count={t.rating} />
        <StaticImage
          src="/images/Google_Favicon_2025.svg"
          alt="Google"
          width={16}
          height={16}
        />
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-medblue-100 text-sm font-bold text-medblue-700">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-navy-900">{t.name}</p>
          <p className="text-xs text-ink-400">{t.location}, Bangalore</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
        },
        author: { "@type": "Person", name: t.name },
        reviewBody: t.text,
        itemReviewed: {
          "@type": "MedicalBusiness",
          name: "Meghana Lifecare Ambulance Service",
        },
      },
    })),
  };

  return (
    <section id="testimonials" className="bg-slate-50 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-medblue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-medblue-700 ring-1 ring-medblue-100">
            What Families Say
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            Trusted by Families Across Bangalore
          </h2>
          <p className="mt-3 text-ink-500">
            Real experiences from patients and families who relied on
            Meghana Lifecare Ambulance Service during critical moments.
          </p>
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-navy-900 shadow-sm transition-colors hover:bg-black/[.02]"
          >
            <StaticImage
              src="/images/Google_Favicon_2025.svg"
              alt=""
              width={18}
              height={18}
            />
            Write a Review on Google
          </a>
        </div>
      </div>

      <div className="marquee mt-10">
        <div className="marquee-track py-1">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
          {testimonials.map((t) => (
            <TestimonialCard key={`${t.name}-repeat`} t={t} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
