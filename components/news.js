import React from "react";
import { withPhenomicApi, query, BodyRenderer, Link } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout"

const News = (props) => (
    <Layout title={(props.content.node && props.content.node.title)} layout={(props.content.node && props.content.node.layout)}>
        <section className="wrapper">
            <div className="inner">
                <header className="align-center">
					<h2>{(props.content.node && props.content.node.title)}</h2>
					<p>{(props.content.node && props.content.node.subtitle)}</p>
				</header>
                <h2>News Articles</h2>
                <hr/>
                <div className="row">
                    {props.news.node && props.news.node.list.map(news => (
                        <div key={news.id} className="col-sm">
                            <h4>{news.title}</h4>
                            <div className="box">
                                <p> 
                                    <span className="image left"><img src={news.image} alt={news.title}></img></span>
                                    {news.intro} 
                                </p>
                                <Link to={"/news/" + news.id}className="button">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </Layout>
)

export default withPhenomicApi(News, props => ({
    news: query({
      path: "news",
      after: props.params.after
    }), 
    content: query({
        path: "site",
        id: "news"
    })
  }));