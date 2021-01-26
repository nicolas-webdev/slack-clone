import React, { useState, useEffect } from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { useStateValue } from "./StateProvider";

import db from "./firebase";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slackjong</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName.substring(
              0,
              user.displayName.indexOf(" ") + 2 || -1
            )}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Inbox" />
      <SidebarOption Icon={DraftsIcon} title="Read" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Saved" />
      <SidebarOption Icon={PeopleAltIcon} title="Friends" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="Files" />
      <SidebarOption Icon={ExpandLessIcon} title="Show" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Channels" addChannelOption />
      {channels.map((channel) => (
        <SidebarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
