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
  { href: "https://www.facebook.com/", label: "Facebook", icon: "facebook", bg: "#2f7df6" },
  { href: "https://www.instagram.com/", label: "Instagram", icon: "instagram", bg: "#e63872" },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: "linkedin", bg: "#2e73b8" },
  { href: "https://x.com/", label: "X", icon: "x", bg: "#111111" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" fill="currentColor">
        <path d="M14 8.2h2V5h-2.4C10.9 5 9.5 6.6 9.5 9v1.8H7v3.3h2.5V21h3.4v-6.9h2.7l.4-3.3h-3.1V9.3c0-.8.3-1.1 1.1-1.1Z" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-[1.06rem] w-[1.06rem]" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.5 7.6h.01" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-[1.02rem] w-[1.02rem]" fill="currentColor">
        <path d="M6.8 8.9H3.9V20h2.9V8.9ZM5.3 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM20.1 13.6c0-3-1.6-4.9-4.1-4.9-1.4 0-2.4.7-2.9 1.5V8.9h-2.8V20h2.9v-5.8c0-1.5.8-2.6 2.1-2.6 1.2 0 1.9.9 1.9 2.5V20h2.9v-6.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[0.94rem] w-[0.94rem]" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--sd-border)] bg-white py-14">
      <div className="sd-container flex flex-col items-center gap-7 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[1.32rem] font-normal text-[var(--sd-navy)]">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3.5 pt-1">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex h-[1.95rem] w-[1.95rem] items-center justify-center rounded-full text-white"
              style={{ backgroundColor: link.bg }}
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>

        <div className="space-y-5 text-[1.23rem] leading-none text-[#222222]">
          <p className="text-[1.53rem] font-bold text-black">
            Strictly Dental
          </p>
          <p>6355 NW 36th St, #408, Miami, FL 33166</p>
          <p>(800) 800-8240</p>
          <p className="pt-5 text-[1.15rem] text-[#8a8a8a]">
            Copyright © 2026 StrictlyDental - All Rights Reserved.
          </p>
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
    <div className="fixed right-4 bottom-4 z-50 w-[min(21.6rem,calc(100vw-2rem))] rounded-xl bg-[var(--sd-navy)] p-[1.35rem] text-white shadow-2xl">
      <h4 className="mb-3 text-[1.35rem] font-medium">This website uses cookies.</h4>
      <p className="mb-5 text-[1rem]/[1.75] text-white/80">
        We use cookies to analyze website traffic and optimize your website
        experience. By accepting our use of cookies, your data will be
        aggregated with all other user data.
      </p>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="flex h-[2.7rem] w-full items-center justify-center rounded-full bg-white text-[0.82rem] font-bold tracking-[0.18em] text-[var(--sd-navy)] uppercase"
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
          className={`flex items-center justify-between gap-6 ${
            isHome
              ? "w-full px-5 sm:px-8 lg:grid lg:min-h-[108px] lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-12 lg:py-4 xl:px-16 2xl:px-20"
              : "sd-container min-h-[96px] py-4"
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

          <nav
            className={`hidden items-center lg:flex ${
              isHome ? "justify-self-center gap-10" : "gap-8"
            }`}
          >
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

          <div className={`flex items-center gap-3 ${isHome ? "justify-self-end" : ""}`}>
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
