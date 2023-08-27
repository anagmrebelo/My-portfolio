import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { Work } from "./Work";

function PortfolioApp(): JSX.Element {
    return (
        <>
            <Header></Header>
            <Intro></Intro>
            <AboutMe></AboutMe>
            <Work></Work>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
}

export { PortfolioApp };
