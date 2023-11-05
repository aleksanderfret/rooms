 
/* eslint-disable @typescript-eslint/no-empty-function -- required for jest */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  -- required for jest */
import '@testing-library/jest-dom';

const { getComputedStyle } = window;
window.getComputedStyle = elt => getComputedStyle(elt);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
