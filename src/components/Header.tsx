import { Link } from "react-scroll";

function Header(): JSX.Element {
    return (
        <header className="top-header" id="header">
            <nav className="right-nav">
                <ol className="header-menu">
                    <Link to="about" smooth={true} offset={-70} duration={500}>
                        <li>
                            <span className="text">About</span>
                        </li>
                    </Link>
                    <Link to="work" smooth={true} offset={-70} duration={500}>
                        <li>
                            <span className="text">Work</span>
                        </li>
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li>
                            <span className="text">Contact</span>
                        </li>
                    </Link>
                </ol>
                <a href="./src/resume/Ana_Rebelo.pdf" download="Ana_Rebelo.pdf">
                    <button className="btn-s mg-40-rl">Resume</button>
                </a>
            </nav>
        </header>
    );
}

export { Header };
