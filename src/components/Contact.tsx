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
                    <Button colorScheme="github" leftIcon={<HiOutlineMail />}>
                        Email
                    </Button>
                    <Button colorScheme="github" leftIcon={<VscGithubAlt />}>
                        Github
                    </Button>
                    <Button colorScheme="github" leftIcon={<BsLinkedin />}>
                        Linkedin
                    </Button>
                </HStack>
            </div>
        </section>
    );
}

export { Contact };
