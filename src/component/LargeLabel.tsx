'use client';

interface ILargeLabelProps {
  label: string;
  subLabel: string;
  color?: string;
}

const LargeLabel = ({ label, subLabel, color }: ILargeLabelProps) => {
  return (
    <div className="relative w-full flex items-center justify-center -mt-14">
      <p className="text-[#F7F8FB] font-bold text-[200px]" style={{ color: color }}>
        {label}
      </p>
      <p className="absolute top-1/2 font-iranYekan font-black text-[#4D5E80] text-3xl">
        {subLabel}
      </p>
    </div>
  );
};

export default LargeLabel;
