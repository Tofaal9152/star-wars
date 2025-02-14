"use client";

import IndividualCharacter from "@/components/IndividualCharacter";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const [data, setData] = useState<any>(null);

  const { id } = params;

  useEffect(() => {
    const FetchingApi = async () => {
      try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    FetchingApi();
  }, [id]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto p-6  text-gray-900 dark:text-gray-100 transition-all">
        <h1 className="text-3xl font-bold text-center mb-6">
          Character Details {id}
        </h1>

        {data && <IndividualCharacter {...data} />}
      </div>
    </div>
  );
};

export default Page;
