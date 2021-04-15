import React from "react";
import "./WorkSpace.css";
import "./MessageInput";
import MessageInput from "./MessageInput";
import WorkSpaceHeader from "./WorkSpaceHeader";

const WorkSpace = () => {
  return (
    <div className="work-space">
      <WorkSpaceHeader />
      <ChatComponent />
      <MessageInput />
    </div>
  );
};

export default WorkSpace;
