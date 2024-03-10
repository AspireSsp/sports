import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>

        <div class="max-w-2xl mx-4 pb-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900">
            <div class="rounded-t-lg h-36 overflow-hidden">
                <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
            </div>
            <div class="mx-auto w-36 h-36 relative -mt-16 border-4 z-0 border-white rounded-full overflow-hidden">
                <img class="object-cover h-36 z-0" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
            </div>
            <div className="text-center my-2">
                <h2 className="font-semibold">{user?.name}</h2>
                <p className="text-gray-500">{user?.description}</p>
                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                    <svg className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path className=""
                            d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    {user?.location?.name}
                </div>
            </div>

        </div>
    </div>
  )
}

export default UserCard


