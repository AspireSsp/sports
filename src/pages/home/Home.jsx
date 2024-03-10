import React, { useEffect, useState } from 'react'
import Filter from '../../component/Filter';
import UserCard from '../../component/UserCard';
import { getAllUser } from '../../features/user/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'
const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=> state.auth.users);

    const[location, setLocation] = useState({value:"", label:""});
    const[name, setName] = useState("");
    const[interest, setInterest] = useState('');
    const[distance, setDistance] = useState(500);

    const filterData = {
        location : location?.value,
        name,
        interest,
        distance
    }

    console.log(filterData);

    useEffect(() => {
        dispatch(getAllUser(filterData));
    }, [name, interest, distance, location?.value])
    console.log(users);

    // if(users && users.length<=0){
    //     return(
    //         <Box padding='6' boxShadow='lg' bg='white'>
    //             <SkeletonCircle size='10' />
    //             <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    //         </Box>
    //     )
    // }

    return (
        <div>
            <div className="h-screen overflow-y-scroll bg-white">
                <div className="grid grid-cols-1 mt-16 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
                    <div className="post p-5 lg:p-1 rounded-md">
                        <div className="lg:fixed lg:top-28 lg:left-14 lg:w-3/12 md:fixed md:w-5/12">
                            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
                                <Filter setLocation={setLocation} location={location} setName={setName} setInterest={setInterest} setDistance={setDistance} distance={distance} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 p-4 bg-white" id="posted">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {
                                users.map((user)=>(
                                    <UserCard user={user} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home;