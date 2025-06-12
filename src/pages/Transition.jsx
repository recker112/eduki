import { useState, useEffect } from "react";
import { Box, Fade, Grow } from "@mui/material";
import LoadingPage from "./Loading/LoadingPage";
import ContentPage from "./Content/ContentPage";

export default function Transition() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Grow in={true} unmountOnExit>
        <Box>
          <LoadingPage />
        </Box>
      </Grow>
    );
  }

  return (
    <Fade in={true} unmountOnExit>
      <Box>
        <ContentPage />
      </Box>
    </Fade>
  );
}
