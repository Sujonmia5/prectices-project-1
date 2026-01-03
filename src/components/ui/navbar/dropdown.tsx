"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import Link from "next/link";
import { logOutUser } from "@/src/services/authServices";
import { useUser } from "@/src/context/userContext";
import { ProtectedRoute } from "@/src/utils/constants";
import { usePathname, useRouter } from "next/navigation";

function NavbarDropdown() {
  const { setUserLoading, setUser } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = () => {
    logOutUser();
    setUser(null);
    setUserLoading(true);
    if (ProtectedRoute.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };
  return (
    <Dropdown placement="bottom">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform cursor-pointer "
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="settings">
          <Link href={"/profile"} className="w-full h-full">
            My Profile
          </Link>
        </DropdownItem>
        <DropdownItem key="team_settings">Settings</DropdownItem>

        <DropdownItem onClick={handleLogout} key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default NavbarDropdown;
