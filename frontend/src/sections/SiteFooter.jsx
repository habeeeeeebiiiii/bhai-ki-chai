export default function SiteFooter() {
  return (
    <footer
      data-testid="site-footer"
      className="relative w-full bg-[#0A0A0A] text-white py-16 md:py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/GvzRF0fC/Gff-2-6.png"
            alt="Grand Food Fest"
            className="h-16 md:h-20 object-contain bg-white/5 p-2 rounded-sm"
          />
        </div>

        <div className="text-center">
          <p className="font-display text-2xl md:text-3xl text-[#FF6B00] leading-[0.95]">
            Grand Food and Entertainment Festival
          </p>
          <p className="mt-2 text-sm md:text-base text-white/80 font-semibold">
            Hyderabad · October 9 · 10 · 11 · 2026
          </p>
          <p className="mt-1 text-sm text-white/60">Gachibowli Stadium</p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">
            Official Venue Partner — Sports Authority of Telangana
          </p>
        </div>

        <div className="flex items-center md:justify-end">
          <img
            src="https://i.ibb.co/Z1tZ2tMt/bhai-ki-chai-header-logo-png.webp"
            alt="Bhai Ki Chai"
            className="h-16 md:h-20 object-contain bg-white/5 p-2 rounded-sm"
          />
        </div>
      </div>

      <div className="my-12 h-[1px] bg-white/15" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">Contact</p>
          <p className="font-display text-2xl md:text-3xl text-white leading-tight">
            Habeeb Ali
          </p>
          <p className="text-sm text-white/70 mt-1">Founder & CEO · Hanfim Foods LLP</p>
          <p className="text-sm text-white/90 mt-3">+91 93539 94283</p>
          <p className="text-sm text-white/90">habeeb@grandfoodfest.com</p>
          <p className="text-sm text-white/70">grandfoodfest.com</p>
        </div>

        <div className="md:text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">A note</p>
          <p className="font-serif-italic text-[#B8960A] text-lg md:text-2xl leading-snug">
            Born in Hyderabad. Built for India.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/40">
        <span>© 2026 Hanfim Foods LLP · Grand Food Fest</span>
        <span>This is a sponsorship & franchise partnership proposal.</span>
      </div>
    </footer>
  );
}
