import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

const LocationAutocomplete = ({setLocation, location}) => {
  const [selectedOption, setSelectedOption] = useState({value:location?.value, label:location?.label});

  const loadOptions = async (inputValue, callback) => {
    try {
      if (inputValue.length > 0) {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=143268661f204e539610e9696b203a88`
        );

        const locations = response.data.features.map((feature) => ({
          value: feature.properties.formatted,
          label: feature.properties.formatted,
          coordinates: {
            lat: feature.geometry.coordinates[1],
            lon: feature.geometry.coordinates[0],
          },
        }));

        callback(locations);
      }
    } catch (error) {
      console.error('Error fetching location suggestions:', error.message);
      callback([]);
    }
  };

  const handleSelectChange = (option) => {
    setLocation(option);
    setSelectedOption(option);
  };

  return (
    <AsyncSelect
      value={selectedOption}
      onChange={handleSelectChange}
      loadOptions={loadOptions}
      placeholder="Search for a location..."
      isClearable
    />
  );
};

export default LocationAutocomplete;
