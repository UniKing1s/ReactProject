import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <>
      <nav className="div-card">
        <ul>
          <li>
            <Link to="/">Learning React</Link>
          </li>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/component">Đăng nhập</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
