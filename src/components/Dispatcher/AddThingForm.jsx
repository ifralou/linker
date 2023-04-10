import React, {useState} from 'react';
import {useApplicationContext} from "../../customReact/contexts/AppFuncContext.jsx";
import CardWrapper from "../ChakraUICutomes/CardWrapper.jsx";
import {
    CardBody,
    CardFooter,
    CardHeader,
    FormControl,
    Heading,
    Input,
    FormLabel,
    FormErrorMessage, Button, VStack
} from "@chakra-ui/react";


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

    let handleSubmit = (e) => {
        e.preventDefault()
        if (thing.name !== "") {
            addNewThing(thing);
            setThing({name: "", description: "", links: []})
        }
    }

    return (
        <CardWrapper color="white">
            <CardHeader>
                <Heading as="h2" size="lg">
                    Add new task:
                </Heading>
            </CardHeader>

            <CardBody>
                <form onSubmit={handleSubmit}>
                   <VStack spacing={4}  align="flex-start">
                       <FormControl>
                           <Input type="text"
                               onChange={handleCurrentThingName}
                               value={thing.name}
                           />
                       </FormControl>

                       <FormControl>
                           <Input
                               onChange={handleCurrentDescription}
                               value={thing.description}
                           />
                       </FormControl>

                       <Button type="Submit" width="full">Submit</Button>
                   </VStack>
                </form>
            </CardBody>

            <CardFooter>

            </CardFooter>
        </CardWrapper>
    );
};

export default AddThingForm;