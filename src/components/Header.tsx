import { Stack } from "@chakra-ui/react";
import { Link } from "react-scroll";

function Header(): JSX.Element {
    return (
        <Stack
            className="top-header"
            id="header"
            display={{ base: "none", md: "flex" }}
        >
            <nav className="right-nav">
                <ol className="header-menu">
                    <Link to="about" smooth={true} duration={500}>
                        <li>
                            <span className="text">About</span>
                        </li>
                    </Link>
                    <Link to="work" smooth={true} duration={500}>
                        <li>
                            <span className="text">Work</span>
                        </li>
                    </Link>
                    <Link to="contact" smooth={true} duration={500}>
                        <li>
                            <span className="text">Contact</span>
                        </li>
                    </Link>
                </ol>
                <a href="/resume/Ana_Rebelo.pdf" download="Ana_Rebelo.pdf">
                    <button className="btn-s mg-40-rl">Resume</button>
                </a>
            </nav>
        </Stack>
    );
}

export { Header };
