import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

function Work(): JSX.Element {
    return (
        <section className="work">
            <SectionTitle text="Some Things I've Built" nb={2}></SectionTitle>
            <div className="project-card-list">
                <ProjectCard
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, assumenda fuga esse illo itaque molestiae"
                    }
                ></ProjectCard>
                <ProjectCard
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, assumenda fuga esse illo itaque molestiae perferendis? Amet maiores voluptas veniam consectetur repellendus harum beatae ipsam cum, sequi reiciendis esse."
                    }
                ></ProjectCard>
                <ProjectCard
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, assu illo itaque molestiae perferendis? Amet maiores voluptas veniam consectetur repellendus harum beatae ipsam cum, sequi reiciendis esse."
                    }
                ></ProjectCard>
                <ProjectCard
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, assumenda fuga esse illo itaque molestiae perferendis? um, sequi reiciendis esse."
                    }
                ></ProjectCard>
                <ProjectCard
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, assumenda fuga eserferendis? Amet maiores voluptas veniam consectetur repellendus harum beatae ipsam cum, sequi reiciendis esse."
                    }
                ></ProjectCard>
                <ProjectCard
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, assumenda fuga eserferendis? Amet maiores voluptas veniam consectetur repellendus harum beatae ipsam cum, sequi reiciendis esse."
                    }
                ></ProjectCard>
                <ProjectCard
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, assumenda fuga eserferendis? Amet maiores voluptas veniam consectetur repellendus harum beatae ipsam cum, sequi reiciendis esse."
                    }
                ></ProjectCard>
                <ProjectCard
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, assumenda fuga eserferendis? Amet maiores voluptas veniam consectetur repellendus harum beatae ipsam cum, sequi reiciendis esse."
                    }
                ></ProjectCard>
            </div>
            <div className="center">
                <button className="btn-m">Show More</button>
            </div>
        </section>
    );
}

export { Work };
