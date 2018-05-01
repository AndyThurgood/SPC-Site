import React from "react";
import Head from "react-helmet";
import { slide as Menu } from "react-burger-menu"
import { Link } from "@phenomic/preset-react-app/lib/client";
import ContactForm from "./contactform"


const SideMenu = () => (
    <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/news">News</Link>
    </Menu>
);

const Layout = ({layout, title, children }) => (
    <div id="outer-container" className={layout}>
        <SideMenu/>
        <Head>
            <meta charset="utf-8" />
            <meta name="description" content="Project management Consultancy that provide agile, prince2 and APM resources." />
            <meta name="keywords" content="Project management, agile, architecture, consultancy, design, development" />
            <meta name="author" content="Sage Project Consulting Limited" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <link rel="shortcut icon" href="images/favicon.ico" />
            <title>{"Sage Project Consulting - " + title}</title>
        </Head>

        <header id="header">
            <div className="inner">
                <Link to="/" className="logo">
                        <img src="/images/sage_logo.png"></img>
                        <span> Project Consulting</span>
                </Link>
            </div>           
        </header>

        <div id="page-wrap">
            {children}
        </div>
            
        <footer id="footer">
            <div className="inner">
                <h3>Get in touch</h3>
                <ContactForm />
                <div className="copyright">
                    &copy; Sage Project Consulting. Images: <Link to="https://unsplash.com">Unsplash</Link>.
                </div>
            </div>
        </footer>
    </div>
);

export default Layout;