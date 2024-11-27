import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

interface Resource {
  id: number;
  title: string;
  icon_url: string;
  link: string;
  description: string;
  category: string;
  tag: string;
}

const RequestPage = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Resource[]>(
          "https://media-content.ccbp.in/website/react-assignment/resources.json"
        );
        setResources(response.data.filter((r) => r.tag === "user"));
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchData();
  }, []);
  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-50">
      <div className="flex flex-col items-center justify-center mt-10">
       
        <form className="flex flex-wrap ml-[-400px] w-[30%] gap-4 py-2 mt-8 text-sm leading-6 whitespace-nowrap bg-white rounded border border-solid border-zinc-200 text-gray-500 text-opacity-60">
          <img
            loading="lazy"
            src=""
            alt=""
            className="object-contain shrink-0 my-auto w-3 aspect-square fill-indigo-950"
          />
          <label htmlFor="search" className="sr-only">
            Search resources
          </label>
          <input
            type="search"
            id="search"
            className="flex-auto opacity-80 max-md:max-w-full bg-transparent border-none outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <main className="flex flex-col self-center mt-12 w-full max-w-[1144px] max-md:mt-10 max-md:max-w-full">
        <section className="mt-8 max-md:max-w-full">
          <div className="grid grid-cols-3 gap-5 max-md:flex-col border-none">
           
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="border bg-white">
                  <Card
                    title={resource.title}
                    icon_url={resource.icon_url}
                    link={resource.link}
                    description={resource.description}
                    category={resource.category}
                    tag={resource.tag}
                    id={resource.id}
                  />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No resources found for "{searchQuery}"
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RequestPage;
