import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const bannerBg = {
  background: `url(${bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundColor: "rgba(45, 58, 74, 0.1)",
  backgroundBlendMode: "darken, luminosity",
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: "100vh",
};

const Banner = () => {
  return (
    <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box style={{ marginLeft: "25%" }}>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 4, fontSize: 13, color: "gray", fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              nostrum, quidem cumque quam officia ut quisquam ipsa rerum omnis
              optio?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "500px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
