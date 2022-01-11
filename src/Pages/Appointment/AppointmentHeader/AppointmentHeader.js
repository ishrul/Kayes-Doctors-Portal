import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Calender from "../../Shared/Calender/Calender";
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
  height: "80vh",
};

const AppointmentHeader = ({ date, setDate }) => {
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
            <Calender date={date} setDate={setDate}></Calender>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "500px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentHeader;
