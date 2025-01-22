import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";

const ViewAllUsers = () => {
  const [search, setSearch] = useState("");

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?search=${search}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (e, id) => {
    const data = {
      role: e,
    };
    axiosSecure.patch(`users/${id}`, data).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Role updated is successfully !`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // reset the data 
  const resetFn = () => {
    setSearch('')
  }


  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-xl md:text-3xl">All Users</h2>
        <h2 className="text-xl md:text-3xl">Total Users: {users.length}</h2>
      </div>

      <div className="flex justify-center mt-3 mb-4 p-1 overflow-hidden focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
        <input
          className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent rounded-l-md border-2"
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="name or email"
          aria-label="name or email"
        />

        <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-500 rounded-r-md hover:bg-green-500 focus:bg-green-600 focus:outline-none">
          Search
        </button>
        <button
          onClick={resetFn}
          className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-500 rounded-md ml-3 hover:bg-green-500 focus:bg-green-600 focus:outline-none"
        >
          Reset
        </button>
      </div>

      <div className="overflow-x-auto bg-gray-100 rounded-xl">
        <table className="table md:ble-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Image</th>
              <th className="text-lg hidden md:block">Name</th>
              <th className="text-lg">Role</th>
              <th className="text-lg hidden md:block">Email</th>
              <th className="text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <th></th>
                <th>
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    src={user.photo}
                    alt=""
                  />
                </th>
                <td className="hidden md:block font-semibold">{user.name}</td>
                <td className="uppercase font-semibold ">{user.role}</td>
                <td className="hidden md:block font-semibold">{user.email}</td>
                <td>
                  <div className="flex gap-3">
                    <div className="bg-blue-500 font-semibold rounded-lg border text-white border-gray-400 px-2 py-1">
                      <select
                        className="bg-blue-500 text-white"
                        onChange={(e) =>
                          handleMakeAdmin(e.target.value, user._id)
                        }
                        defaultValue={user.role || " Role update"}
                      >
                        <option value="admin">Admin</option>
                        <option value="tutor">Tutor</option>
                        <option value="student">Student</option>
                      </select>
                    </div>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-400 px-2 md:px-4 py-1 text-white rounded-lg"
                    >
                      <MdOutlineDelete size={25} />
                    </button>
                  </div>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllUsers;
