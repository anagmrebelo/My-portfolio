import { SectionTitle } from "./SectionTitle";

function AboutMe(): JSX.Element {
    return (
        <section className="about" id="about">
            <SectionTitle text="About Me" nb={1}></SectionTitle>
            <div className="section-about">
                <div className="text-about">
                    <p>
                        My journey into the tech sector is an unconventional
                        one, having initially pursued studies in business. I
                        began my coding journey with the fundamental language,
                        C, and have recently honed my focus on the dynamic world
                        of web development. The passion for learning and
                        adapting to new challenges is at the heart of my coding
                        pursuits.
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
                            src="/imgs/ana_rebelo.png"
                        />
                        <div className="box-effect"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { AboutMe };
