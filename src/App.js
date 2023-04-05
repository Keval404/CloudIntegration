import React, { useEffect, useState } from "react";
import './index.css';
import './App.css';
import Events from './events';
import Logs from './logs';
import Dropdown from './dropdown';
import Nav from './nav';
import Flow from './Flow';
import PreLoader2 from './components/PreLoader1';

const App = () => {
  const [showFlow, setShowFlow] = useState(false);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200); // change 5000 to the desired duration in milliseconds
    return () => clearTimeout(timer);
  }, []);

  const [unvisible, setUnvisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUnvisible(true);
    }, 2200); // change 5000 to the desired duration in milliseconds
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
    {visible && <div>
      <div className="App">
      <header className="App-header">
        <PreLoader2 />
      </header>
    </div>
    </div>
    }
      {/* <div class="p-3 bg-black">
        <h1 class="p-2 px-10 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cloud Hive<span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">PRO</span></span></h1>
      </div> */}
      {unvisible && 
      <div>
        <Nav />
        <Events showFlow = {showFlow} setShowFlow = {setShowFlow}/>
        
        <Flow/>
      </div>
      
    }
      
    </>
  );
};

export default App;
