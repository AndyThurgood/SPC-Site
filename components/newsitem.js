import React from "react";
import { withPhenomicApi, query, BodyRenderer, Link } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout"

const NewsItem = (props) => (
    <Layout title={(props.news.node && props.news.node.title)} layout="subpage">
        <section className="wrapper">
            <div className="inner">
                <header className="align-center">
					<h2>{(props.news.node && props.news.node.title)}</h2>
					<p>{(props.news.node && props.news.node.intro)}</p>
				</header>
                <hr/>
                <div className="row">
                    <div className="col-sm">
                        <div className="box">
                            <p>
                                <span className="image left"><img src={(props.news.node && props.news.node.image)} alt={(props.news.node && props.news.node.image)}></img></span>
                                {props.news.node && <BodyRenderer>{props.news.node.body}</BodyRenderer>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default withPhenomicApi(NewsItem, props => ({
    news: query({
      path: "news",
      id: props.params.splat
    })
  }));