import useAdmin from "../../../../Hooks/useAdmin";
import useAuth from "../../../../Hooks/useAuth";

const StudentHome = () => {
  const [role] = useAdmin();
  const { user } = useAuth();
  console.log(role);
  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-500 mb-6">
        Hi, Welcome {user.displayName}
      </h2>
      <div>
        <img
          className="w-2/4 h-[200px] object-cover mx-auto rounded-xl"
          src={user?.photoURL}
          alt=""
        />
      </div>
    </div>
  );
};

export default StudentHome;
