import { Grid, LinearProgress, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { motion } from "motion/react";

import ContainerEduki from "../../components/design/ContainerEduki";

const colors = ["#f472b6", "#fb7185", "#c084fc", "#ec4899", "#f43f5e"];

export default function LoadingPage() {
  return (
    <ContainerEduki fullScreen>
      <Grid
        container
        spacing={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        component="main"
      >
        <Grid sx={{ position: "relative" }}>
          <FavoriteIcon sx={{ fontSize: 120, color: '#f472b6' }} />
          <motion.div
            animate={{ scale: [1, 2], opacity: [0.4, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <FavoriteIcon style={{ color: "#c084fc", fontSize: 120 }} />
          </motion.div>
        </Grid>
        <Grid>
          <motion.div
            animate={{
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                background:
                  "linear-gradient(to right, #f472b6, #fb7185, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cargando...
            </Typography>
          </motion.div>
        </Grid>
        <Grid>
          <Typography variant="h5" textAlign='center' color="textSecondary">
            Preparando sus momentos especiales
          </Typography>
        </Grid>
        <Grid size={3}>
          <LinearProgress
            color="secondary"
            sx={{ height: 12, borderRadius: 10 }}
          />
        </Grid>
        <Grid container spacing={1.5}>
          {[...Array(5)].map((_, index) => (
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
        <Grid>
          <Typography color="textDisabled">
            <motion.div
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              Los mejores momentos están por llegar...
            </motion.div>
          </Typography>
        </Grid>
      </Grid>
    </ContainerEduki>
  );
}
