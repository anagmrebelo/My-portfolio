import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 } from "react-icons/ci";
import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    gitLink: string;
    websiteLink: string;
    img: string;
}

function ProjectCard({
    title,
    description,
    tags,
    gitLink,
    websiteLink,
    img,
}: ProjectCardProps): JSX.Element {
    const [clicked, setClicked] = useState(false);

    return (
        <Box className="project-card" onClick={() => setClicked(!clicked)}>
            {!clicked && (
                <>
                    <nav className="right-nav flex-1">
                        <a
                            className="icon-a"
                            href={gitLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <VscGithubAlt size={16} color="white" />
                        </a>

                        {websiteLink !== "" && (
                            <a
                                className="icon-a"
                                href={websiteLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <CiShare1 size={16} color="white" />
                            </a>
                        )}
                    </nav>
                    <div className="details-block flex-8">
                        <h4 className="medium-heading">{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="tag-list flex-2">
                        {tags.map((tag, key) => (
                            <p className="tag" key={key}>
                                {tag}
                            </p>
                        ))}
                    </div>
                </>
            )}
            {clicked && (
                <Image
                    src={`/imgs/` + img}
                    alt="profile"
                    className="project-card-img"
                />
            )}
        </Box>
    );
}

export { ProjectCard };
