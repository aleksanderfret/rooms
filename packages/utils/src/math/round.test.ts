import { round } from './round';

describe('round util', () => {
  it('should round to integer', () => {
    expect(round(1.2345, 0)).toBe(1);
  });

  it('should round to 1 decimal', () => {
    expect(round(1.2345)).toBe(1);
  });

  it('should round to 2 decimals', () => {
    expect(round(1.2345, 2)).toBe(1.23);
  });

  it('should round to 3 decimals', () => {
    expect(round(1.2345, 3)).toBe(1.235);
  });

  it('should round to 4 decimals', () => {
    expect(round(1.23456, 4)).toBe(1.2346);
  });

  it('should round correctly when string is passed', () => {
    expect(round('1.2345', 3)).toBe(1.235);
  });

  it('should throw error when precision is not an integer', () => {
    expect(() => round(1.2345, 1.5)).toThrow('Precision must be an integer');
  });

  it('should throw error when precision is less than 0', () => {
    expect(() => round(1.2345, -1)).toThrow('Precision must be greater than 0');
  });
});
