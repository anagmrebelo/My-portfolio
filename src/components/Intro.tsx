import { VscGithubAlt } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";

function Intro(): JSX.Element {
    return (
        <div>
            <div className="intro-hello">
                <div>
                    <h3 className="small-heading">Hi, my name is</h3>
                    <h1 className="large-heading">Ana Rebêlo.</h1>
                    <h2 className="large-heading sec-text-color">
                        I am a Software Developer
                    </h2>
                    <Link to="work" smooth={true} offset={-70} duration={500}>
                        <button className="btn-m mg-40-td ">
                            Check out my projects
                        </button>
                    </Link>
                </div>
            </div>
            <div className="intro-icons">
                <nav className="nav-icons">
                    <a
                        href="https://github.com/anagmrebelo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <VscGithubAlt size={32} color="white" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ana-mota-rebelo/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLinkedin size={32} color="white" />
                    </a>
                </nav>
            </div>
        </div>
    );
}

export { Intro };
