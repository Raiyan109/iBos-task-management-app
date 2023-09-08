import { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import TaskModal from './TaskModal';
import { LoginContext } from '../context/LoginProvider';

const Home = () => {
    const { showModal, setShowModal } = useContext(LoginContext)
    return (
        <div>
            <Navbar />
            <div
                onClick={() => setShowModal(true)}
                className='flex justify-between items-center p-9 h-8 w-48 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:text-black text-white font-semibold bg-gray-800 hover:bg-gray-300 cursor-pointer'>
                <button className=''>Create Task</button>
                <AiOutlinePlusCircle />
            </div>

            <div>
                {showModal ?
                    (<TaskModal />)

                    :
                    null
                }
            </div>
        </div>
    );
};

export default Home;