import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Booking from "../Booking/Booking";

const AvailableAppointment = ({ date }) => {
  const bookings = [
    {
      id: 1,
      name: "Teeth Orthodonics",
      time: "08.00 AM - 09.00 AM",
      price: 20,
      space: 10,
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
      time: "09.00 AM - 10.00 AM",
      price: 15,
      space: 8,
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: "10.00 AM - 11.00 AM",
      price: 17,
      space: 9,
    },
    {
      id: 4,
      name: "Cavity Protection",
      time: "11.00 AM - 12.00 PM",
      price: 19,
      space: 5,
    },
    {
      id: 5,
      name: "Pediatric Dental",
      time: "06.00 PM - 07.00 PM",
      price: 25,
      space: 10,
    },
    {
      id: 6,
      name: "Oral Surgery",
      time: "07.00 PM - 08.00 PM",
      price: 35,
      space: 10,
    },
  ];
  return (
    <Container>
      <Typography
        sx={{ color: "info.main", fontWeight: 800, fontSize: "5vh", my: 5 }}
      >
        Available Appointment on {`${date.toDateString()}`}{" "}
      </Typography>

      <Grid container spacing={3}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
