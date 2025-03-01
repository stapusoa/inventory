
import { Theme } from '@unocss/preset-mini';
import { colors as themeColors } from './colors'

const colors = { ...themeColors }

export const unoTheme: Theme = {
  colors,
  container: {
    center: true,
    padding: "2rem",
  },
  boxShadow: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 3px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  lineHeight: {
    cozy: '1.08',
    tighter: '1.15',
  },
  letterSpacing: {
    'ultra-wide': '.12em',
    'mega-wide': '.335em',
  },
  fontFamily: {
    sfpro: '"SF Pro", sans-serif', // Provide the font family as a string, not an array
    area: '"Area Normal", sans-serif',  // Same for other fonts
  },
}
