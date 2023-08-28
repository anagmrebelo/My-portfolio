function Header(): JSX.Element {
    return (
        <header className="top-header">
            <nav className="right-nav">
                <ol className="header-menu">
                    <li>
                        <a href="about">
                            <span className="text">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="work">
                            <span className="text">Work</span>
                        </a>
                    </li>
                    <li>
                        <a href="contact">
                            <span className="text">Contact</span>
                        </a>
                    </li>
                </ol>
                <button className="btn-s mg-40-rl">Resume</button>
            </nav>
        </header>
    );
}

export { Header };
