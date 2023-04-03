import React,{useState} from 'react'
import {Pipelines} from './pipelines.js'

const Events = () => {
  
  const [data, setData] = useState(Pipelines)
  console.log(data);

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
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-blue-500">example_bash_operator</span>
                  </label>
                  </td>
                  <td class = "p-3 text-sm text-gray-700">airflow</td>
                  <td class = "p-3 text-sm text-gray-700"><div class="w-8 h-8 rounded-full border-2 border-gray-500"></div></td>
                  <td class = "p-3 text-sm text-gray-700"><span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">@daily</span></td>
                  <td class = "p-3 text-sm text-blue-700">2020-10-26, 21:08:04</td>
                  <td class = "p-3 text-sm text-gray-700"><div class="w-8 h-8 rounded-full border-2 border-gray-500"></div></td>
                  <td class = "p-3 text-sm text-gray-700">
                    <div class="flex items-center space-x-4">
                      <button class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-play">Play</i>
                      </button>
                      <button class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-pause">Pause</i>
                      </button>
                      <button class="text-gray-500 hover:text-red-500">
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
      </div>
    </>
  )
}

export default Events