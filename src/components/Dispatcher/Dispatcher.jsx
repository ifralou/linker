import React, {useEffect, useRef, useState} from 'react';
import {IoLogoIonic} from "react-icons/io";
import {MdAddTask} from "react-icons/md";
import AddThingForm from "./AddThingForm.jsx";
import {createPortal} from "react-dom";
import Menu from "./Menu.jsx";

const Dispatcher = ({addNewThing}) => {

    return (
        <aside>
            <div className={"row"}>
                <h1 className={"logo-text"}>Linker MK.I</h1>
            </div>

            <div className={"row center"}>
                <IoLogoIonic size={200} className={"visual-adjust"}/>
            </div>

            <Menu/>

        </aside>
    );
};

export default Dispatcher;