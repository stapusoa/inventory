import { defineConfig, presetUno } from 'unocss';
import { unoTheme } from './src/theme';
import { unoShortcuts } from './src/theme/unoShortcuts';

export default defineConfig({
  presets: [presetUno()],
  theme: unoTheme,  // Directly apply your custom theme
  rules: [
    ['object-top-right', { 'object-position': 'right top' }],
    ['object-center-right', { 'object-position': 'right center' }]
  ],
  shortcuts: unoShortcuts,  // Apply your shortcuts
  content: {
    pipeline: {
      include: ['./src/**/*.{js,jsx,ts,tsx}'],  // Ensure all source files are scanned
    },
  },
});
