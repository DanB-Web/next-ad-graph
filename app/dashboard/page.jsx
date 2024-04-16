"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import accessGraphApi from "@/utils/accessGraphApi";

const DashboardPage = () => {
  const session = useSession();
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    const getGraphData = async () => {
      try {
        const res = await accessGraphApi(session.data.accessToken);
        setGraphData(res);
      } catch (e) {
        console.error(e);
      }
    };
    if (session?.data) {
      getGraphData();
    }
  }, [session]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Dashboard Page</h1>
      <p>Session status: {session?.status || "No data"}</p>
      <p className="text-xl font-bold">Session Data</p>
      {session?.data ? (
        <div>
          <p>Session expires: {session.data.expires}</p>
          <p>Session user: {session.data.user.name}</p>
        </div>
      ) : (
        <p>No data</p>
      )}
      <p className="text-xl font-bold">Graph API Data</p>
      {graphData ? (
        <div className="p-3 bg-slate-100 rounded-xl">
          <pre>{JSON.stringify(graphData, null, 2)}</pre>
        </div>
      ) : (
        <p>No graph data</p>
      )}
    </div>
  );
};

export default DashboardPage;
