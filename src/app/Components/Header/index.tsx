"use client";
import React from "react";
import Link from "next/link";
import { HeaderWrapper, MenuList, MenuItem } from "./styles";
import { HeaderProps } from "./types";
import MenuButton from "../HamburguerIcon";

export default function Header(props: HeaderProps) {
  return (
    <HeaderWrapper>
      <div className="header-content">
        <span>Luiz Frare</span>
        <MenuButton />
        <MenuList>
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
