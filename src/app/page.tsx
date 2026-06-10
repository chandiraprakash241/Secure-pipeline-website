"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryItem = {
  title: string;
  category: string;
  src: string;
  alt: string;
};

type FormState = {
  name: string;
  phone: string;
  area: string;
  project: string;
  message: string;
};

const phoneNumber = "919940307142";
const phoneDisplay = "99403 07142";
const address =
  "No: 3/582, SRS Tower, Kanniyamman Kovil Street, Veeranam Road, Kelambakkam, Chennai, Tamil Nadu 603103";

const heroImage =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80";

const galleryImages: GalleryItem[] = [
  {
    title: "Residential pipeline upgrade",
    category: "Homes & villas",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    alt: "Residential gas pipeline installation project",
  },
  {
    title: "Apartment kitchen line",
    category: "Apartments",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    alt: "Apartment LPG installation project",
  },
  {
    title: "Commercial kitchen routing",
    category: "Restaurants",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Commercial kitchen gas pipeline project",
  },
  {
    title: "Hotel utility installation",
    category: "Hotels",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Hotel gas pipeline installation project",
  },
  {
    title: "Industrial safety setup",
    category: "Industrial facilities",
    src: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial pipeline installation project",
  },
  {
    title: "Before and after inspection",
    category: "Maintenance",
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    alt: "Pipeline inspection and maintenance project",
  },
];

