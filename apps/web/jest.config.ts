import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/__tests__/*.*',
    '!src/__mocks__/*.*',
    '!src/__stories__/*.*',
    '!src/__snapshots__/*.*',
  ],
  coverageDirectory: 'coverage',
  displayName: 'web',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  snapshotResolver: '<rootDir>/src/utils/tests/snapshotResolver.ts',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};

module.exports = createJestConfig(customJestConfig);
