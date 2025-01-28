import useAdmin from "../../../../Hooks/useAdmin";
import useAuth from "../../../../Hooks/useAuth";

const StudentDashboard = () => {
    const [role] = useAdmin()
    const {user} = useAuth()
    console.log(role)
    return (
        <div>
            <h3 className="text-center text-gray-600 text-xl md:text-3xl lg:text-4xl font-bold mt-12 mb-5 uppercase">Welcome to <strong className="text-blue-500">{role}</strong> Dashboard</h3>
            <div>
                <img className="w-2/4 h-[200px] object-cover mx-auto rounded-xl" src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default StudentDashboard;