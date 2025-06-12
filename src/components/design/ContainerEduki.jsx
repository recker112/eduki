import { Box } from "@mui/material";
import Hearts from "./Hearts";

export default function ContainerEduki({ children, fullScreen }) {
  return (
    <Box component="main" sx={{
      display: fullScreen ? 'flex' : 'block',
      width: fullScreen ? '100dvw' : 'auto',
      height: fullScreen ? '100dvh' : 'auto',
    }}>
      <Hearts />
      {children}
    </Box>
  );
}
