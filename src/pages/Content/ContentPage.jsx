import { Container, Grid } from "@mui/material";
import ContainerEduki from "../../components/design/ContainerEduki";
import HeaderContent from "./HeaderContent";
import TiempoDeNovios from "./TiempoDeNovios";
import VideoContent from "./VideoContent";
import FooterBox from "./FooterBox";

export default function ContentPage() {
  return (
    <ContainerEduki>
      <Container sx={{ p: 2 }}>
        <Grid container spacing={1.5}>
          <HeaderContent />
          <TiempoDeNovios />
          <VideoContent />
          <FooterBox />
        </Grid>
      </Container>
    </ContainerEduki>
  );
}
