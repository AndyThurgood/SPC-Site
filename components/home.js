import React from "react";
import { withPhenomicApi, query, BodyRenderer, Link } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout"

const Banner = (props) =>(
<section id="banner">
    <div className="inner">
        <header>
            <h1>{props.content.node && props.content.node.banner}</h1>
            <h2>{props.content.node && props.content.node.subtitle}</h2>
        </header>
        <div className="flex ">
            <div>
                <span className="icon fa-trello"></span>
                <h3>Project Management</h3>
                <p>End to end project delivery</p>
            </div>
            <div>
                <span className="icon fa-users"></span>
                <h3>Consultancy</h3>
                <p>On site leadership and advice</p>
            </div>
            <div>
                <span className="icon fa-check-circle"></span>
                <h3>Assurance</h3>
                <p>Agile, Prince 2 and APM processes</p>
            </div>

        </div>

        <footer>
            <Link to="#footer" className="button">Contact</Link>
        </footer>
    </div>
</section>
);

const Info = () =>(
<section id="Info" className="wrapper align-center">
				<div className="inner">
					<div className="flex flex-2">
						<article>
							<div className="image round">
								<img src="images/services.jpg" alt="services" />
							</div>
							<header>
								<h3>Sage | Services</h3>
							</header>
							<p>What sage can do for you and your business, <br /> plus some other text that Milly wants here</p>
							<footer>
								<Link to="/services" className="button">Learn More</Link>
							</footer>
						</article>
						<article>
							<div className="image round">
								<img src="images/news.jpg" alt="news" />
							</div>
							<header>
								<h3>Sage | News</h3>
							</header>
							<p>Latest news from Sage,<br /> our thoughts, plans and achivements<br /></p>
							<footer>
								<Link to="/news" className="button">Learn More</Link>
							</footer>
						</article>
					</div>
				</div>
			</section>
)

const Home = (props) => (
    <Layout layout={props.content.node && props.content.node.layout} title={props.content.node && props.content.node.title}>
        <Banner {...props}/>
        <Info/>
    </Layout>
);

export default withPhenomicApi(Home, props => ({
    content: query({
      path: "site",
      id: "home"
    })
}));