import React, {useEffect, useState} from 'react';
import {useApplicationContext} from "../../customReact/contexts/AppFuncContext.jsx";
import {
    CardBody,
    CardFooter,
    CardHeader,
    FormControl,
    Heading,
    Input,
    FormLabel,
    FormErrorMessage, Button, VStack, Card, HStack, FormHelperText
} from "@chakra-ui/react";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";


const AddThingForm = () => {

    const {
        thingsContext: {
            addNewThing
        }
    } = useApplicationContext();

    const [thing, setThing] = useState({
        name: "", description: "", links: []
    })

    let handleCurrentThingName = (e) => setThing(prev => ({
        ...prev, name: e.target.value
    }))

    let handleCurrentDescription = (e) => setThing(prev => ({
        ...prev, description: e.target.value
    }))

    const isDescriptionLong = thing.description.length > 30;

    let handleSubmit = (e) => {
        e.preventDefault()
        if (thing.name !== "" && !isDescriptionLong) {
            addNewThing(thing);
            setThing({name: "", description: "", links: []})
        }
    }


    console.log(thing, isDescriptionLong);


    return (
        <AnimatePresence>
            <motion.div
                key="pane"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <Card borderRadius="15px" height="100%" backgroundColor="white">
                    <CardHeader>
                        <Heading as="h2" size="lg">
                            Add new task:
                        </Heading>
                    </CardHeader>

                    <CardBody>
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">

                                <FormControl isRequired>
                                    <HStack>
                                        <FormLabel>Name</FormLabel>
                                        <Input type="text"
                                               onChange={handleCurrentThingName}
                                               value={thing.name}
                                        />
                                    </HStack>
                                </FormControl>

                                <FormControl isInvalid={isDescriptionLong}>
                                    <FormLabel>Description</FormLabel>
                                    <Input type="text"
                                           onChange={handleCurrentDescription}
                                           value={thing.description}
                                    />
                                    {isDescriptionLong ?
                                        (<FormErrorMessage>Message is too long.</FormErrorMessage>) :
                                        (<FormHelperText>Max 30 character text.</FormHelperText>)
                                    }
                                </FormControl>


                                <Button type="Submit" width="full">Submit</Button>
                            </VStack>
                        </form>
                    </CardBody>

                    <CardFooter>

                    </CardFooter>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
};

export default AddThingForm;