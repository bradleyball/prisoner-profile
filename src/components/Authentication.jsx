import React from "react";
import NoUserNavBar from "./NoUserNavBar";

const Authentication = ({ loading }) => {
  if (loading) return null;

  return (
    <div>
      <NoUserNavBar />
    </div>
  );
};

export default Authentication;
