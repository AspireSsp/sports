import React from 'react'
import {
  Button
} from '@chakra-ui/react'

const Myteams = () => {
  
  return (
    <div>
         <div className="text-gray-700 flex flex-wrap justify-start mt-2 ml-8">
              {/* Buttons for sports */}
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  India
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  India A
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  CSK
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  RCB
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  ENGLAND
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  AUSTRALIA
                </Button>
              </div>
            </div>
    </div>
  )
}

export default Myteams