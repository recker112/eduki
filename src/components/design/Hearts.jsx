import { motion } from "motion/react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Hearts() {
  return (
    <>
      <motion.div
        style={{
          position: "absolute", // Agrega posición absoluta
          top: "10%",
          left: "15%",
        }}
        animate={{
          scale: [1, 1.4], // Achica, crece y desaparece
          opacity: [1, 0], // Mantiene opacidad y luego desaparece
        }}
        transition={{
          duration: 1.1, // Duración de la animación
          repeat: Infinity, // Suavizado en bucle
          repeatDelay: 1, // Espera 1s antes de repetir
        }}
      >
        <FavoriteIcon sx={{ color: "#c084fcb0" }} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute", // Agrega posición absoluta
          top: "40%",
          left: "10%",
        }}
        animate={{
          scale: [1, 1.4], // Achica, crece y desaparece
          opacity: [1, 0], // Mantiene opacidad y luego desaparece
        }}
        transition={{
          duration: 1, // Duración de la animación
          repeat: Infinity, // Suavizado en bucle
          repeatDelay: 0.5, // Espera 1s antes de repetir
        }}
      >
        <FavoriteIcon sx={{ color: "#c084fcb0" }} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute", // Agrega posición absoluta
          top: "60%",
          left: "20%",
        }}
        animate={{
          scale: [1, 1.4], // Achica, crece y desaparece
          opacity: [1, 0], // Mantiene opacidad y luego desaparece
        }}
        transition={{
          duration: 1.3, // Duración de la animación
          repeat: Infinity, // Suavizado en bucle
          repeatDelay: 0.3, // Espera 1s antes de repetir
        }}
      >
        <FavoriteIcon sx={{ color: "#f472b6b0" }} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute", // Agrega posición absoluta
          top: "10%",
          left: "90%",
        }}
        animate={{
          scale: [1, 1.4], // Achica, crece y desaparece
          opacity: [1, 0], // Mantiene opacidad y luego desaparece
        }}
        transition={{
          duration: 0.5, // Duración de la animación
          repeat: Infinity, // Suavizado en bucle
          repeatDelay: 0.6, // Espera 1s antes de repetir
        }}
      >
        <FavoriteIcon sx={{ color: "#f472b6b0" }} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute", // Agrega posición absoluta
          top: "80%",
          left: "80%",
        }}
        animate={{
          scale: [1, 1.4], // Achica, crece y desaparece
          opacity: [1, 0], // Mantiene opacidad y luego desaparece
        }}
        transition={{
          duration: 0.7, // Duración de la animación
          repeat: Infinity, // Suavizado en bucle
          repeatDelay: 1, // Espera 1s antes de repetir
        }}
      >
        <FavoriteIcon sx={{ color: "#c084fcb0" }} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute", // Agrega posición absoluta
          top: "50%",
          left: "83%",
        }}
        animate={{
          scale: [1, 1.4], // Achica, crece y desaparece
          opacity: [1, 0], // Mantiene opacidad y luego desaparece
        }}
        transition={{
          duration: 1.1, // Duración de la animación
          repeat: Infinity, // Suavizado en bucle
          repeatDelay: 0.2, // Espera 1s antes de repetir
        }}
      >
        <FavoriteIcon sx={{ color: "#c084fcb0" }} />
      </motion.div>
    </>
  );
}
