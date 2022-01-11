import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import "./Booking.css";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking }) => {
  const { name, time, price, space } = booking;

  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  return (
    <>
      <Grid item xs={6} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} Space Available
          </Typography>
          <Button
            onClick={handleBookingOpen}
            className="booking-button"
            variant="contained"
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
      ></BookingModal>
    </>
  );
};

export default Booking;
