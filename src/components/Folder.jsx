import React, { useState } from "react";
import { AiFillFolderOpen, AiTwotoneFileImage } from "react-icons/ai";

const Folder = ({ explorer }) => {
  const [expland, setExpand] = useState(false);

  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div>
        <span
          style={{ color: "green", display: "flex", alignItems: "center" }}
          onClick={() => setExpand(!expland)}>
          <AiFillFolderOpen />
          {explorer.name}
        </span>
        <di style={{ display: expland ? "block" : "none", padding: "15px" }}>
          {explorer.items.map((exp, i) => {
            return <Folder explorer={exp} />;
          })}
        </di>
      </div>
    );
  } else {
    return (
      <span>
        <AiTwotoneFileImage/>
        {explorer.name}
        <br />
      </span>
    );
  }
};

export default Folder;
