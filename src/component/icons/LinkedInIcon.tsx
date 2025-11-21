'use client';

type Props = {
  size?: number | string;
  className?: string;
  title?: string;
};

export default function LinkedInIcon({ size = 40, className, title = 'LinkedIn' }: Props) {
  const dimension = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <path
        d="M4.80753 9.63134C7.46266 9.63134 9.61506 7.47529 9.61506 4.81567C9.61506 2.15605 7.46266 0 4.80753 0C2.1524 0 0 2.15605 0 4.81567C0 7.47529 2.1524 9.63134 4.80753 9.63134Z"
        fill="currentColor"
      />
      <path
        d="M14.1541 13.2804V39.9977H22.4354V26.7854C22.4354 23.2991 23.0902 19.9229 27.4055 19.9229C31.6615 19.9229 31.7143 23.9088 31.7143 27.0055V39.9999H40V25.3482C40 18.1511 38.4532 12.6201 30.0554 12.6201C26.0235 12.6201 23.3209 14.8365 22.2157 16.934H22.1036V13.2804H14.1541ZM0.658691 13.2804H8.95322V39.9977H0.658691V13.2804Z"
        fill="currentColor"
      />
      <title>{title}</title>
    </svg>
  );
}
