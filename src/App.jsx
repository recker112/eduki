import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import useThemeConfig from "./hooks/useThemeConfig"
import Transition from "./pages/Transition";

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
        <Transition />
      </Box>
    </ThemeProvider>
  )
}

export default App
