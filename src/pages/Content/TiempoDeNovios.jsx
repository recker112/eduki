import { useState, useEffect } from "react";

import { Grid, Paper, Typography } from "@mui/material";

export default function TiempoDeNovios() {
  function calculateTimeDifference(startDate) {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return { years, months, days, hours, minutes, seconds };
  }

  const startDate = new Date("2024-06-15");

  const [timeDifference, setTimeDifference] = useState(
    calculateTimeDifference(startDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDifference(calculateTimeDifference(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Grid size={12}>
      <Paper sx={{ py: 4, px: 3, borderRadius: 5 }} variant="outlined">
        <Grid container spacing={4}>
          <Grid size={12}>
            <Typography fontWeight={700} variant="h5" textAlign="center">
              Tiempo Juntos
            </Typography>
          </Grid>
          <Grid container size={12} spacing={1.5}>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(to bottom right, #ec4899, #f43f5e)",
                  py: 2,
                  borderRadius: 5,
                }}
              >
                <Grid container flexDirection="column">
                  <Typography variant="h4" fontWeight={800} textAlign="center">
                    {timeDifference.years}
                  </Typography>
                  <Typography textAlign="center">Años</Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(to bottom right, #ec4899, #f43f5e)",
                  py: 2,
                  borderRadius: 5,
                }}
              >
                <Grid container flexDirection="column">
                  <Typography variant="h4" fontWeight={800} textAlign="center">
                    {timeDifference.months}
                  </Typography>
                  <Typography textAlign="center">Meses</Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(to bottom right, #ec4899, #f43f5e)",
                  py: 2,
                  borderRadius: 5,
                }}
              >
                <Grid container flexDirection="column">
                  <Typography variant="h4" fontWeight={800} textAlign="center">
                    {timeDifference.days}
                  </Typography>
                  <Typography textAlign="center">Días</Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(to bottom right, #ec4899, #f43f5e)",
                  py: 2,
                  borderRadius: 5,
                }}
              >
                <Grid container flexDirection="column">
                  <Typography variant="h4" fontWeight={800} textAlign="center">
                    {timeDifference.hours}
                  </Typography>
                  <Typography textAlign="center">Horas</Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(to bottom right, #ec4899, #f43f5e)",
                  py: 2,
                  borderRadius: 5,
                }}
              >
                <Grid container flexDirection="column">
                  <Typography variant="h4" fontWeight={800} textAlign="center">
                    {timeDifference.minutes}
                  </Typography>
                  <Typography textAlign="center">Minutos</Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 2 }}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(to bottom right, #ec4899, #f43f5e)",
                  py: 2,
                  borderRadius: 5,
                }}
              >
                <Grid container flexDirection="column">
                  <Typography variant="h4" fontWeight={800} textAlign="center">
                    {timeDifference.seconds}
                  </Typography>
                  <Typography textAlign="center">Segundos</Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
