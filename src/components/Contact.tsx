import { Button, HStack } from "@chakra-ui/react";
import { VscGithubAlt } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function Contact(): JSX.Element {
    return (
        <section className="contact">
            <div>
                <ol start={3} className="dec-with-zero">
                    <li className="small-heading">What's next?</li>
                </ol>
                <h1 className="large-heading">Get in touch</h1>
                <HStack className="p-40-t">
                    <Button
                        as="a"
                        href={`mailto:anagmrebelo@hotmail.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="github"
                        leftIcon={<HiOutlineMail />}
                    >
                        Email
                    </Button>
                    <Button
                        as="a"
                        href="https://github.com/anagmrebelo"
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="github"
                        leftIcon={<VscGithubAlt />}
                    >
                        Github
                    </Button>
                    <Button
                        as="a"
                        href="https://es.linkedin.com/in/ana-mota-rebelo"
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="github"
                        leftIcon={<BsLinkedin />}
                    >
                        Linkedin
                    </Button>
                </HStack>
            </div>
        </section>
    );
}

export { Contact };
