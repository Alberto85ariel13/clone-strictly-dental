"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type NavLink = {
  href?: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
};

const navLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  { href: "/payments", label: "PAYMENTS" },
  { href: "/pricing", label: "PRICING" },
  { href: "/pms-integrations", label: "PMS INTEGRATIONS" },
  {
    label: "MORE",
    children: [
      { href: "/contact-us", label: "CONTACT US" },
      { href: "/compliance", label: "COMPLIANCE" },
    ],
  },
];

const footerLinks = [
  { href: "#", label: "Private Policy" },
  { href: "#", label: "E-Sign" },
  { href: "#", label: "Español" },
  { href: "#", label: "Blog" },
];

const socialLinks = [
  { href: "https://www.facebook.com/", label: "f", bg: "#1877F2" },
  { href: "https://www.instagram.com/", label: "ig", bg: "#E1306C" },
  { href: "https://www.linkedin.com/", label: "in", bg: "#2867B2" },
  { href: "https://x.com/", label: "x", bg: "#18181B" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

function Footer() {
  return (
    <footer className="border-t border-[var(--sd-border)] bg-white py-14">
      <div className="sd-container flex flex-col items-center gap-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[15px] text-[var(--sd-navy)]">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold uppercase text-white"
              style={{ backgroundColor: link.bg }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="space-y-3 text-[15px]">
          <p className="text-3xl font-display font-normal tracking-tight text-[var(--sd-navy)]">
            Strictly Dental
          </p>
          <p>6355 NW 36th St, #408, Miami, FL 33166</p>
          <p>(800) 800-8240</p>
          <p className="sd-muted">Copyright © 2026 StrictlyDental - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 w-[min(24rem,calc(100vw-2rem))] rounded-xl bg-[var(--sd-navy)] p-6 text-white shadow-2xl">
      <h4 className="mb-3 text-2xl font-medium">This website uses cookies.</h4>
      <p className="mb-6 text-lg/8 text-white/80">
        We use cookies to analyze website traffic and optimize your website
        experience. By accepting our use of cookies, your data will be
        aggregated with all other user data.
      </p>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-bold tracking-[0.18em] text-[var(--sd-navy)] uppercase"
      >
        Accept
      </button>
    </div>
  );
}

function ChatBubble() {
  return (
    <button
      type="button"
      aria-label="Open chat"
      className="fixed right-4 bottom-[22rem] z-40 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--sd-navy)] text-white shadow-lg md:bottom-28"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H8l-5 3 1.8-5.1A8.5 8.5 0 1 1 21 11.5Z" />
      </svg>
    </button>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  const expandedLinks = useMemo(
    () =>
      navLinks.flatMap((item) =>
        item.children
          ? item.children.map((child) => ({ ...child, parent: item.label }))
          : item.href
            ? [{ href: item.href, label: item.label, parent: item.label }]
            : [],
      ),
    [],
  );

  return (
    <>
      {!isHome && (
        <div className="bg-[var(--sd-navy)] py-2 text-center text-sm tracking-[0.03em] text-white">
          <Link href="#" className="hover:opacity-80">
            Ahora disponible en Español 🇪🇸
          </Link>
        </div>
      )}

      <header
        className={`sticky top-0 z-30 bg-white/95 backdrop-blur ${
          isHome ? "" : "border-b border-[var(--sd-border)]"
        }`}
      >
        <div
          className={`sd-container flex items-center justify-between gap-6 ${
            isHome ? "min-h-[86px] py-3 lg:min-h-[108px] lg:py-4" : "min-h-[96px] py-4"
          }`}
        >
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/sdf.png"
              alt="Strictly Dental"
              width={283}
              height={113}
              className={`h-auto ${
                isHome ? "w-[156px] sm:w-[176px] lg:w-[212px]" : "w-[180px] md:w-[210px]"
              }`}
              priority
            />
          </Link>

          <nav className={`hidden items-center lg:flex ${isHome ? "gap-10" : "gap-8"}`}>
            {navLinks.map((item) => {
              const active = item.children
                ? item.children.some((child) => isActivePath(pathname, child.href))
                : item.href
                  ? isActivePath(pathname, item.href)
                  : false;

              if (item.children) {
                return (
                  <div key={item.label} className="group relative">
                    <button
                      type="button"
                      className={`flex items-center gap-2 border-b-2 pb-1 text-[15px] tracking-[0.03em] ${
                        active
                          ? "border-[var(--sd-navy)] font-bold text-[var(--sd-navy)]"
                          : "border-transparent hover:text-[var(--sd-navy)]"
                      }`}
                    >
                      {item.label}
                      <span className="text-xs">⌄</span>
                    </button>
                    <div className="invisible absolute top-full right-0 mt-4 min-w-[220px] rounded-2xl border border-[var(--sd-border)] bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                            isActivePath(pathname, child.href)
                              ? "bg-[var(--sd-lavender)] text-[var(--sd-navy)]"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`border-b-2 pb-1 text-[15px] tracking-[0.03em] ${
                    active
                      ? "border-[var(--sd-navy)] font-bold text-[var(--sd-navy)]"
                      : "border-transparent hover:text-[var(--sd-navy)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact-us" className="sd-button hidden px-8 text-sm lg:inline-flex">
              Apply Now
            </Link>
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--sd-border)] lg:hidden"
            >
              <span className="text-2xl leading-none">{mobileOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-[var(--sd-border)] bg-white lg:hidden">
            <div className="sd-container py-4">
              <div className="flex flex-col gap-2">
                {expandedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.03em] ${
                      isActivePath(pathname, link.href)
                        ? "bg-[var(--sd-lavender)] text-[var(--sd-navy)]"
                        : "bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="sd-button mt-2 text-sm"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>
      <Footer />
      <ChatBubble />
      <CookieBanner />
    </>
  );
}
