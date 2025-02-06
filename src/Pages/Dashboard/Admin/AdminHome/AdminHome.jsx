import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { SiStudyverse } from "react-icons/si";
import { GiExplosiveMaterials } from "react-icons/gi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import useAuth from "../../../../Hooks/useAuth";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  //all users
  const { data: allUsers = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //all study session
  const { data: allStudySession = [] } = useQuery({
    queryKey: ["allStudySession"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allStudySession");
      return res.data;
    },
  });
  //all materials
  const { data: allMaterials = [] } = useQuery({
    queryKey: ["allMaterials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allMaterials");
      return res.data;
    },
  });
  // chart related
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-500 mb-6">Hi, Welcome {user?.displayName}</h2>
      <div className="flex justify-center items-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <GiExplosiveMaterials size={25} />
            </div>
            <div className="stat-title">All materials</div>
            <div className="stat-value">{allMaterials.length}</div>
            <div className="stat-desc">↗︎ 45 (6%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">All Users</div>
            <div className="stat-value">{allUsers.length}</div>
            <div className="stat-desc">↗︎ 40 (2%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <SiStudyverse size={30} />
            </div>
            <div className="stat-title">All Study Session</div>
            <div className="stat-value">{allStudySession.length}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>

      {/* chart related  */}
      <div className="flex justify-center items-center mt-6">
      <BarChart
        width={500}
        height={300}
        data={allStudySession}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Bar
          dataKey="registrationFee"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {allStudySession?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
          ))}
        </Bar>
      </BarChart>
      </div>
    </div>
  );
};

export default AdminHome;
