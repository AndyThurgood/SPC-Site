import React from "react";
import { withPhenomicApi, query, BodyRenderer, Link } from "@phenomic/preset-react-app/lib/client";
import Layout from "./layout"

const Services = (props) => (
<Layout title={(props.content.node && props.content.node.title)} layout={(props.content.node && props.content.node.layout)}>
        <section className="wrapper">
            <div className="inner">
                <header className="align-center">
                    <h2>{(props.content.node && props.content.node.title)}</h2>
					<p>{(props.content.node && props.content.node.subtitle)}</p>
				</header>
                {props.content.node && <BodyRenderer>{props.content.node.body}</BodyRenderer>}
                <h2>Our Values</h2>
                <p>
                    ringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis 
                    sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus 
                    vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing 
                    accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. 
                    Blandit adipiscing eu felis.
                </p>
                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis 
                    sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus 
                    vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing 
                    accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. 
                    Blandit adipiscing eu felis.</blockquote>
                <h5>Milly Thurgood - Director</h5>
                
                <hr className="major"/>

                <h2>Our Services</h2>

                <div className="row">
                    <div className="col-sm">
                        <h3>Project Management</h3>
                         <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    </div>
                    <div className="col-sm">
                        <h3>Consultancy</h3>
                        <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    </div>
                    <div className="col-sm">
                        <h3>Assurance</h3>
                        <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default withPhenomicApi(Services, props => ({
    content: query({
        path: "content/site",
        id: "services"
    })
  }));