export default function ContactUsPage() {
  return (
    <div className="sd-container py-16 pb-24">
      <h1 className="sd-page-title mb-14">Contact Us</h1>

      <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr]">
        <section>
          <h2 className="mb-6 text-5xl font-medium">Drop us a line!</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="h-16 w-full bg-[var(--sd-light)] px-5 text-lg outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="h-16 w-full bg-[var(--sd-light)] px-5 text-lg outline-none"
            />
            <textarea
              placeholder="Message"
              className="min-h-[172px] w-full resize-y bg-[var(--sd-light)] px-5 py-4 text-lg outline-none"
            />
            <button type="button" className="sd-button w-full text-sm">
              Send
            </button>
          </form>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-7 sd-muted">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-5xl font-medium">Better yet, see us in person!</h2>
          <p className="text-xl leading-10 sd-muted">
            We love our dental customers, so feel free to visit during normal
            business hours to learn more about our dentist payment processing
            solutions that help save on credit card fees.
          </p>
          <div className="space-y-5">
            <p className="text-4xl leading-tight">
              6355 NW 36th St #408, Miami, FL 33166
            </p>
            <div className="space-y-3 text-2xl text-black/60">
              <p>
                <span className="font-bold text-black">Mon</span> 09:30 am –
                05:30 pm
              </p>
              <p>Tue&nbsp;&nbsp; 09:30 am – 05:30 pm</p>
              <p>Wed 09:30 am – 05:30 pm</p>
              <p>Thu&nbsp; 09:30 am – 05:30 pm</p>
              <p>Fri&nbsp;&nbsp;&nbsp; 09:30 am – 05:30 pm</p>
              <p>Sat&nbsp;&nbsp; 09:30 am – 05:30 pm</p>
              <p>Sun 09:30 am – 05:30 pm</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
