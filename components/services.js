import React from "react";
import Layout from "./layout"

const Services = () => (
    <Layout layout="subpage" >
        <section className="wrapper">
            <div className="inner">
                <header className="align-center">
					<h2>Sage Services</h2>
					<p>What we do and why we do it</p>
				</header>
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
                    <div class="4u 12u$(medium)">
                        <h3>Project Management</h3>
                         <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    </div>
                    <div class="4u 12u$(medium)">
                        <h3>Consultancy</h3>
                        <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    </div>
                    <div class="4u 12u$(medium)">
                        <h3>Assurance</h3>
                        <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Services;