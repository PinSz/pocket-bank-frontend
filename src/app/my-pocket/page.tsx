"use client";

import { Skeleton, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { route } from "@/constants";
import { fetchBanner } from "@/api/banner";
import { fetchTransaction } from "@/api/transaction";
import { fetchDebitCard } from "@/api/debitCard";
import { fetchAccountDetail } from "@/api/account";
import { IAccount } from "@/type/account";
import { IDebitCard } from "@/type/debitCard";
import { IBanner } from "@/type/banner";
import { ITransactions } from "@/type/transactions";
import MainSaving from "@/modules/MyPocket/MainSaving";
import DebitCard from "@/modules/MyPocket/DebitCard";
import OtherSaving from "@/modules/MyPocket/OtherSaving";

export default function MyPocket() {
  const hasFetched = useRef(false);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user } = useUserStore.getState();
  const [accountDetails, setAccountDetails] = useState<IAccount[] | null>(null);
  const [debitCardDetails, setDebitCardDetails] = useState<IDebitCard | null>(null);
  const [banner, setBanner] = useState<IBanner | null>(null);
  const [transactions, setDebitTransactions] = useState<ITransactions | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        router.replace(route.page.root);
        return;
      }

      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        const responses = await Promise.all([
          fetchBanner(user.userId),
          fetchTransaction(user.userId),
          fetchDebitCard({ userId: user.userId }),
          fetchAccountDetail({ userId: user.userId }),
        ]);

        const [resBanner, resTransaction, resDebitCard, resAccountDetail] = responses;

        if (responses.every(res => res?.status === 200)) {
          setAccountDetails(resAccountDetail?.data || null);
          setDebitCardDetails(resDebitCard?.data || null);
          setBanner(resBanner?.banner || null);
          setDebitTransactions(resTransaction?.data || null);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [router, user]);

  return (
    <Stack sx={{ flex: 1, padding: { xs: 3, lg: 4 }, gap: 2 }}>
      {loading ? (
        <>
          <Skeleton variant="rounded" height={150} />
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rounded" width={240} height={150} />
            <Skeleton variant="rounded" width={240} height={150} />
          </Stack>
          <Skeleton variant="rounded" height={120} />
        </>
      ) : (
        <>
          {accountDetails && user && (
            <MainSaving user={user} accountDetails={accountDetails} />
          )}
          {transactions && debitCardDetails && (
            <DebitCard debitCards={debitCardDetails} transactions={transactions} />
          )}
          {accountDetails && banner && user && (
            <OtherSaving accountDetails={accountDetails} banner={banner} user={user} />
          )}
        </>
      )}
    </Stack>
  );
}
