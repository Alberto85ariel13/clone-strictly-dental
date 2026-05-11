import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="pb-20">
      <section className="sd-container py-16">
        <h1 className="sd-page-title mb-12">Transparent Pricing</h1>

        <div className="grid gap-10 xl:grid-cols-3">
          <article className="border-b border-black/10 pb-8 xl:border-r xl:border-b-0 xl:pr-8">
            <div className="rounded-[1.5rem] bg-[#faf7f4] p-4">
              <Image
                src="/assets/2.jpg"
                alt="Point of sale"
                width={1095}
                height={1460}
                className="h-auto w-full rounded-[1rem]"
              />
            </div>
            <h2 className="mt-6 text-4xl font-bold">Point of Sale</h2>
            <p className="mt-2 text-2xl">Powerful POS, simplified</p>
            <p className="mt-7 text-3xl text-black/60 line-through">$29/month</p>
            <p className="mt-2 text-5xl font-bold text-[var(--sd-orange)]">
              FREE <span className="text-[var(--sd-navy)]">($0/month)</span>
            </p>
            <p className="mt-4 text-xl">* 1 terminal per location included.</p>
          </article>

          <article className="border-b border-black/10 pb-8 xl:border-r xl:border-b-0 xl:px-8">
            <div className="rounded-[1.5rem] bg-white p-4">
              <Image
                src="/assets/99.png"
                alt="Payments pricing"
                width={1095}
                height={1460}
                className="h-auto w-full rounded-[1rem]"
              />
            </div>
          </article>

          <article className="pb-8 xl:pl-8">
            <div className="rounded-[1.5rem] bg-[#faf7f4] p-4">
              <Image
                src="/assets/3.jpg"
                alt="Integrations"
                width={1095}
                height={1460}
                className="h-auto w-full rounded-[1rem]"
              />
            </div>
            <h2 className="mt-6 text-4xl font-bold">Integrations</h2>
            <p className="mt-2 text-2xl">Connects and Simplifies</p>
            <p className="mt-7 text-3xl text-black/60 line-through">$69/month</p>
            <p className="mt-2 text-5xl font-bold text-[var(--sd-orange)]">
              FREE <span className="text-[var(--sd-navy)]">($0/month)</span>
            </p>
            <p className="mt-4 text-xl">Connect at no cost</p>
          </article>
        </div>

        <div className="mt-12 grid gap-10 xl:grid-cols-3">
          <article className="border-b border-black/10 pb-8 xl:border-r xl:border-b-0 xl:pr-8">
            <Image
              src="/assets/payments-1.png"
              alt="Smart terminal"
              width={1095}
              height={1460}
              className="h-auto w-full rounded-[1.25rem]"
            />
          </article>

          <article className="border-b border-black/10 pb-8 xl:border-r xl:border-b-0 xl:px-8">
            <Image
              src="/assets/Payments-c83c7f5.png"
              alt="No hidden fees"
              width={1095}
              height={1460}
              className="h-auto w-full rounded-[1.25rem]"
            />
          </article>

          <article className="xl:pl-8">
            <Image
              src="/assets/dgrf.jpg"
              alt="Integrations logos"
              width={1095}
              height={1095}
              className="h-auto w-full rounded-[1.25rem]"
            />
          </article>
        </div>

        <p className="mt-8 text-center text-xl sd-muted">
          *1 terminal per location included at no cost. Equipment is provided
          as part of the service and remains the property of the provider; it
          must be returned upon account cancellation.
        </p>
      </section>

      <section className="sd-container py-10">
        <div className="sd-card overflow-hidden p-4 md:p-8">
          <Image
            src="/assets/rth.png"
            alt="Patient financing"
            width={2000}
            height={1600}
            className="h-auto w-full rounded-[2rem]"
          />
        </div>
      </section>

      <section className="py-12 text-center">
        <Link href="/contact-us" className="sd-button px-12 text-sm">
          Apply Now
        </Link>
      </section>
    </div>
  );
}
