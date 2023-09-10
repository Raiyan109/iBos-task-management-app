
// eslint-disable-next-line react/prop-types
const TaskCard = ({ titleResult,
    // eslint-disable-next-line react/prop-types
    descResult,
    // eslint-disable-next-line react/prop-types
    dateResult,
    // eslint-disable-next-line react/prop-types
    priorityResult }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">

                        <div className="space-y-2">
                            <h1 className="text=slate-800">Title:  {titleResult}</h1>
                            <h1>Description:  {descResult}</h1>
                            <h1>Due Date:  {dateResult}</h1>
                            <h1>Priority Level:  {priorityResult}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;