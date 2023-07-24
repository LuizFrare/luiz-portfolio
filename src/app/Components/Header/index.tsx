import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HeaderWrapper, MenuList, MenuItem } from "./styles";
import { HeaderProps } from "./types";
import MenuButton from "../HamburguerIcon";
import useMenuOpen from "@/app/Hooks/useMenuOpen";

export default function Header(props: HeaderProps) {
  const menuClosed = useMenuOpen(); 

  return (
    <HeaderWrapper>
      <div className="header-content">
        <span>&lt;Luiz Frare/&gt;</span>
        <MenuButton />
        <MenuList className={menuClosed ? "" : "open"}>
          {props.links.map((linkProps) => (
            <MenuItem key={linkProps.href}>
              <Link {...linkProps}>{linkProps.children}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </div>
    </HeaderWrapper>
  );
}
