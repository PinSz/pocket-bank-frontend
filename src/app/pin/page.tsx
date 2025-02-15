"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Avatar, Button, Grid, IconButton, Link } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import colors from "@/styles/colors";
import { fetchUser } from "@/api/user";
import { useUserStore } from "@/store/useUserStore";
import { route } from "@/constants";

export default function PinPage() {
  const router = useRouter();
  const [pin, setPin] = useState<string>("");
  const { setUser } = useUserStore.getState();

  const handleKeyPress = (value: string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + value);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleSubmit = async () => {
    if (pin === "123456") {
      const userId = "000018b0e1a211ef95a30242ac180002";
      const response = await fetchUser(userId);
      if (response?.status === 200) {
        setUser(response.data ?? null);
        router.replace(route.page.myPocket);
      } else {
        alert("Error: User not found or data is invalid.");
      }
    } else {
      alert("Invalid PIN Code. Try again.");
      setPin("");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor={colors.primary}
      color={colors.white}
      textAlign="center"
      px={2}
    >
      {/* User Info */}
      <Avatar src="https://dummyimage.com/200x200/999/fff" sx={{ width: 80, height: 80, mb: 1 }} />
      <Typography variant="h6">Interview User</Typography>

      {/* PIN Dots */}
      <Box display="flex" justifyContent="center" gap={1} my={2}>
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            width={12}
            height={12}
            borderRadius="50%"
            bgcolor={i < pin.length ? colors.white : "rgba(255,255,255,0.5)"}
          />
        ))}
      </Box>

      {/* Additional Links */}
      <Box mt={3}>
        <Link href="#" color={colors.white} underline="hover" sx={{ display: "block", mb: 1 }}>
          Login with ID / Password
        </Link>
        <Typography variant="caption" display="block">
          Powered by TestLab
        </Typography>
      </Box>

      {/* Keypad */}
      <Grid container spacing={1} justifyContent="center" maxWidth={280} mt={1}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"].map((key, index) => (
          <Grid item xs={4} key={index}>
            {key === "del" ? (
              <IconButton onClick={handleDelete} sx={{ width: "100%", height: 50, color: colors.white }}>
                <BackspaceIcon />
              </IconButton>
            ) : key ? (
              <Button
                variant="contained"
                sx={{ width: "100%", height: 50, bgcolor: colors.primary, color: colors.white, fontWeight: "bold" }}
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </Button>
            ) : (
              <Box sx={{ width: "100%", height: 50 }} />
            )}
          </Grid>
        ))}
      </Grid>

      {/* Submit Button */}
      {pin.length === 6 && (
        <Button
          variant="contained"
          sx={{ mt: 3, bgcolor: colors.white, color: colors.primary, fontWeight: "bold" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )}


    </Box>
  );
}
