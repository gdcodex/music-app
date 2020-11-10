import React from "react";
import { Home, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Bottom() {
  return (
    <div className="bottom">
      <section className="bottom-section">
        <Link to="/explore">
          <Home color="secondary" />
        </Link>
        <Link to="/search">
          <Search color="secondary" />
        </Link>
      </section>
    </div>
  );
}

export default Bottom;
