export function round(number: string | number, precision = 0): number {
  if (!Number.isInteger(precision)) {
    throw new Error('Precision must be an integer');
  }

  if (precision < 0) {
    throw new Error('Precision must be greater than 0');
  }

  const scale = Math.pow(10, Number(precision));

  return Math.round((Number(number) + Number.EPSILON) * scale) / scale;
}
