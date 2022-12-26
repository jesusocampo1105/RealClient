// Import dependencies
import React from "react";

// Helper to add the title to the pages
const Helmet = (props) => {
  document.title = "Fantasy sex shop - " + props.title;

  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
