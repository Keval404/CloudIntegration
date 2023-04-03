import React from 'react'
import './index.css';
import Events from './events';
import Nav from './nav';


const App = () => {

  return (
    <>
      {/* <div class = "p-3 bg-black">
        <h1 class="py-2 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cloud Hive<span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">PRO</span></span></h1>
      </div> */}
      <Nav/>
      <Events/>
    </>
  )
}


export default App

