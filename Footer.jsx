import React from "react";

function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer>
      <h1>
        <p> Copyright @ {year} </p>
      </h1>
    </footer>
  );
}
export default Footer;
