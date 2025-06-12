import { Grid, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { motion } from "motion/react";

const colors = ["#f472b6", "#fb7185", "#c084fc", "#ec4899", "#f43f5e"];

export default function HeaderContent() {
  return (
    <>
      <Grid size={12}>
        <Typography
          sx={{
            background: "linear-gradient(to right, #f472b6, #fb7185, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variant="h2"
          fontWeight={800}
          textAlign="center"
        >
          Nuestro Amor
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant="h5" textAlign="center" color="textSecondary">
          Una historia que sigue escribiéndose cada día
        </Typography>
      </Grid>
      <Grid container spacing={1.5} sx={{mt: 2}} justifyContent='center' size={12}>
        {[...Array(4)].map((_, index) => (
          <Grid key={index}>
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2, // Creates the wave effect
              }}
            >
              <FavoriteIcon style={{ color: colors[index] }} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
