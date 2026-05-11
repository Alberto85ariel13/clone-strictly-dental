import Image from "next/image";

export default function PmsIntegrationsPage() {
  return (
    <div className="pb-20">
      <section className="sd-container py-16">
        <h1 className="sd-page-title mb-14">PMS Integrations</h1>
        <div className="rounded-[2rem] bg-white p-4 md:p-8">
          <Image
            src="/assets/opdend.jpg"
            alt="PMS integrations logos"
            width={1095}
            height={1095}
            className="mx-auto h-auto w-full max-w-[980px]"
          />
        </div>
      </section>

      <section className="bg-[var(--sd-navy)] py-24 text-white">
        <div className="sd-container text-center">
          <h2 className="mb-10 text-[clamp(2.8rem,5vw,4.6rem)] font-medium">
            How it Works
          </h2>
          <p className="mx-auto max-w-5xl text-2xl leading-10 text-white/80">
            At StrictlyDental, our Practice Management System (PMS) simplifies
            daily dental office operations by managing front-desk tasks such as
            patient check-ins, scheduling, and payment processing.
          </p>
          <p className="mx-auto mt-8 max-w-5xl text-2xl leading-10 text-white/80">
            It securely handles payments, insurance claims, billing, and
            invoicing, integrating payment processing with patient records.
            This streamlines financial transactions, reduces administrative
            work, ensures accurate payments, and enhances the patient
            experience.
          </p>
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-white p-4 md:p-8">
            <Image
              src="/assets/juj.png"
              alt="How PMS integrations work"
              width={2560}
              height={1280}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
