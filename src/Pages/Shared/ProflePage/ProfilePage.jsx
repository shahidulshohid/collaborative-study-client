import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";

const ProfilePage = () => {
    const {user} = useAuth()
    const role = useAdmin()
    console.log(role)
    console.log(user)
    return (
        <div className="flex justify-center items-center mt-100">
            <div>
                <img className="w-24 h-24 rounded-full" src={user?.photoURL} alt="" />
                <button className="text-center bg-green-300 text-500 px-4 text-green-500 rounded-full mt-2">{role}</button>
                <div>
                <div className="flex justify-around items-center gap-12">
                <h3>{user?.displayName}</h3>
                <p>{user?.email}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;