import React, { useState } from "react";
import { TEntry } from "../App";
import { v4 as uuidv4 } from "uuid";
import { ExpandLabel } from "./Expand-label";

const Entry = React.memo(({ name, children, depth }: TEntry) => {
  const [expanded, setIsExpanded] = useState(false);

  const onExpand = () => setIsExpanded(!expanded);

  return (
    <div key={uuidv4()} className={"entry"}>
      <div>
        <ExpandLabel
          children={children}
          expanded={expanded}
          onExpand={onExpand}
        />
        {expanded &&
          children.map((child) => (
            <div style={{ marginRight: `${depth + 10}px` }} key={uuidv4()}>
              {child.name}
            </div>
          ))}
        {name}
      </div>
    </div>
  );
});

export { Entry };
