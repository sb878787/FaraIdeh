'use client';

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
};

export default function TelegramIcon({
  width = 40,
  height = 34,
  className,
  title = 'Telegram',
}: Props) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <path
        d="M39.886 3.09526L33.8498 31.9476C33.3944 33.9839 32.2068 34.4907 30.5191 33.5314L21.3219 26.6622L16.884 30.9883C16.3929 31.486 15.9821 31.9024 15.0356 31.9024L15.6964 22.4086L32.7425 6.79683C33.4837 6.12711 32.5818 5.75604 31.5906 6.42577L10.5173 19.8745L1.4451 16.9965C-0.528291 16.372 -0.564009 14.9964 1.85585 14.0371L37.3412 0.18106C38.9842 -0.443411 40.4218 0.552122 39.886 3.09526Z"
        fill="currentColor"
      />
      <title>{title}</title>
    </svg>
  );
}
