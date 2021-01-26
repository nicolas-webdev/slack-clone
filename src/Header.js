import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { useStateValue } from "./StateProvider";

import "./Header.css";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="head__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search Slackjong" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
