import { SectionTitle } from "./SectionTitle";

function AboutMe(): JSX.Element {
    return (
        <section className="about">
            <SectionTitle text="About Me" nb={1}></SectionTitle>
            <div className="section-about">
                <div className="text-about">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nam distinctio quidem, cumque soluta unde,
                        dolorum, qui magni nobis est omnis optio repudiandae
                        sint numquam dolor esse dolorem deserunt voluptas. Quia.{" "}
                        <br />
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nam distinctio quidem, cumque soluta unde,
                        dolorum, qui magni nobis est omnis optio repudiandae
                        sint numquam dolor esse dolorem deserunt voluptas. Quia.
                    </p>
                    <h4 className="p-40-t">
                        Here are a few technologies I’ve been working with
                        recently:
                    </h4>
                    <ul className="about-list">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                        <li>Typescript</li>
                        <li>C</li>
                    </ul>
                </div>
                <div className="img-about">
                    <div className="image-box">
                        <img
                            alt="Profile of Ana Rebelo"
                            src="./src/imgs/ana_rebelo.png"
                        />
                        <div className="box-effect"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { AboutMe };
