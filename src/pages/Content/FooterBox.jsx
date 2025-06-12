import { Box, Grid, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { motion } from "motion/react";

export default function FooterBox() {
  return (
    <Grid sx={{ my: 4 }} size={12}>
      <Paper
        sx={{
          background: "linear-gradient(to right, #db2777, #e11d48, #7e22ce)",
          py: 4,
          px: 3,
        }}
      >
        <Typography variant="h4" textAlign='center' fontWeight={800}>
          ¡Feliz Aniversario!
        </Typography>
        <Typography fontWeight={600} textAlign='center' color='textSecondary' sx={{mt: 2}}>
          Que este amor siga creciendo y llenando sus vidas de alegría, complicidad y momentos inolvidables.
        </Typography>
        <Box textAlign='center' sx={{ mt: 2 }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <FavoriteIcon sx={{ fontSize: 40 }} />
        </motion.div>
        </Box>
      </Paper>
    </Grid>
  );
}
