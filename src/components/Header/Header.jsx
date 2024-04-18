import React from "react";
import { Logo, LogoutBtn, container } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
const authStatus = useSelector((state)=> state.auth.status)
const navigate = useNavigate()
  return <div>
  </div>;
};

export default Header;
