"use client";
import React from "react";
import NavbarDropdown from "./dropdown";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useUser } from "@/src/context/userContext";

function NavbarClientItem() {
  const { user } = useUser();
  return (
    <React.Fragment>
      {user?.email ? (
        <NavbarDropdown />
      ) : (
        <Button
          as={Link}
          className="cursor-pointer "
          color="secondary"
          href="/login"
          variant="solid"
        >
          Login
        </Button>
      )}
    </React.Fragment>
  );
}

export default NavbarClientItem;
