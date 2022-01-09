import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{
            fontWeight: 600,
            color: "text.secondary",
            m: 5,
            color: "#5CE7ED",
          }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography
          sx={{ fontWeight: 600, my: 5 }}
          variant="h4"
          component="div"
        >
          SERVICES WE PROVIDE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
