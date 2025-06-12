import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import useThemeConfig from "./hooks/useThemeConfig"

function App() {
  const themeConfig = useThemeConfig();

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Box
        sx={theme => ({
          background: theme.palette.background.gradient
        })}
        component='main'
      >
        holi
      </Box>
    </ThemeProvider>
  )
}

export default App
