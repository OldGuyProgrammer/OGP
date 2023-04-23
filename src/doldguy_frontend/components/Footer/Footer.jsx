import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Old Guy Programmer {year}</p>
    </footer>
  );
}

export default Footer;
