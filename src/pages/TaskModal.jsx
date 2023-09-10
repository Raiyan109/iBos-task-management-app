import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginProvider";
import TaskCard from "./TaskCard";

const TaskModal = () => {
    const { setShowModal, user } = useContext(LoginContext)

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [priority, setPriority] = useState('')
    const [titleResult, setTitleResult] = useState('')
    const [descResult, setDescResult] = useState('')
    const [dateResult, setDateResult] = useState('')
    const [priorityResult, setPriorityResult] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleResult(title)
        setDescResult(desc)
        setDateResult(dueDate)
        setPriorityResult(priority)
    }

    return (
        <div className="max-w-2xl mx-auto px-5">
            <div className="overflow-x-hidden overflow-y-auto  h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
                <div className="relative w-full max-w-md px-4 h-full md:h-auto">

                    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                        <div className="flex justify-end p-2">
                            <button
                                onClick={() => setShowModal(false)}
                                type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">

                            <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Title </label>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Description</label>
                                <input
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Due Date</label>
                                <input
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Priority Level</label>
                                <select
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                >
                                    <option value="Urgent">Urgent</option>
                                    <option value="Not Urgent">Not Urgent</option>
                                </select>
                            </div>

                            <button
                                onClick={handleSubmit}
                                type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>

                        </form>
                    </div>
                </div>
            </div>

            <div>
                <h1>Title:  {titleResult}</h1>
                <h1>Description:  {descResult}</h1>
                <h1>Due Date:  {dateResult}</h1>
                <h1>Priority Level:  {priorityResult}</h1>
                <TaskCard
                    titleResult={titleResult}
                    descResult={descResult}
                    dateResult={dateResult}
                    priorityResult={priorityResult}
                />
            </div>

        </div>
    );
};

export default TaskModal;