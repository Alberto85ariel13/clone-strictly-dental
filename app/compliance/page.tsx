import Image from "next/image";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="pb-20">
      <section className="overflow-hidden bg-[var(--sd-navy)] text-white">
        <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
          <div className="sd-container flex w-full items-center py-16 lg:py-24">
            <div className="max-w-2xl space-y-8">
              <h1 className="text-[clamp(3rem,5vw,5rem)] font-medium">
                Compliance
              </h1>
              <p className="text-[clamp(1.4rem,2vw,2rem)] leading-10 text-white/80">
                We are experts in compliance, so you can rest easy knowing
                everything is taken care of.
              </p>
              <p className="text-xl leading-10 text-white/75">
                Merchants must adhere to the contractual rules set by card
                brands (like Visa and MasterCard) to pass on credit card fees.
                Strictly provides a turnkey solution to ensure full
                compliance.
              </p>
            </div>
          </div>
          <div className="min-h-[360px]">
            <Image
              src="/assets/blob.png"
              alt="Compliance hero"
              width={2046}
              height={1432}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="sd-container py-16">
        <h2 className="mb-14 text-center text-[clamp(2.8rem,4vw,4.6rem)] font-medium">
          We Handle the Card Brand Rules for You
        </h2>
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="space-y-5">
            <h3 className="text-4xl font-medium">The Regulations</h3>
            <p className="text-xl leading-10 sd-muted">
              The merchant must be registered with the card brands to utilize
              efficient dental payment solutions. They should inform customers
              of any credit card fee through appropriate signage at the store
              entrance (if applicable) and at the point of sale, ensuring
              transparency in all patient financing options. The credit card
              fee amount must not exceed 3%, and the merchant should not profit
              from this fee.
            </p>
          </article>
          <article className="space-y-5">
            <h3 className="text-4xl font-medium">Our Solution</h3>
            <p className="text-xl leading-10 sd-muted">
              Our team completes each registration on your behalf, ensuring a
              smooth process for your dental payment solutions. We provide you
              with all necessary signage to keep customers informed and ensure
              compliance with regulations. With our Variable Rate Surcharging™
              solution, merchants can participate in the surcharge amount
              passed on to the cardholder while keeping debit card acceptance
              fee-free.
            </p>
          </article>
        </div>
      </section>

      <section className="sd-container py-12 text-center">
        <h2 className="sd-section-title mb-10">Compliant Surcharging Map</h2>
        <div className="overflow-hidden rounded-[2rem] bg-white p-4 md:p-8">
          <Image
            src="/assets/compliance-map.png"
            alt="Compliant surcharging map"
            width={2560}
            height={1792}
            className="mx-auto h-auto w-full max-w-[1120px]"
          />
        </div>
      </section>

      <section className="bg-[var(--sd-navy)] py-16 text-center">
        <Link href="/contact-us" className="sd-button px-12 text-sm">
          Request Demo
        </Link>
      </section>
    </div>
  );
}
