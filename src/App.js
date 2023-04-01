import React from 'react'
import './index.css';


const App = () => {
  return (
    <>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cloud Hive<span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">PRO</span></span></h1>
      <table class="w-full table-auto">
        <thead class = "bg-gray-50 border-b-2 border-gray-200">
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
          <tr class = "bg-white">
            <td class="p-3">
              <label class="relative inline-flex items-center mb-4 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer"></input>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-blue-500">example_bash_operator</span>
              </label>
            </td>
            <td class = "p-3 text-sm text-gray-700">airflow</td>
            <td class = "p-3 text-sm text-gray-700"><div class="w-8 h-8 rounded-full border-2 border-gray-500"></div></td>
            <td class = "p-3 text-sm text-gray-700"><span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">0 0 * * *</span></td>
            <td class = "p-3 text-sm text-blue-700">2020-10-26, 21:08:11</td>
            <td class = "p-3 text-sm text-gray-700"><div class="w-8 h-8 rounded-full border-2 border-gray-500"></div></td>
            <td class = "p-3 text-sm text-gray-700">
              <div class="flex items-center space-x-4">
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="fas fa-play"></i>
                </button>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="fas fa-pause"></i>
                </button>
                <button class="text-gray-500 hover:text-red-500">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
            <td class = "p-3 text-sm text-gray-700">...</td>
          </tr>
          <tr class = "bg-gray-50">
            <td class="p-3">
              <label class="relative inline-flex items-center mb-4 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer"></input>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-blue-500">example_bash_operator</span>
              </label>
            </td>
            <td class = "p-3 text-sm text-gray-700">airflow</td>
            <td class = "p-3 text-sm text-gray-700"><div class="w-8 h-8 rounded-full border-2 border-gray-500"></div></td>
            <td class = "p-3 text-sm text-gray-700"><span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-gray-300 rounded-lg bg-opacity-50">* / 1 ****</span></td>
            <td class = "p-3 text-sm text-blue-700">2020-10-23, 14:08:11</td>
            <td class = "p-3 text-sm text-gray-700"><div class="w-8 h-8 rounded-full border-2 border-gray-500"></div></td>
            <td class = "p-3 text-sm text-gray-700">
              <div class="flex items-center space-x-4">
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="fas fa-play"></i>
                </button>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="fas fa-pause"></i>
                </button>
                <button class="text-gray-500 hover:text-red-500">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
            <td class = "p-3 text-sm text-gray-700">...</td>
          </tr>
          <tr class = "bg-white">
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
                  <i class="fas fa-play"></i>
                </button>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="fas fa-pause"></i>
                </button>
                <button class="text-gray-500 hover:text-red-500">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
            <td class = "p-3 text-sm text-gray-700">...</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}


export default App

