import React, {useEffect, useRef, useState} from 'react';
import {IoLogoIonic} from "react-icons/io";
import {MdAddTask} from "react-icons/md";
import AddThingForm from "./AddThingForm.jsx";
import {createPortal} from "react-dom";

const Dispatcher = ({addNewThing}) => {
    const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
       setTimeout(() => {
          setShow(true);
          setTimeout(() => setShow(false), 1500);
       },200);
    }, [])

    return (
        <aside
            className={show ? "aside-shown" : "aside-normal"}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className={"row"}>
                <IoLogoIonic size={70}/>
                <h1 className={"logo-text"}>Linker MK.I</h1>
            </div>

            <div className={"row"}>
                {
                    showForm &&
                        createPortal(
                            <AddThingForm addNewThing={addNewThing} setShow={setShow} setShowForm={setShowForm}/>,
                            document.body
                        )
                }

                <MdAddTask tabIndex={0} size={45} className={"pad"} onClick={ () => setShowForm(true)}/>
            </div>

            <div
                className="aside-visual"
                onClick={() => setShow(p => !p)}
            ></div>
        </aside>
    );
};

export default Dispatcher;