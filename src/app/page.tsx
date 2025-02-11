"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useLoaderStore from "@/store/useLoaderStore";

export default function HomePage() {
  const router = useRouter();
  const { setLoading } = useLoaderStore();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/pin");
    }, 2000);
  }, [router, setLoading]);

  return null;
}
