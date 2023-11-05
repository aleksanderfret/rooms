export interface Round {
  a: number;
}

export const round = (number: number, precision = 1): number => {
  const scale = Math.pow(10, precision);

  return Math.round((number + Number.EPSILON) * scale) / scale;
};
