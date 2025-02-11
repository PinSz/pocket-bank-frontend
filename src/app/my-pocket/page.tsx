"use client";

import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function MyPocket() {
  const [accountDetails, setAccountDetails] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/account/details`)
      .then((res) => res.json())
      .then((data) => setAccountDetails(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h4">Bank Main</Typography>
      {accountDetails ? (
        <Typography variant="body1">Balance: {accountDetails.balance} USD</Typography>
      ) : (
        <Typography variant="body1">Loading...</Typography>
      )}
      <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => alert("Transaction Clicked")}>
        View Transactions
      </Button>
    </Box>
  );
}