const services = [
  {
    title: "Residential LPG Pipeline Installation",
    description: "Safe, neat installations for independent homes and family residences.",
    icon: "home",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Villa Gas Pipeline Systems",
    description: "Custom layouts designed for premium villas and duplex homes.",
    icon: "villa",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Apartment Gas Pipeline Installation",
    description: "Multi-unit safe routing with clean finishes and coordinated execution.",
    icon: "apartment",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hotel & Restaurant Gas Pipeline Solutions",
    description: "Commercial kitchen lines designed for busy hospitality operations.",
    icon: "restaurant",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Commercial Building Installations",
    description: "Office and retail pipeline systems with compliance-first planning.",
    icon: "commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Industrial Gas Pipeline Systems",
    description: "High-demand setups built around process safety and uptime.",
    icon: "factory",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Gas Leak Detection",
    description: "Fast diagnosis using practical inspection and testing methods.",
    icon: "search",
    image: "https://images.unsplash.com/photo-1581093458791-9d6c7b3b1b0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Maintenance & Inspection",
    description: "Routine checks that keep systems efficient and safe.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pipeline Repair Services",
    description: "Targeted repairs to restore performance without unnecessary downtime.",
    icon: "tools",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Safety Audits",
    description: "Detailed checks to strengthen compliance and reduce risk.",
    icon: "audit",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
];

const whyChooseUs = [
  { title: "Certified Professionals", icon: "badge" },
  { title: "Safety Compliance", icon: "shield" },
  { title: "Affordable Pricing", icon: "tag" },
  { title: "On-Time Service", icon: "clock" },
  { title: "Quality Materials", icon: "check" },
  { title: "Reliable Support", icon: "headset" },
  { title: "Customized Solutions", icon: "custom" },
  { title: "Trusted Service", icon: "star" },
];

const processSteps = [
  "Site Inspection",
  "Planning & Design",
  "Safety Assessment",
  "Installation",
  "Testing & Verification",
  "Project Handover",
];

const reviews = [
  {
    quote: "On time service with reasonable rates.",
    rating: 5,
    source: "Google Review",
  },
  {
    quote: "The work was neat and good as promised.",
    rating: 5,
    source: "Google Review",
  },
  {
    quote: "Excellent customer service and high-quality products.",
    rating: 5,
    source: "Google Review",
  },
];

const faqs = [
  {
    question: "How much does LPG gas pipeline installation cost?",
    answer:
      "Pricing depends on the property type, line length, safety requirements, and material selection. We inspect the site first and share a clear quote before work begins.",
  },
  {
    question: "Do you follow safety standards during installation?",
    answer:
      "Yes. Every project is planned with safety checks, correct routing, leak testing, and verification before handover.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most residential jobs can be completed quickly after inspection. Larger commercial and industrial projects are scheduled based on scope and access.",
  },
  {
    question: "Do you provide maintenance and inspection services?",
    answer:
      "Yes. We handle maintenance, inspection, leak detection, repairs, and safety audits for existing systems.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "We work across Chennai, Kelambakkam, OMR, ECR, Navalur, Sholinganallur, Tambaram, Chengalpattu, and nearby areas.",
  },
];

const serviceAreas = [
  "Chennai",
  "Kelambakkam",
  "OMR",
  "ECR",
  "Navalur",
  "Sholinganallur",
  "Tambaram",
  "Chengalpattu",
];

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

function buildDirectionsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function buildMapEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

function Icon({ kind }: { kind: string }) {
  const common = "h-5 w-5";

  switch (kind) {
    case "home":
    case "villa":
    case "apartment":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10.5V20h14v-9.5" />
          <path d="M9 20v-5h6v5" />
        </svg>
      );
    case "restaurant":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M7 3v8" />
          <path d="M5 3v8" />
          <path d="M5 7h4" />
          <path d="M10 3v18" />
          <path d="M15 3v8a3 3 0 0 0 3 3v7" />
        </svg>
      );
    case "commercial":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M4 20V4h16v16" />
          <path d="M8 20v-8h8v8" />
          <path d="M8 8h8" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M4 20V9l6 4V9l6 4V7l4 2v11H4Z" />
          <path d="M7 20v-5h3v5" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 5 6v6c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" />
          <path d="m9.5 12 1.9 1.9L15 10.3" />
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="m14.5 6.5 3 3" />
          <path d="M15 5 9 11" />
          <path d="M5 19l5.5-5.5 3 3L8 22H5z" />
          <path d="M16.5 3.5a4 4 0 0 0 4 4l-4 4-4-4 4-4Z" />
        </svg>
      );
    case "audit":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M7 3h10l3 3v15H4V3h3Z" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2 9 5H5v4l-3 3 3 3v4h4l3 3 3-3h4v-4l3-3-3-3V5h-4l-3-3Z" />
        </svg>
      );
    case "tag":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M20 13 13 20a2 2 0 0 1-2.8 0L4 13V4h9l7 7Z" />
          <circle cx="8.5" cy="8.5" r="1.2" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="m5 13 4 4L19 7" />
        </svg>
      );
    case "headset":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M4 14v-1a8 8 0 0 1 16 0v1" />
          <path d="M4 15a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2v2Z" />
          <path d="M20 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2v2Z" />
        </svg>
      );
    case "custom":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.8">
          <path d="M4 6h16" />
          <path d="M4 12h10" />
          <path d="M4 18h16" />
          <path d="m15 10 4 2-4 2" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#25D366]">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    area: "",
    project: "Residential LPG Pipeline Installation",
    message: "",
  });

  const heroCtas = useMemo(
    () => [
      {
        label: "WhatsApp Now",
        href: buildWhatsAppUrl(
          "Hello Secure Pipeline, I would like a free quote for LPG gas pipeline installation."
        ),
      },
      { label: "Call Now", href: `tel:+${phoneNumber}` },
      { label: "Get Free Quote", href: "#contact" },
    ],
    []
  );

  const submitQuote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello Secure Pipeline, I need a free quote.",
      `Name: ${form.name || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Area: ${form.area || "Not provided"}`,
      `Project: ${form.project}`,
      `Details: ${form.message || "Please contact me with more information."}`,
    ].join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Secure Pipeline",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No: 3/582, SRS Tower, Kanniyamman Kovil Street, Veeranam Road",
      addressLocality: "Kelambakkam",
      addressRegion: "Tamil Nadu",
      postalCode: "603103",
      addressCountry: "IN",
    },
    telephone: `+${phoneNumber}`,
    areaServed: serviceAreas,
    url: "https://securepipeline.example.com",
    sameAs: [buildWhatsAppUrl("Hello Secure Pipeline")],
    description:
      "LPG gas pipeline installation, maintenance, inspection, and repair services across Chennai and surrounding areas.",
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-white shadow-lg shadow-slate-900/20 transition group-hover:scale-105">
              <span className="font-display text-lg font-bold">SP</span>
            </div>
            <div>
              <p className="font-display text-lg font-semibold leading-none text-slate-900">Secure Pipeline</p>
              <p className="text-xs text-slate-500">Kelambakkam, Chennai</p>
            </div>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:+${phoneNumber}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#25D366]" />
              Call {phoneDisplay}
            </a>
            <a
              href={buildWhatsAppUrl("Hello Secure Pipeline, I would like a free quote.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5"
            >
              WhatsApp Quote
            </a>
          </div>
        </div>
      </div>

      <header
        id="top"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#0f172a_0%,#13213d_46%,#f8fafc_46%,#ffffff_100%)] pt-28"
      >
        <div className="absolute inset-0 -z-10 opacity-35">
          <Image
            src={heroImage}
            alt="Gas pipeline installation background"
            fill
            preload
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,211,102,0.34),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.74),rgba(15,23,42,0.45),rgba(255,255,255,0.95))]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-20">
          <div className="pt-6 text-white lg:pt-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              <span className="text-[#25D366]">⭐</span>
              4.9 Google Rating
            </div>
            <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Safe & Reliable LPG Gas Pipeline Installation Services
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg lg:text-xl">
              Serving Homes, Villas, Apartments, Hotels, Restaurants, Commercial Buildings, and Industrial Facilities Across Chennai, OMR, ECR, and Surrounding Areas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {heroCtas.map((cta, index) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={index === 0 ? "_blank" : undefined}
                  rel={index === 0 ? "noreferrer" : undefined}
                  className={[
                    "inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition",
                    index === 0
                      ? "bg-[#25D366] text-white shadow-xl shadow-emerald-500/25 hover:-translate-y-0.5"
                      : index === 1
                      ? "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/15"
                      : "bg-white px-6 py-4 text-slate-900 shadow-lg shadow-slate-900/10 hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  {cta.label}
                </a>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Fast site visits", "Quick inspection and actionable quote"],
                ["Safety-first builds", "Leak testing and quality verification"],
                ["Trusted across Chennai", "Residential, commercial, industrial"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pt-10">
            <div className="animate-floaty absolute -right-4 top-8 hidden h-28 w-28 rounded-full bg-[#25D366]/20 blur-2xl lg:block" />
            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
              <div className="overflow-hidden rounded-[1.5rem]">
                <div className="relative h-[22rem] w-full sm:h-[28rem]">
                  <Image src={heroImage} alt="Secure Pipeline service visual" fill preload className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Homes",
                        "Hotels",
                        "Restaurants",
                        "Industrial",
                      ].map((item) => (
                        <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-slate-100">
                      Clean work, reliable workmanship, and customer-friendly service that keeps enquiries moving.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-2">
                {[
                  ["Free quote", "Within a quick call or WhatsApp message"],
                  ["Coverage", "Kelambakkam, OMR, ECR, Chennai"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500">{title}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-slate-900">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["24/7 lead capture", "Phone, WhatsApp, and quote form always visible"],
            ["Safety-focused", "Structured installation and testing workflow"],
            ["Broad expertise", "Homes to industrial sites"],
            ["Chennai coverage", "OMR, ECR, and nearby service areas"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="font-display text-lg font-semibold text-slate-900">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Built around safety, speed, and trust."
              description="Secure Pipeline focuses on clean execution, careful planning, and service that makes it easy for customers to enquire and move forward quickly."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Safety-first approach", "Every job starts with a practical site check."],
                ["Experienced technicians", "Hands-on work across residential and industrial jobs."],
                ["Quality workmanship", "Clean routing, reliable fittings, and neat finishing."],
                ["Customer satisfaction", "Clear communication from enquiry to handover."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                    <Icon kind="shield" />
                  </div>
                  <p className="mt-4 font-display text-xl font-semibold text-slate-900">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-white transition group-hover:bg-[#25D366]">
                  <Icon kind={item.icon} />
                </div>
                <p className="mt-4 font-display text-xl font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">A conversion-focused service promise customers can trust immediately.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50/80 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Everything customers need in one clear service lineup."
            description="Each card leads with an image and a simple service promise so visitors can quickly understand what Secure Pipeline handles."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-52">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1280px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-slate-900 shadow-lg backdrop-blur-md">
                    <Icon kind={service.icon} />
                  </div>
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-slate-900">{service.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="Simple, transparent workflow."
          description="The installation journey is easy to understand and designed to move the customer to the next step quickly."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {processSteps.map((step, index) => (
            <div key={step} className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-bold text-white">
                {index + 1}
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-slate-900">{step}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Clear, documented, and focused on safety.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-slate-50/70 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Real-world visuals that build confidence quickly."
            description="Tap any image to open the lightbox and explore project types, from residential jobs to commercial kitchens and industrial work."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onClick={() => setLightboxIndex(index)}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72">
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1280px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#25D366]">{item.category}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Trust signals that help enquiries happen faster."
          description="Short, high-signal testimonials paired with strong star ratings and Google-style presentation."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.quote} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 text-[#25D366]">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Icon key={index} kind="star" />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-700">“{review.quote}”</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{review.source}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#0F172A] p-6 text-white shadow-2xl shadow-slate-900/20 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#25D366]">Google rating</p>
                <p className="font-display mt-3 text-5xl font-semibold">4.9/5</p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#25D366]">
                <Icon kind="star" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Fast response", "Visitors can contact the team in seconds."],
                ["Confidence", "Strong visuals and direct calls-to-action."],
                ["Local service", "Focused on Chennai, OMR, ECR, and Kelambakkam."],
                ["Lead-ready", "WhatsApp, phone, and quote form stay visible."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="service-areas" className="bg-slate-50/80 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Areas"
            title="Coverage built for local visibility and local trust."
            description="This area list and embedded map make it obvious that Secure Pipeline is ready to respond across Chennai and nearby growth corridors."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-display text-2xl font-semibold text-slate-900">Areas we serve</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {serviceAreas.map((area) => (
                  <div key={area} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-4">
                <p className="font-display text-2xl font-semibold text-slate-900">Google Map</p>
                <p className="mt-1 text-sm text-slate-600">No: 3/582, SRS Tower, Kanniyamman Kovil Street, Veeranam Road, Kelambakkam, Chennai, Tamil Nadu 603103</p>
              </div>
              <iframe
                title="Secure Pipeline service area map"
                src={buildMapEmbedUrl()}
                className="h-[22rem] w-full border-0 sm:h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers that reduce friction before the first call."
          description="Use these short answers to help visitors understand installation cost, safety, duration, maintenance, and service coverage."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm open:shadow-lg">
              <summary className="cursor-pointer list-none font-display text-xl font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#0F172A] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Make contact in under 5 seconds."
                description="The phone number, WhatsApp button, and enquiry form stay visible so the visitor always has an immediate next step."
              />

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:+${phoneNumber}`}
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <div>
                    <p className="text-sm text-slate-300">Call now</p>
                    <p className="font-display text-2xl font-semibold">{phoneDisplay}</p>
                  </div>
                  <span className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white">Tap to call</span>
                </a>

                <a
                  href={buildWhatsAppUrl("Hello Secure Pipeline, I would like a free quote.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.5rem] border border-[#25D366]/30 bg-[#25D366] px-5 py-4 text-slate-900 transition hover:-translate-y-0.5"
                >
                  <div>
                    <p className="text-sm font-semibold text-emerald-950/80">WhatsApp enquiry</p>
                    <p className="font-display text-2xl font-semibold text-white">Get a quick response</p>
                  </div>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">Message now</span>
                </a>

                <a
                  href={buildDirectionsUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <div>
                    <p className="text-sm text-slate-300">Directions</p>
                    <p className="font-display text-2xl font-semibold">Kelambakkam office</p>
                  </div>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">Open map</span>
                </a>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#25D366]">Business info</p>
                <p className="mt-3 font-display text-2xl font-semibold">Secure Pipeline</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{address}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white p-5 text-slate-900 shadow-2xl shadow-slate-950/20 sm:p-7">
              <p className="font-display text-3xl font-semibold text-slate-900">Free Quote Request</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Send the basics and the form opens WhatsApp with your enquiry details prefilled.</p>

              <form onSubmit={submitQuote} className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#25D366] focus:bg-white"
                    placeholder="Your name"
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Phone</span>
                  <input
                    required
                    value={form.phone}
                    onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#25D366] focus:bg-white"
                    placeholder="Mobile number"
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Area</span>
                  <input
                    required
                    value={form.area}
                    onChange={(event) => setForm((current) => ({ ...current, area: event.target.value }))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#25D366] focus:bg-white"
                    placeholder="Kelambakkam, OMR..."
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Project type</span>
                  <select
                    value={form.project}
                    onChange={(event) => setForm((current) => ({ ...current, project: event.target.value }))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#25D366] focus:bg-white"
                  >
                    {services.map((service) => (
                      <option key={service.title}>{service.title}</option>
                    ))}
                  </select>
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#25D366] focus:bg-white"
                    placeholder="Tell us about the site, timeline, or service needed."
                  />
                </label>

                <div className="sm:col-span-2 grid gap-3 sm:grid-cols-3">
                  <button
                    type="submit"
                    className="rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Request Free Quote
                  </button>
                  <a
                    href={`tel:+${phoneNumber}`}
                    className="rounded-full border border-slate-200 px-5 py-4 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Call Secure Pipeline
                  </a>
                  <a
                    href={buildWhatsAppUrl("Hello Secure Pipeline, I need a quote for LPG gas pipeline installation.")}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-200 px-5 py-4 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Open WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="font-display text-2xl font-semibold text-slate-900">Secure Pipeline</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">LPG gas pipeline installation, repair, inspection, and safety services across Chennai and surrounding areas.</p>
          </div>

          <div>
            <p className="font-display text-lg font-semibold text-slate-900">Quick Links</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              {[
                ["Services", "#services"],
                ["Gallery", "#gallery"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-slate-900">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold text-slate-900">Contact</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              <a href={`tel:+${phoneNumber}`} className="transition hover:text-slate-900">
                Phone: {phoneDisplay}
              </a>
              <a href={buildDirectionsUrl()} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
                Directions on Google Maps
              </a>
              <a href={buildWhatsAppUrl("Hello Secure Pipeline, I would like a free quote.")} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 px-4 pt-6 text-sm text-slate-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Secure Pipeline. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={buildWhatsAppUrl("Hello Secure Pipeline, I need a quick quote.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          WhatsApp
        </a>
        <a
          href={`tel:+${phoneNumber}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-950/25 transition hover:-translate-y-0.5"
        >
          Call
        </a>
        <a
          href={buildDirectionsUrl()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5"
        >
          Directions
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-3 gap-2 px-3 py-3">
          <a href={`tel:+${phoneNumber}`} className="rounded-2xl bg-slate-900 px-3 py-3 text-center text-sm font-semibold text-white">
            Call
          </a>
          <a href={buildWhatsAppUrl("Hello Secure Pipeline, I need a quick quote.")} target="_blank" rel="noreferrer" className="rounded-2xl bg-[#25D366] px-3 py-3 text-center text-sm font-semibold text-white">
            WhatsApp
          </a>
          <a href={buildDirectionsUrl()} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 px-3 py-3 text-center text-sm font-semibold text-slate-700">
            Directions
          </a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/90 px-4 py-6 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
          role="presentation"
        >
          <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
            <div
              className="relative w-full overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              role="presentation"
            >
              <div className="relative h-[32rem] w-full">
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#25D366]">{galleryImages[lightboxIndex].category}</p>
                  <p className="font-display mt-2 text-2xl font-semibold text-slate-900">{galleryImages[lightboxIndex].title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
