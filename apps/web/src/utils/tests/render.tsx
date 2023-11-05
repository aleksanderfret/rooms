import { MantineProvider } from '@mantine/core';
import { render as rtlRender } from '@testing-library/react';
import type { RenderOptions, RenderResult } from '@testing-library/react';
import type { ReactElement } from 'react';

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => rtlRender(<MantineProvider>{ui}</MantineProvider>, options);
