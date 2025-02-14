"use client";
import CharactersCard from "@/components/CharactersCard";
import Pagination from "@/components/Pagination";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Page = () => {
  const [data, setData] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 100);

  useEffect(() => {
    const FetchingApi = async () => {
      try {
        const res = await axios.get(
          `https://swapi.dev/api/people/?page=${page}&search=${debouncedSearch}`
        );
        setData(res.data);
      } catch (error: any) {
        console.error(error);
      }
    };
    FetchingApi();
  }, [page, debouncedSearch]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto p-4 transition-colors duration-300">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Star Wars Characters
        </h1>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <Input
            placeholder="Search for a character..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md"
          />
        </div>

        {/* Character List */}
        {data && (
          <>
            {data.results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.results.map((item: any) => (
                  <CharactersCard key={item?.name} {...item} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No characters found.
              </p>
            )}

            {data.count > 10 && (
              <div className="mt-6 flex justify-center">
                <Pagination
                  totalPages={Math.ceil(data.count / 10)}
                  setPage={setPage}
                  page={page}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
