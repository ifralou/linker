import React, {useState} from 'react';

const AddThingForm = ({addNewThing}) => {
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
        <div className={"modal info-wrapper"}>
            <h2 className={"modal-header"}>Add new thing:</h2>
            <form onSubmit={handleSubmit}>

                <input type="text"
                       value={thing.name}
                       onChange={handleCurrentThingName}
                       placeholder={"New thing"}
                />

                <input type="text"
                       value={thing.description}
                       onChange={handleCurrentDescription}
                       placeholder={"Description of the thing"}
                />

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default AddThingForm;