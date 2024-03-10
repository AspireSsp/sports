import React from 'react'
import {
  Button
} from '@chakra-ui/react'
const SportsInfo = ({user}) => {
  return (
    <div>
            <div className="text-gray-700 flex flex-wrap justify-start mt-2 ml-8">
              {/* Buttons for sports */}
                {
                  user?.sports?.map((sport)=>(
                    <div className="mr-4 mb-4">
                      <Button colorScheme="black" variant="outline">
                        {sport?.name}
                      </Button>
                    </div>
                  ))
                }
              
            </div>
    </div>
  )
}

export default SportsInfo