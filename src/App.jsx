import {useEffect, useReducer, useState} from 'react'
import './App.css'
import {getCurrentMonthMap} from "./utils/time.js";
import Things from "./components/Things/Things.jsx";
import Dispatcher from "./components/Dispatcher/Dispatcher.jsx";
import {linkerReducer} from "./utils/reducer.js";
import Calendar from "./components/Calendar/Calendar.jsx";
import CurrentDay from "./components/CurrentDay/CurrentDay.jsx";

function App() {
  const [tab, setTab] = useState("things");

  const [things, dispatch] = useReducer(linkerReducer, [{
      name: "Test",
      description: "just to test something",
      links: []
  }]);

  useEffect(() => {
   console.log(getCurrentMonthMap())
  }, [])

  return (
      <main className="App">
              <Dispatcher dispatch={dispatch}/>
              <section className="main-grid">
                  <Things things={things} dispatch={dispatch}/>
                  <Calendar/>
                  <CurrentDay/>
              </section>
      </main>
  )
}

export default App
