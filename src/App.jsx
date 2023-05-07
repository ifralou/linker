import './App.css'
import Things from "./components/Things/Things.jsx";
import Dispatcher from "./components/Dispatcher/Dispatcher.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import MobilePanel from "./components/MobilePanel.jsx";
import {Grid} from "@chakra-ui/react";

function App() {

    return (
        <Grid as="main"
              templateColumns={["1fr", "1fr", "250px 1fr"]}
              align="start"
              justify={"space-between"}
        >
            <Dispatcher/>
            <section className={"panel-main"}>
                <MobilePanel/>
                <Calendar/>
                <Things/>
            </section>
        </Grid>
    )
}

export default App
