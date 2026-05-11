import Image from "next/image";
import Link from "next/link";

const statCards = [
  {
    value: "28+",
    label: "Years Driving Innovation in Payment Solutions",
  },
  {
    value: "5000+",
    label: "Active Users Drive Sales Through Strictly Each Day",
  },
  {
    value: "1200+",
    label: "Dental Offices Trust Strictly for Payments",
  },
];

const paymentFeatureCards = [
  {
    title: "Simplify Administration",
    src: "/assets/payment-card-1-transparent.png",
  },
  {
    title: "Enhance Patient Experience",
    src: "/assets/payment-card-2-transparent.png",
  },
  {
    title: "Increase Cash Flow",
    src: "/assets/payment-card-3-transparent.png",
  },
  {
    title: "HIPAA-Compliant Workflows",
    src: "/assets/payment-card-4-transparent.png",
  },
];

const partnerLogos = [
  { name: "Dentrix", src: "/assets/denttrix.jpg" },
  { name: "Open Dental Software", src: "/assets/opdend.jpg" },
  { name: "Eaglesoft", src: "/assets/eaglesoft.jpg" },
  { name: "ClearDent", src: "/assets/cleard-6372e9e.jpg" },
  { name: "Carestream Dental", src: "/assets/carext.jpg" },
  { name: "DSN", src: "/assets/logo-dsn.png" },
  { name: "Planet DDS", src: "/assets/logo-planet-dds.png" },
  { name: "Tracker", src: "/assets/logo-tracker.png" },
  { name: "Practice-Web", src: "/assets/logo-practice-web.png" },
  { name: "QuickBooks", src: "/assets/dgrf.jpg" },
];

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10">
          <div className="sd-container flex justify-end pt-1 sm:pt-3 lg:pt-5">
            <div className="w-full max-w-[16rem] bg-[#cbcbcb] px-3.75 py-1.6 text-center text-[0.9rem] font-extrabold tracking-[0.01em] text-[#3942d7] sm:max-w-[17.5rem] sm:px-4.25 sm:py-1.9 sm:text-[0.98rem] md:max-w-[19rem] md:px-4.5 md:py-2 md:text-[1.08rem] lg:mr-[4rem] lg:max-w-[20.5rem] lg:px-5.25 lg:py-2.45 lg:text-[1.24rem]">
              Support: (800) 800-8240
            </div>
          </div>
        </div>
        <Image
          src="/assets/new-header.png"
          alt="Strictly Dental hero"
          width={2560}
          height={1600}
          className="h-auto w-full"
          priority
        />
      </section>

      <section className="sd-container relative z-10 grid gap-8 py-16 md:grid-cols-3 lg:py-20">
        {statCards.map((card) => (
          <article key={card.value} className="sd-card px-8 py-10 text-center">
            <h2 className="mb-5 text-5xl font-bold text-[var(--sd-navy)]">
              {card.value}
            </h2>
            <p className="text-[1.05rem] leading-8">{card.label}</p>
          </article>
        ))}
      </section>

      <section className="bg-[#cbc5de] py-16 lg:py-20">
        <div className="sd-container">
          <h2 className="mb-10 text-center text-4xl leading-tight font-bold tracking-normal text-[var(--sd-navy)] md:text-5xl lg:mb-12">
            Payments Designed for Dental Practices
          </h2>
          <div className="mx-auto grid max-w-[84rem] gap-5 md:grid-cols-2 xl:grid-cols-4">
            {paymentFeatureCards.map((card) => (
              <Image
                key={card.title}
                src={card.src}
                alt={card.title}
                width={2560}
                height={2560}
                className="h-auto w-full bg-transparent"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sd-container py-24">
        <div className="mb-10 text-center">
          <h2 className="sd-section-title">Patient Financing</h2>
        </div>
        <div className="sd-card overflow-hidden p-6 md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <p className="text-xl leading-9 text-[var(--sd-text-soft)]">
                Give your patients more ways to pay with affordable,
                flexible, simple options powered by U.S. Bank Avvance.
              </p>
              <Image
                src="/assets/choose-right-payment-processor.png"
                alt="Patient financing benefits"
                width={1888}
                height={1640}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
            <Image
              src="/assets/rth.png"
              alt="Patient financing illustration"
              width={2000}
              height={1600}
              className="h-auto w-full rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center lg:py-20">
        <div className="sd-container">
          <h2 className="mb-8 text-4xl leading-tight font-bold text-[var(--sd-navy)] md:text-5xl">
            Our Partners
          </h2>
          <p className="mb-12 text-2xl font-semibold text-[#171717]">
          Work Seamlessly with Your Dental Softwares
          </p>
          <div className="mx-auto grid max-w-[92rem] grid-cols-2 items-center gap-x-9 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-9">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="relative mx-auto h-16 w-full max-w-[13.5rem]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(min-width: 1024px) 14rem, (min-width: 640px) 33vw, 50vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-lavender py-10 lg:py-12">
        <div className="sd-container flex flex-col items-center justify-center gap-5 text-center md:flex-row md:text-left lg:gap-6">
          <h3 className="text-[1.75rem] leading-tight font-bold text-[var(--sd-navy)] md:text-[2.1rem] lg:text-[2.35rem]">
            Give Your Patients a Better Payment Experience
          </h3>
          <Link href="/contact-us" className="sd-button min-h-[3.15rem] min-w-[13.5rem] px-9 text-sm">
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
