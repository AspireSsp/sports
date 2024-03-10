import React from 'react'
import PersonalInfo from './PersonalInfo'
import SportsInfo from './SportsInfo'
import SportsLevel from './SportsLevel'
import Myteams from './Myteams'
import { useDispatch, useSelector } from 'react-redux';

const AboutSection = () => {
  const user = useSelector(state=> state.auth.user);
  return (
    <div>
         <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
          <PersonalInfo user={user} />

            {/* Sports Section */}
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-4">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Sports</span>
            </div>
            {/* Sports buttons */}
            <SportsInfo user={user}/>
            {/* Levels Section */}
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-4">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Levels</span>
            </div>
            {/* Levels information */}
                <SportsLevel user={user}/>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-4">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Teams</span>
            </div>
                <Myteams user={user}/>
          </div>
    </div>
  )
}

export default AboutSection