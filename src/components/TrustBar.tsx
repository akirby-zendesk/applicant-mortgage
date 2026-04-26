export function TrustBar() {
  return (
    <div className="bg-white border-b border-light-grey px-6 lg:px-12 py-5">
      <div className="flex flex-wrap justify-center gap-6 lg:gap-12 items-center max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2.5 text-sm font-medium text-slate">
          <span className="text-[#FBBF24] text-base tracking-widest">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span>
            <strong className="text-navy">5.0</strong> on Google Reviews
          </span>
        </div>

        <div className="flex items-center gap-2.5 text-sm font-medium text-slate">
          <svg className="w-5 h-5 fill-success" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
          <span>
            <strong className="text-navy">Whole of Market</strong> Access
          </span>
        </div>

        <div className="flex items-center gap-2.5 text-sm font-medium text-slate">
          <svg className="w-5 h-5 fill-navy" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
          <span>
            <strong className="text-navy">FCA</strong> Authorised
          </span>
        </div>

        <div className="flex items-center gap-2.5 text-sm font-medium text-slate">
          <svg className="w-5 h-5 fill-gold" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <span>
            <strong className="text-navy">No Fees</strong> for Mortgage Advice
          </span>
        </div>
      </div>
    </div>
  );
}
