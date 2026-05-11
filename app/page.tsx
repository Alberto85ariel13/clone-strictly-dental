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

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="sd-container pt-8 pb-0">
        <div className="flex justify-end">
          <div className="rounded-none bg-neutral-300 px-6 py-3 text-center text-[clamp(1.15rem,2vw,2rem)] font-bold text-[#3544d5]">
            Support: (800) 800-8240
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Image
          src="/assets/new-header.png"
          alt="Strictly Dental hero"
          width={2560}
          height={1600}
          className="h-auto w-full"
          priority
        />
      </section>

      <section className="sd-container -mt-12 relative z-10 grid gap-8 py-12 md:grid-cols-3">
        {statCards.map((card) => (
          <article key={card.value} className="sd-card px-8 py-10 text-center">
            <h2 className="mb-5 text-5xl font-bold text-[var(--sd-navy)]">
              {card.value}
            </h2>
            <p className="text-[1.05rem] leading-8">{card.label}</p>
          </article>
        ))}
      </section>

      <section className="sd-lavender py-24">
        <div className="sd-container text-center">
          <h2 className="sd-section-title mb-5">
            Payments Designed for Dental Practices
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-9 text-[var(--sd-text-soft)]">
            Reduce costs, streamline billing, and improve cash flow with the
            same visual language and service structure used on
            strictlydental.com.
          </p>
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

      <section className="sd-container py-8 text-center">
        <h2 className="sd-section-title mb-4">Our Partners</h2>
        <p className="mb-10 text-2xl font-medium">
          Work Seamlessly with Your Dental Softwares
        </p>
        <div className="sd-card overflow-hidden p-4 md:p-8">
          <Image
            src="/assets/dgrf.jpg"
            alt="Strictly Dental partners"
            width={1095}
            height={1095}
            className="mx-auto h-auto w-full max-w-[880px]"
          />
        </div>
      </section>

      <section className="sd-container py-20">
        <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] bg-white px-6 py-10 text-center shadow-[0_20px_60px_rgba(38,41,116,0.08)] md:flex-row md:text-left">
          <h3 className="text-[clamp(2rem,3vw,3.3rem)] font-bold text-[var(--sd-navy)]">
            Give Your Patients a Better Payment Experience
          </h3>
          <Link href="/contact-us" className="sd-button px-10 text-sm">
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
