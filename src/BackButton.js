import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ to }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);      // fixed route (for departments)
    } else {
      navigate(-1);      // default behavior
    }
  };

  return (
    <button className="back-button" onClick={handleBack}>
      ⬅ Back
    </button>
  );
};

export default BackButton;
