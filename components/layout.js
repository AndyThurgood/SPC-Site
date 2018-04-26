import React from "react";
import Head from "react-helmet";
import { Link } from "@phenomic/preset-react-app/lib/client";

const Layout = ({layout,  title, children }) => (
    <div className={layout}>
        <Head>
            <meta charset="utf-8" />
            <meta name="description" content="Project management Consultancy that provide agile, prince2 and APM resources." />
            <meta name="keywords" content="Project management, agile, architecture, consultancy, design, development" />
            <meta name="author" content="Sage Project Consulting Limited" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <link rel="shortcut icon" href="images/favicon.ico" />
            <link href='http://fonts.googleapis.com/css?family=Cabin:400,600|Open+Sans:300,600,400' rel='stylesheet' />
            <title>{"Sage Project Consulting - " + title}</title>
        </Head>
        <header id="header">
            <div className="inner">
                <nav id="nav">
                <Link to="/" className="logo">
                    <img src="images/sage_logo.png"></img>
                    <span> Project Consulting</span>
                </Link>
                    <Link to="/services">Services</Link>
                    <Link to="/blog">News</Link>
                </nav>
                <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
            </div>
        </header>
        <div>
            {children}
        </div>
        <footer id="footer">
            <div className="inner">
                <h3>Get in touch</h3>
                <form action="#" method="post">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input name="name" id="name" type="text" placeholder="Name"></input>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email" placeholder="Email"></input>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input value="Send Message" className="button alt" type="submit"></input></li>
                    </ul>
                </form>
                <div className="copyright">
                    &copy; Sage Project Consulting. Design: <Link to="https://templated.co">TEMPLATED</Link>. Images: <Link to="https://unsplash.com">Unsplash</Link>.
				</div>
            </div>
        </footer>
    </div>
);

export default Layout;