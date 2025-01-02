import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^@test-utils$': '<rootDir>/test-utils',
  },
  testEnvironment: 'jest-environment-jsdom',
};

export default config;
