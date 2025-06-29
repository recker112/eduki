/**
 * React
 */
import { useMemo, useState } from "react";

/**
 * MUI
 */
import { createTheme } from "@mui/material";

export default function useThemeConfig() {
  const [mode] = useState('dark');

  const themeConfig = useMemo(() => createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#f472b6',
      },
      secondary: {
        main: '#c084fc',
      },
      background: {
        paper: mode === 'light' ? '#fff' : '#21263ab0',
        gradient: mode === 'light' 
        ? 'linear-gradient(to bottom right, #fff1f2, #ffe4e6, #f3e8ff)' // Traducción del gradiente
        : 'linear-gradient(to bottom right, #1a1a1a, #6b21a8, #db2777)',
      },
    },
    typography: {
      fontFamily: [
        'Nunito',
        'sans-serif',
        'Noto Color Emoji'
      ].join(','),
    },
  }), [mode]);

  return themeConfig;
}
