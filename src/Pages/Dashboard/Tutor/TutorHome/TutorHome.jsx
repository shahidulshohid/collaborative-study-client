import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { PieChart, Pie, Cell } from "recharts";

const TutorHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: allStudySession = [] } = useQuery({
    queryKey: ["allStudySession"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allStudySession");
      return res.data;
    },
  });
  // pieChart
  const COLORS = {
    approved: "#00C49F",
    pending: "#FFBB28",
    rejected: "#FF0000",
  };
  const statusCount = allStudySession.reduce((acc, session) => {
    acc[session.status] = (acc[session.status] || 0) + 1;
    return acc;
  }, {});

  // Convert to PieChart-compatible format
  const pieChartData = Object.entries(statusCount).map(([key, value]) => ({
    name: key,
    value: value,
  }));
  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-500 mb-6">
        Hi, Welcome {user.displayName}
      </h2>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.name] || "#0088FE"}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default TutorHome;
