import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const ViewAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  console.log(users);

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

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`users/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin now !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .then((error) => {
        console.log(error.data);
      });
  };
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-xl md:text-3xl">All Users</h2>
        <h2 className="text-xl md:text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table md:ble-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Image</th>
              <th className="text-lg hidden md:block">Email</th>
              <th className="text-lg">Role</th>
              <th className="text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th></th>
                <th>
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    src={user.photo}
                    alt=""
                  />
                </th>
                <td className="hidden md:block">{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        handleMakeAdmin(user);
                      }}
                      className="bg-blue-500 px-2 md:px-4 py-1 rounded-lg text-white"
                    >
                      <FaRegEdit size={20}/>
                    </button>
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
