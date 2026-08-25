interface ILargeLabelProps {
  label: string;
  subLabel: string;
  color?: string;
}

/**
 * Section header: an oversized decorative English word with the real Persian
 * heading laid over it.
 *
 * The English `label` is purely decorative (`aria-hidden`) — the Persian
 * `subLabel` is the actual `<h2>`, so screen readers and search engines get the
 * meaningful text instead of e.g. "SERVICES".
 */
const LargeLabel = ({ label, subLabel, color }: ILargeLabelProps) => {
  return (
    <>
      {/* Desktop */}
      <div className="relative w-full xl:flex items-center justify-center -mt-14 hidden">
        <span
          aria-hidden="true"
          className="text-[#F7F8FB] font-bold text-[200px]"
          style={{ color }}
        >
          {label}
        </span>
        <h2 className="absolute top-1/2 font-iranYekan font-black text-[#4D5E80] text-3xl">
          {subLabel}
        </h2>
      </div>

      {/* Mobile/Tablet */}
      <div className="xl:hidden mt-3 mb-1 lg:mb-12">
        <div
          className="text-[#F7F8FB] font-bold text-5xl sm:text-7xl md:text-8xl text-center relative"
          style={{ color }}
        >
          <span aria-hidden="true">{label}</span>
          <h2 className="absolute inset-0 flex items-center justify-center font-iranYekan font-black text-[#4D5E80] text-sm sm:text-xl md:text-2xl">
            {subLabel}
          </h2>
        </div>
      </div>
    </>
  );
};

export default LargeLabel;
