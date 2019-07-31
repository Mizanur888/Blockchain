import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1> Land Money App</h1>
    </header>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "15px"
};
