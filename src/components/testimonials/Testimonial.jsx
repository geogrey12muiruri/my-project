import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <section class="bg-white text-slate-950">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">User Testimonials</h2>
            <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">Discover the experiences of our users creating their own designs with our platform</p>
          </div> 
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 font-bold font-mono">
            <figure class="flex flex-col justify-center items-center p-8 text-center  border-b border-gray-200 md:p-12 lg:border-r ">
              <blockquote class="mx-auto mb-8 max-w-2xl text-black ">
                <h3 class="text-lg font-semibold text-gray-900 ">Unleashing my creativity</h3>
                <p class="my-4">"This platform has allowed me to express my creativity in ways I never thought possible. The user-friendly interface and vast array of design options have made creating my own designs a breeze."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img class="w-9 h-9 rounded-full" src="https://example.com/avatars/user1.png" alt="profile picture"/>
                <div class="space-y-0.5 font-medium ">
                  <div>John Doe</div>
                  <div class="text-sm font-light text-gray-500 ">Freelance Designer</div>
                </div>
              </figcaption>    
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center  border-b border-gray-200 md:p-12 ">
              <blockquote class="mx-auto mb-8 max-w-2xl text-black ">
                <h3 class="text-lg font-semibold text-gray-900 ">A game-changer for my business</h3>
                <p class="my-4">"Using this platform to create custom designs for my business has been a game-changer. It's easy to use and the results are professional."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img class="w-9 h-9 rounded-full" src="https://example.com/avatars/user2.png" alt="profile picture"/>
                <div class="space-y-0.5 font-medium ">
                  <div>Jane Smith</div>
                  <div class="text-sm font-light text-gray-500 ">Business Owner</div>
                </div>
              </figcaption>    
            </figure>
          </div>
          
        </div>
        </section>
    </div>
  )
}

export default Testimonial