'use client';

interface ISmallLabelProps {
  title: string;
  color: string;
  bgColor: string;
}

const SmallLabel = ({ title, color, bgColor }: ISmallLabelProps) => {
  return (
    <div className={`bg-[${bgColor}] px-4 py-2 flex items-center justify-center rounded-full`}>
      <p className={`text-[${color}] font-bold text-sm`}>{title}</p>
    </div>
  );
};

export default SmallLabel;
