import { defineConfig, presetUno } from 'unocss';
import { unoTheme } from './src/theme';
import { unoShortcuts } from './src/theme/unoShortcuts';

export default defineConfig({
  presets: [presetUno()],
  safelist: [
    "bg-primary", "text-primary", "border-primary",
    "bg-secondary", "text-secondary", "border-secondary",
    "bg-warning", "text-warning", "border-warning",
    "bg-error", "text-error", "border-error",
    "bg-success", "text-success", "border-success",
    "bg-info", "text-info", "border-info",
  ],
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
