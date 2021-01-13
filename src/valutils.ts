export function coerceNum(val: unknown, defaultVal: number): number {
  const asNumber = Number(val);
  if (Number.isNaN(asNumber)) {
    return defaultVal;
  }
  return asNumber * 1;
}

export function coerceInt(val: unknown, defaultVal: number): number {
  if (val === '') {
    return defaultVal;
  }
  const valAsNum = (() => {
    const asNumber = Number(val);
    if (Number.isNaN(asNumber)) {
      return defaultVal;
    }
    return asNumber;
  })();
  return Number(valAsNum.toFixed(0));
}

export function coerceStr(val: unknown, defaultVal: string = ''): string {
  if (typeof val === 'string') {
    return val;
  }
  if (typeof val === 'number') {
    return String(val);
  }
  return defaultVal;
}

export function isValidNumber(val: unknown): val is number {
  return typeof val === 'number' && !Number.isNaN(val);
}
