import React,{useState} from 'react'
import {Pipelines} from './pipelines.js'
import Logs from './logs.js'
import Dropdown from './dropdown.js'



const Events = ({showFlow ,setShowFlow}) => {
  const [clickCount, setClickCount] = useState(0);
  const [data, setData] = useState(Pipelines)

  const handleClick = () => {
    if (clickCount % 2 === 0) {
      setShowFlow(true);
    } else {
      setShowFlow(false);
    }

    setClickCount(clickCount + 1);
  }

  return (
    <>
        <div class="md:container md:mx-auto">
        <h2 class="text-">Pipelines</h2>

        <table class="w-full table-auto border-collapse w-full rounded-tl-2xl">
        <thead class = "bg-gray-50 border-b-2 border-gray-200 ">
          <tr>
            <th class = "p-3 text-sm font-semibold tracking-wide text">DAG</th>
            <th class = "p-3 text-sm font-semibold tracking-wide text">owner</th>
            <th class = "p-3 text-sm font-semibold tracking-wide text">Runs</th>
            <th class = "p-3 text-sm font-semibold tracking-wide text">Schedule</th>
            <th class = "p-3 text-sm font-semibold tracking-wide text">Last Run</th>
            <th class = "p-3 text-sm font-semibold tracking-wide text">Recent Tasks</th>
            <th class = "p-3 text-sm font-semibold tracking-wide text">Actions</th>
            <th class = "p-3 text-sm font-semibold tracking-wide text">Links</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return(
              <>
                <tr key={item.id}>
                  <td class="p-3">
                  <label class="relative inline-flex items-center mb-4 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"></input>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  <span onClick={handleClick} class="ml-3 text-sm font-medium text-gray-900 dark:text-blue-500">example_bash_operator</span>
                  </td>
                  <td class = "p-3 text-sm text-gray-700">airflow</td>
                  <td class = "p-3 text-sm text-gray-700"><div class="w-8 h-8 rounded-full border-2 border-gray-500"></div></td>
                  <td class = "p-3 text-sm text-gray-700"><span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">@daily</span></td>
                  <td class = "p-3 text-sm text-blue-700">2020-10-26, 21:08:04</td>
                  <td class = "p-3 text-sm text-gray-700"><div class="w-8 h-8 rounded-full border-2 border-gray-500"></div></td>
                  <td class = "p-3 text-sm text-gray-700">
                    <div class="flex items-center space-x-4">
                      <button class="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                        <i class="fas fa-play">Play</i>
                      </button>
                      <button class="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <i class="fas fa-pause">Pause</i>
                      </button>
                      <button class="text-gray-500 hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <i class="fas fa-trash">Trash</i>
                      </button>
                      
                    </div>
                  </td>
                  <td class = "p-3 text-sm text-gray-700">...</td>
                </tr>
              </>
          )})}
        </tbody>
      </table>
      {showFlow === true && <Logs/>}
      {showFlow === true && <Dropdown/>}
      </div>
      
    </>
  )
}

export default Events