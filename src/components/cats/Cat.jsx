import React from 'react'

const Cat = () => {
  return (
    <div class="flex items-center justify-center mr-10 p-4 mt-0">
      <div class="flex flex-col justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Join Our Tailor-Made Platform</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Are you a tailor looking for freelance opportunities? Join our platform and start creating your own designs today.</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Tailor Sign Up
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
    </div>
  )
}

export default Cat