import { Divider, HStack } from "@chakra-ui/react";

interface SectionTitleProps {
    text: string;
    nb: number;
}

function SectionTitle({ text, nb }: SectionTitleProps): JSX.Element {
    return (
        <HStack
            className="section-title"
            mx={2}
            p={{ base: "8vh 0% 20px 14%", md: "16vh 12% 20px 12%" }}
        >
            <ol start={nb} className="title-list">
                <li>
                    <span className="title-text">{text}</span>
                </li>
            </ol>
            <Divider
                orientation="horizontal"
                width={"24vw"}
                ml={"20px"}
                border={"0.1px solid var(--secondary-text-color)"}
                display={{ base: "none", md: "flex" }}
            />
            <hr />
        </HStack>
    );
}

export { SectionTitle };
