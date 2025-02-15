"use client";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import { Close, Menu } from "@/assets";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const shouldHideNavbar = ["/", "/pin"].includes(pathname);

  if (shouldHideNavbar) return null;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Image src={Menu} alt="Menu Icon" width={24} height={24} />
        </IconButton>

        <IconButton edge="end" color="inherit" aria-label="menu"
          sx={{ marginLeft: "auto" }}>
          <Image src={Close} alt="Close Icon" width={24} height={24} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
