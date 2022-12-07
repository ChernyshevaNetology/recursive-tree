import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ExpandLabel = ({ children, expanded, onExpand }) => {
  if (children?.length > 0) {
    return (
      <FontAwesomeIcon
        onClick={onExpand}
        style={{ cursor: "pointer" }}
        icon={expanded ? faAngleUp : faAngleDown}
      />
    );
  }

  return null;
};

export { ExpandLabel };
