import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";
import "font-awesome/css/font-awesome.css";
import "bootstrap-css-only/css/bootstrap-grid.css"
import "./assets/main.css";

import Home from "./components/home"
import Services from "./components/services";
import News from "./components/news";
import NewsItem from "./components/newsitem";

export default createApp(() => (
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/news" component={News} />
      <Route path="/news/*" component={NewsItem} />
    </Router>
));