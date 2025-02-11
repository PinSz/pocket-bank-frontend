"use client";

import { Modal, Box } from "@mui/material";
import useLoaderStore from "@/store/useLoaderStore";

const LoaderModal = () => {
  const { isLoading } = useLoaderStore();

  return (
    <Modal open={isLoading} disableEscapeKeyDown>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="rgba(0, 0, 0, 0.2)"
      >
        <Box className="loader" />
      </Box>
    </Modal>
  );
};

export default LoaderModal;
