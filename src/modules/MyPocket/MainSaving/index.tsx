"use client";

import { Dots, QrScan, Transfer, Wallet } from "@/assets";
import colors from "@/styles/colors";
import { IAccount } from "@/type/account";
import { IUserResponse } from "@/type/user";
import { Card, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useMemo } from "react";
import { StackIcon, StyledTypography, StyledTypographyIcon } from "./styled";

interface MainSavingProps {
  user: IUserResponse;
  accountDetails: IAccount[];
}

const MainSaving: FC<MainSavingProps> = ({ user, accountDetails }) => {

  const account = useMemo(() => {
    const account = accountDetails.find(
      (account) =>
        account.isMainAccount
    ) ?? null;
    return account;
  }, [accountDetails]);

  return (
    <Stack gap={2}>
      <StyledTypography>
        Have a nice day {user?.name}
      </StyledTypography>
      <Card
        sx={{
          background: colors.primary,
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

        <Stack padding={2} paddingBottom={6}>
          <Typography fontSize={20} fontWeight={700} gutterBottom>
            Saving Account
          </Typography>
          <Typography variant="h4">
            ฿{account?.amount.toLocaleString("en-US")}
          </Typography>
          <Typography fontSize={13} sx={{opacity:0.7}}>
            Smart account {account?.accountNumber}
          </Typography>
          <Typography fontSize={13} sx={{opacity:0.7}} display="block" gutterBottom>
            Powered by TestLab
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          sx={{
            backgroundColor: "rgba(0, 0, 0, .03)",
            paddingY: 1,
          }}
        >
          <StackIcon>
            <IconButton>
              <Image src={Transfer} alt="Transfer Icon" width={24} height={24} />
            </IconButton>
            <StyledTypographyIcon>Withdrawal</StyledTypographyIcon>
          </StackIcon>
          <StackIcon>
            <IconButton>
              <Image src={QrScan} alt="QrScan Icon" width={24} height={24} />
            </IconButton>
            <StyledTypographyIcon>QR scan</StyledTypographyIcon>
          </StackIcon>
          <StackIcon>
            <IconButton>
              <Image src={Wallet} alt="Wallet Icon" width={24} height={24} />
            </IconButton>
            <StyledTypographyIcon>Add money</StyledTypographyIcon>
          </StackIcon>
        </Stack>
      </Card>
    </Stack>
  );
}

export default MainSaving;