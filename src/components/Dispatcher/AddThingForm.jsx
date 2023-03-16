import React, {useState} from 'react';

const AddThingForm = ({addNewThing, setShow, setShowForm}) => {
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

    const onClickWrapper = (e) => {
        if(e.target.className.includes("modal-wrapper")) {
            setShowForm(false);
        }
    }


    return (
        <div className={"modal-wrapper"} onClick={onClickWrapper}>

            <div className={"modal"}>
                <form onSubmit={handleSubmit}>

                    <input type="text"
                           value={thing.name}
                           onChange={handleCurrentThingName}
                           placeholder={"New thing"}
                           onFocus={() => setShow(true)}
                    />

                    <input type="text"
                           value={thing.description}
                           onChange={handleCurrentDescription}
                           placeholder={"Description of the thing"}
                    />

                    <input type="submit" value="Submit"/>
                </form>
            </div>

        </div>

    );
};

export default AddThingForm;