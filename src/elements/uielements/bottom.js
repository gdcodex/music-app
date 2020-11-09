import React from "react";
import { Home, Search, Explore } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Bottom() {
  return (
    <div className="bottom">
      <section className="bottom-section">
        <Link to="/">
          <Home color="secondary" />
        </Link>
        <Link to="/explore">
          <Explore color="secondary" />
        </Link>
        <Link to="/search">
          <Search color="secondary" />
        </Link>
      </section>
    </div>
  );
}

export default Bottom;
