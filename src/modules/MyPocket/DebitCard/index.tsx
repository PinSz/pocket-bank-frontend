"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { IDebitCard } from "@/type/debitCard";
import { ITransactions } from "@/type/transactions";
import { CardCustom, TitleTypography } from "./styled";

interface DebitCardProps {
  debitCards: IDebitCard;
  transactions: ITransactions;
}

const DebitCard: FC<DebitCardProps> = ({ debitCards, transactions }) => {
  return (
    <Stack gap={2}>
      <Stack direction="row" spacing={2}>
        {transactions.transactions.map((item, index) => (
          <Stack key={index}>
            <Stack style={{ width: 54, height: 54, borderRadius: "50%", overflow: "hidden" }}>
              <Image
                src={item.image}
                alt={item.name}
                width={54}
                height={54}
                style={{ objectFit: "cover" }}
              />
            </Stack>
            <TitleTypography width={54}>{item.name}</TitleTypography>
          </Stack>
        ))}
      </Stack>

      <Stack direction="row" overflow="auto" gap={1}>
        <CardCustom
          sx={{
            background: debitCards.color,
            opacity: !debitCards.status ? 0.5 : 1
          }}
        >
          <Typography fontSize={16} fontWeight={700}>{debitCards.name}</Typography>
          <Typography fontSize={14} fontWeight={700}>{debitCards.number}</Typography>
          {debitCards.status && <Typography fontSize={14}>In progress</Typography>}
          <Typography fontSize={12} sx={{ opacity: 0.7 }}>Issued by {debitCards.issuer}</Typography>
        </CardCustom>
      </Stack>

    </Stack>
  );
};

export default DebitCard;
