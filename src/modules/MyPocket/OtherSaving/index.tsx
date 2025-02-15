"use client";

import { Dots } from "@/assets";
import colors from "@/styles/colors";
import { IAccount } from "@/type/account";
import { IUserResponse } from "@/type/user";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useMemo } from "react";
import { IBanner } from "@/type/banner";

interface OtherSavingProps {
  user: IUserResponse;
  accountDetails: IAccount[];
  banner: IBanner;
}

const OtherSaving: FC<OtherSavingProps> = ({ user, accountDetails, banner }) => {

  const account = useMemo(() => {
    const account = accountDetails.filter(
      (account) =>
        !account.isMainAccount
    ) ?? null;
    return account;
  }, [accountDetails]);

  return (
    <Stack gap={2}>
      {account.map((value, index) => (
        <Card
          key={index}
          sx={{
            background: value.color,
            borderRadius: 2.5,
            color: colors.white,
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: colors.white,
            }}
          >
            <Image src={Dots} alt="Dots Icon" width={24} height={24} />
          </IconButton>

          <Stack padding={2}>
            <Typography fontSize={20} fontWeight={700} gutterBottom>
              Saving Account
            </Typography>
            <Typography variant="h4">
              ฿{value?.amount.toLocaleString("en-US")}
            </Typography>
            <Typography fontSize={12} sx={{ opacity: 0.7 }}>
              Goal driven savings {value?.accountNumber}
            </Typography>
            <Typography fontSize={12} display="block" gutterBottom sx={{ opacity: 0.7 }}>
              Powered by TestLab
            </Typography>
          </Stack>
          <Box
            sx={{
              position: "absolute",
              bottom: 25,
              right: 8,
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              padding: "4px 8px",
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Typography fontSize={16} fontWeight={700} className="percent">{value.progress}</Typography>
            <Typography fontSize={12} fontWeight={700} className="unit">%</Typography>
          </Box>
        </Card>
      ))}

      <Stack
        direction="row"
        sx={{
          display: "flex",
          gap: 2,
          background: colors.white,
          padding: 2,
          borderRadius: "10px",
          boxShadow: "0 0 7px 0 rgba(0, 0, 0, .09)"
        }}
      >
        <Stack
          component="img"
          src={banner.image}
          alt={banner.title}
          sx={{ width: 36, height: 36 }}
        />
        <Stack>
          <Typography color="black">
            {banner.title}
          </Typography>
          <Typography variant="body2" color="gray">
            {banner.description} {`'${user.name}'`}
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ textAlign: "center", display: "block" }}>
        <Typography
          component="a"
          href="#"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: colors.blackTitle,
            border: "1px solid #f2f3f7",
            borderRadius: "15px",
            padding: 0.5,
          }}
        >
          Total Balance
        </Typography>
      </Stack>
    </Stack>
  );
}

export default OtherSaving;