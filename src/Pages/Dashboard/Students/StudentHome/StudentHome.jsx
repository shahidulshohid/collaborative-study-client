import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../../Hooks/useAdmin";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { BsBook } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { GiExplosiveMaterials } from "react-icons/gi";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const StudentHome = () => {
  const [role] = useAdmin();
  const { user } = useAuth();

  // view book 
  const axiosPublic = useAxiosPublic();
  const { data: session = [] } = useQuery({
    queryKey: ["session", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedSessions/${user?.email}`);
      return res.data;
    },
  });
  // manage personal notes 
  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allNotes/${user?.email}`);
      return res.data;
    },
  });
  // view all study materials 
  const { data: bookedSession = [] } = useQuery({
    queryKey: ["bookedSession", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedSessions/${user?.email}`);
      return res.data;
    },
  });

  // chart
   // Chart: Handle gradient offset
   const gradientOffset = () => {
    const dataMax = Math.max(...session.map((i) => i.registrationFee)); // Adjust according to available data
    const dataMin = Math.min(...session.map((i) => i.registrationFee));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  // Ensure the session data is valid for charting
  const chartData = session.map((s) => ({
    registrationFee: s.registrationFee, // or other metric you want on X-axis
    uv: s.uv, // the data you want to plot on the Y-axis
  }));


  console.log(session);
  console.log("===============",notes);
  console.log('view all materials',bookedSession)
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#3939c8] mb-6">
        Dashboard
      </h2>
      {/* <div className="w-2/4 h-[100px] bg-green-500">
        <img
          className="object-cover h-full w-[100px] mx-auto"
          src={user?.photoURL}
          alt=""
        />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="text-center border-2 rounded-lg p-4">
      <div className="flex justify-center">
      <h2 className=" text-secondary"><BsBook size={50}/></h2>
      </div>
      <div>
      <h3 className="text-xl font-semibold">Total Booked Session</h3>
      <h2 className="text-5xl font-bold">{session?.length}</h2>
      <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>
      </div>
      <div className="text-center border-2 rounded-lg p-4">
      <div className="flex justify-center">
      <h2 className=" text-secondary"><CgNotes size={50}/></h2>
      </div>
      <div>
      <h3 className="text-xl font-semibold">Total Personal Notes</h3>
      <h2 className="text-5xl font-bold">{notes?.length}</h2>
      <div className="stat-desc">↗︎ 400 (12%)</div>
      </div>
      </div>
      <div className="text-center border-2 rounded-lg p-4">
      <div className="flex justify-center">
      <h2 className=" text-secondary"><GiExplosiveMaterials size={50}/></h2>
      </div>
      <div>
      <h3 className="text-xl font-semibold">Total Total Materials</h3>
      <h2 className="text-5xl font-bold">{bookedSession?.length}</h2>
      <div className="stat-desc">↗︎ 400 (12%)</div>
      </div>
      </div>
      </div>
      {/* chart  */}
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="registrationFee" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="green" stopOpacity={1} />
                <stop offset={off} stopColor="red" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentHome;
