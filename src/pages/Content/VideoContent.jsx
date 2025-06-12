import { Grid, Paper, Typography } from "@mui/material";

import videoEduki from "./../../assets/Eduki.mp4";

export default function VideoContent() {
  return (
    <Grid container size={12} sx={{ mt: 4 }}>
      <Grid size={12}>
        <Paper sx={{ py: 4, px: 3, borderRadius: 5 }} variant="outlined">
          <Grid container justifyContent="center" spacing={2}>
            <Grid>
              <Typography fontWeight={700} variant="h5" textAlign="center">
                Nuestros Momentos Especiales
              </Typography>
            </Grid>
            <Grid container justifyContent="center" size={12}>
              <video
                src={videoEduki}
                controls
                style={{ width: "60%" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
