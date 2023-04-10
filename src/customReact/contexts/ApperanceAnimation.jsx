import React from 'react';
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";

const AppearanceAnimation = ({children}) => {
    return (
        <AnimatePresence>
            <motion.div
                key="pane"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AppearanceAnimation;