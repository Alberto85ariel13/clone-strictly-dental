import Image from "next/image";

const paymentSteps = [
  {
    src: "/assets/1-c647be9.png",
    alt: "Customer chooses payment method",
  },
  {
    src: "/assets/2-c083e87.png",
    alt: "Debit cards stay fee free",
  },
  {
    src: "/assets/3-2b58d3f.png",
    alt: "You keep more revenue",
  },
  {
    src: "/assets/4-3a76cd6.png",
    alt: "Everything stays compliant",
  },
];

export default function PaymentsPage() {
  return (
    <div className="pb-20">
      <section className="sd-container py-16">
        <h1 className="sd-page-title mb-12">Simple, Transparent Process</h1>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {paymentSteps.map((step) => (
            <article
              key={step.src}
              className="overflow-hidden rounded-[1.5rem] bg-[#f8f6fb]"
            >
              <Image
                src={step.src}
                alt={step.alt}
                width={730}
                height={973}
                className="h-auto w-full"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="sd-lavender py-24">
        <div className="sd-container text-center">
          <h2 className="sd-section-title mb-16">
            Discover Services for Your Practice
          </h2>
          <div className="grid gap-12 text-[clamp(1.8rem,2.4vw,3rem)] font-bold text-[var(--sd-navy)] md:grid-cols-3">
            <div>Retail</div>
            <div>Card-Not-Present (CNP)</div>
            <div>Mobile Payments</div>
          </div>
        </div>
      </section>

      <section className="sd-lavender py-24">
        <div className="sd-container text-center">
          <h2 className="mb-6 text-[clamp(2.5rem,4vw,4.75rem)] font-bold text-black">
            Give Your Patients a Better Payment Experience
          </h2>
          <p className="mx-auto mb-10 max-w-4xl text-xl leading-9 text-[var(--sd-text-soft)]">
            Reduce costs, streamline billing, and improve cash flow with
            Strictly Dental.
          </p>
          <div className="sd-card overflow-hidden bg-white p-3 md:p-6">
            <Image
              src="/assets/wef.png"
              alt="Payments illustration"
              width={5760}
              height={3240}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
