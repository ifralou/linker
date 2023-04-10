import React from 'react';
import {useApplicationContext} from "../../customReact/contexts/AppFuncContext.jsx";
import CardWrapper from "../ChakraUICutomes/CardWrapper.jsx";
import {
    Box,
    Button,
    CardBody,
    Text,
    CardFooter,
    CardHeader,
    Heading,
    HStack,
    Flex,
    List,
    ListItem, Link, ListIcon
} from "@chakra-ui/react";
import {AiOutlineArrowRight, BiLinkExternal, MdOutlineLink} from "react-icons/all.js";

const CurrentThing = ({thing}) => {
    const {name, description, links} = thing
    console.log(thing)

    const openInNewWindow = () => {
        let redirectTo = new URL(document.location.href + "redirect.html");
        links.forEach(({title, url}) => redirectTo.searchParams.append(title, url))
        window.open(redirectTo)
    };

    const {
        timerContext: {
            startTimer,
        },
        panesContext: {
            moveToTimer
        }
    } = useApplicationContext();

    const dispatchTimer = () => {
        startTimer(name);
        moveToTimer();
    };

    return (
        <CardWrapper as="section">
            <CardHeader>
               <Flex justifyContent="space-between">
                  <Box>
                      <Heading>{name}</Heading>
                      <Text>{description}</Text>
                  </Box>
                   <Button variant="solid" onClick={dispatchTimer}>
                      Start session
                   </Button>
               </Flex>
            </CardHeader>

            <CardBody>
                <Text>Stat right here</Text>
                <List>
                    {
                        links.map(({title, url}, i) =>
                            <ListItem key={i}>
                                <ListIcon as={MdOutlineLink}/>
                                <Link key={i} target="_blank" href={url}>{title}</Link>
                            </ListItem>
                        )
                    }
                </List>
            </CardBody>

            <CardFooter>
                <Button rightIcon={<AiOutlineArrowRight/>} variant="outline" onClick={openInNewWindow} width="full">
                    Expand all in a new window
                </Button>
            </CardFooter>

        </CardWrapper>
    );
};

export default CurrentThing;