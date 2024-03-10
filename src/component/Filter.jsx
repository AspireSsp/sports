import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
  import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Stack,
    SliderMark,
  } from '@chakra-ui/react'
import LocationAutocomplete from './LocationAutocomplete';

const Filter = ({setDistance, distance, setInterest, setName, location, setLocation}) => {
    
      
    return (
        <div>
            <div >
                <h2 className='font-bold text-lg'>Filter</h2>
            </div>
            <div class="mt-2 flex justify-start flex-col">
                <Stack spacing={6}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='name' onChange={(e)=>{setName(e.target.value)}} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Location</FormLabel>
                        <LocationAutocomplete location={location} setLocation={setLocation} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Interest</FormLabel>
                        <Input placeholder='name' onChange={(e)=>{setInterest(e.target.value)}} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Distance: In range of 500KM</FormLabel>
                        <Slider aria-label='slider-ex-1' value={distance} max={500} min={0} onChange={(e)=>{setDistance(e)}}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </FormControl>
                </Stack>
            </div>
        </div>
    )
}

export default Filter