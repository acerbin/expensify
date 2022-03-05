import React from "react";

const getCurrentYear = () => {
    return new Date().getFullYear();
}
const Footer = () => (<footer>Copyright Kat & Nic {getCurrentYear()}</footer>)

export default Footer;