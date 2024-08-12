import React from "react";
import { ReactComponent as AddButton } from "../assets/add.svg";
import { Link } from "react-router-dom";

const AddNotes = () => {
  return (
    <div>
      <Link to={"/note/new"} className="floating-button">
        <AddButton />
      </Link>
    </div>
  );
};

export default AddNotes;
