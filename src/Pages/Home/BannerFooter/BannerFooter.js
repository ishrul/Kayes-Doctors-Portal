import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const BannerFooterDiv = {
  marginTop: "-70px",
  //   marginLeft: "50px",
  display: "flex",
  justifyContent: "center",
};

const BannerFooterItems = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  padding: "25px 20px",
  margin: "0px 5px",
  borderRadius: "5px",
  textAlign: "left",
};

const BannerFooter = () => {
  return (
    <Box>
      <Grid container style={BannerFooterDiv}>
        <Grid
          item
          xs={12}
          md={3.5}
          style={{ ...BannerFooterItems, backgroundColor: "#5CE7ED" }}
        >
          <AccessTimeIcon style={{ fontSize: "50px", marginRight: "10px" }} />
          <Box>
            <Typography variant="h6">Opening Hours</Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, molestias.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3.5}
          style={{
            ...BannerFooterItems,
            backgroundColor: "rgba(45, 58, 74, 0.9)",
          }}
        >
          <LocationOnIcon style={{ fontSize: "50px", marginRight: "10px" }} />
          <Box>
            <Typography variant="h6">Visit Our Location</Typography>
            <Typography variant="p">
              Satkania, Chittagong, Bangladesh.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3.5}
          style={{ ...BannerFooterItems, backgroundColor: "#5CE7ED" }}
        >
          <AddIcCallIcon style={{ fontSize: "50px", marginRight: "10px" }} />
          <Box>
            <Typography variant="h6">Contact us now</Typography>
            <Typography variant="p">+8801608804831</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerFooter;
