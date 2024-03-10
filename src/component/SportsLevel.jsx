import React from 'react'

const SportsLevel = ({user}) => {
  return (
    <div>
                 <div className="text-gray-700 flex flex-wrap justify-start mt-2">
              <div className="grid grid-cols-2 text-sm">
                {
                  user?.sports?.map((sport)=>(
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">{sport.name}:</div>
                      <div className="px-4 py-2">{sport.level}</div>
                    </div>
                  ))
                }
               
              </div>
            </div>
    </div>
  )
}

export default SportsLevel