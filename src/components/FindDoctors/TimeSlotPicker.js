import styled from "@emotion/styled";
import { Stack, Typography, Divider, Chip } from "@mui/material";

const TimeSlotPicker = ({ availableSlots, details, handleBooking, selectedDate }) => {
  const handleClick = (slot) => {
    // handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  const CustomChip = ({ label, handleClick }) => (
    <Chip
      label={label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": {
          ml: 0,
        },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={handleClick}
    />
  );

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {availableSlots.morning.length > 0 && (
        <Stack
          direction={{ xs: "column", md: "row" }} 
          alignItems="flex-start"
          px={{ xs: 2, md: 6 }} 
          spacing={2}
        >
          <Typography
            width={{ xs: "100%", md: "15%" }} 
            fontSize={{ xs: 14, md: 16 }}
            textAlign="left"
          >
            Morning
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing={1}>
            {availableSlots.morning.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                handleClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>
      )}

      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="flex-start"
          px={{ xs: 2, md: 6 }}
          spacing={2}
        >
          <Typography
            width={{ xs: "100%", md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
            textAlign="left"
          >
            Afternoon
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing={1}>
            {availableSlots.afternoon.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                handleClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>
      )}

      {availableSlots.evening.length > 0 && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="flex-start"
          px={{ xs: 2, md: 6 }}
          spacing={2}
        >
          <Typography
            width={{ xs: "100%", md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
            textAlign="left"
          >
            Evening
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing={1}>
            {availableSlots.evening.map((slot) => (
              <CustomChip
                key={slot}
                label={slot}
                handleClick={() => handleClick(slot)}
              />
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default TimeSlotPicker;
