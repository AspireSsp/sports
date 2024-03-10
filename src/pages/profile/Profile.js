import React, { useState } from "react";
import { Button,Input,Modal,ModalBody,ModalOverlay,ModalCloseButton,ModalContent,ModalHeader } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import EditModel from "../../component/EditModel";
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'
import AboutSection from "../../component/AboutSection";


function ProfilePage() {
  const user = useSelector(state=> state.auth.user);

  function formatDate(inputDateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(inputDateString);
    
    return date.toLocaleDateString('en-US', options);
  }


  return (
    <div className="container mx-auto p-5">
      <div className="md:flex md:-mx-2 my-20">
        {/* Left Side */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* Profile Card */}
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <img
                className="h-auto w-full mx-auto rounded-3xl"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
              />
            </div>
            <div class="flex justify-center">
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {user?.name}
              </h1>
            </div>

            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                    <svg className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path className=""
                            d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    {user?.location?.name}
                </div>
            </h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              {user?.description}
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">{formatDate(user?.createdAt)}</span>
              </li>
            </ul>
          </div>
          {/* End of profile card */}
        </div>
        {/* Right Side */}
      

        <div className="w-full md:w-9/12 md:mx-2 mt-5 md:mt-0">
          {/* About Section */}
          <div className="flex justify-end">
            <EditModel />
          </div>
          <div>
            <AboutSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
