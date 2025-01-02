import React from 'react';
import {
  RenderResult,
  render as testingLibraryRender,
} from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../src/theme';

export const render = (ui: React.ReactNode): RenderResult => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
};
