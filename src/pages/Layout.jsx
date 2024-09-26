import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbarStyles.css";

export const Layout = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");

    const navToggle = () => {
        setActive((prevActive) =>
            prevActive === "nav__menu" ? "nav__menu nav__active" : "nav__menu"
        );

        setIcon((prevIcon) =>
            prevIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"
        );
    };

    return (
        <div>
            <nav className="nav">
                <h1 style={{ color: 'white' }}>Cifrados</h1>
                <ul className={active}>
                    <li className="nav__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
                        >
                            Guia
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/CifradoCesar"
                            className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
                        >
                            Cifrado Cesar
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/CifradoEscitala"
                            className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
                        >
                            Cifrado Escítala
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/Documentacion"
                            className={({ isActive }) => isActive ? "nav__link active" : "nav__link"}
                        >
                            Documentación
                        </NavLink>
                    </li>
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <hr />
            <main style={{ paddingTop: '8vh' }}>
                <Outlet />
            </main>
        </div>
    );
};