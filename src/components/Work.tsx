import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import data from "../data/projects.json";
import { HStack } from "@chakra-ui/react";

function Work(): JSX.Element {
    return (
        <section className="work" id="work">
            <SectionTitle text="Some Things I've Built" nb={2}></SectionTitle>
            <HStack className="project-card-list">
                {data.projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        description={project.description}
                        title={project.title}
                        tags={project.tags}
                        gitLink={project.gitLink}
                        websiteLink={project.websiteLink}
                        img={project.img}
                    ></ProjectCard>
                ))}
            </HStack>
            <div className="center">
                <a href="https://github.com/anagmrebelo?tab=repositories">
                    <button className="btn-m">Show More</button>
                </a>
            </div>
        </section>
    );
}

export { Work };
