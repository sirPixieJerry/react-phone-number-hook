import '@mantine/core/styles.css';

import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { theme } from '../src/theme'; // Ensure your theme is imported correctly

const channel = addons.getChannel();

type ColorSchemeWrapperPropsType = {
  children: React.ReactNode;
};

const ColorSchemeWrapper: React.FC<ColorSchemeWrapperPropsType> = ({
  children,
}) => {
  const { setColorScheme } = useMantineColorScheme();

  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
};

export const decorators = [
  (renderStory: () => React.ReactNode): React.JSX.Element => (
    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
  ),
  (renderStory: () => React.ReactNode): React.JSX.Element => (
    <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
