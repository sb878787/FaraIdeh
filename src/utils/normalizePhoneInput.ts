export type NormalizePhoneOptions = {
  maxLength?: number;
};

const faDigits: Record<string, string> = {
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
};

const toLatin = (s: string) => s.replace(/[۰-۹]/g, (d) => faDigits[d] || d);

function isEventComposing(ev: React.FormEvent<HTMLInputElement>): boolean {
  const ne = ev.nativeEvent as unknown;
  if (ne && typeof (ne as { isComposing?: boolean }).isComposing === 'boolean') {
    return Boolean((ne as { isComposing?: boolean }).isComposing);
  }
  return false;
}

export function normalizePhoneInput(
  e: React.FormEvent<HTMLInputElement>,
  options: NormalizePhoneOptions = {},
) {
  if (isEventComposing(e)) return;

  const input = e.currentTarget; // HTMLInputElement
  const { maxLength } = options;

  const prev = input.value;
  const end = input.selectionEnd ?? prev.length;

  let next = toLatin(prev).replace(/[^0-9]/g, '');
  if (typeof maxLength === 'number' && maxLength > 0) {
    next = next.slice(0, maxLength);
  }

  if (next === prev) return;

  const delta = next.length - prev.length;
  input.value = next;

  const newPos = Math.max(0, Math.min(next.length, end + delta));
  try {
    input.setSelectionRange(newPos, newPos);
  } catch {}
}
