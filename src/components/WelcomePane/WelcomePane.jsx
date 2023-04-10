import React from 'react';
import {Text, CardBody, CardHeader, Heading, CardFooter, Stack, StackDivider} from "@chakra-ui/react";
import CardWrapper from "../ChakraUICutomes/CardWrapper.jsx";

const WelcomePane = () => {
    return (
        <CardWrapper>

            <CardHeader>
                <Heading as="h2" size={"lg"}>
                    Hi there!
                </Heading>
                <Heading as="h3" size={"md"}>
                    Welcome to the linker app!
                </Heading>
            </CardHeader>

            <CardBody>
                <Stack spacing="4">

                    <Text size="lg">
                        On you upper right you could see calendar.
                        All you activities on different tasks are shows there.
                    </Text>
                    <Text>
                        Under calendar there are your tasks. You could drag and drog
                        links from you url bar to save them to the appropriate task.
                    </Text>
                    <Text>
                        If you want to add a task click big circle on the left.
                    </Text>
                    <Text>
                        To get back to the description just click on the Linker MK.I
                    </Text>

                </Stack>
            </CardBody>

            <CardFooter>
                <Heading as="h4" size="sm">
                    Enjoy!
                </Heading>
            </CardFooter>

        </CardWrapper>
    );
};

export default WelcomePane;