import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://media-content.ccbp.in/website/react-assignment/resources.json"
        );
        setResources(response.data); 
        
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchData();
    console.log(resources);
  }, []);

  
  const isRootRoute = location.pathname === "/";
  console.log(isRootRoute);
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-50">
      <div className='flex flex-col items-center justify-center mt-10'>
         <nav className="flex flex-wrap self-center max-w-full text-sm font-semibold leading-6 text-center whitespace-nowrap text-indigo-950 w-[601px]">
          <NavLink to="/" className="px-16 py-2.5  rounded-none border border-solid border-zinc-200 fill-blue-600 stroke-zinc-200 max-md:px-5">
            Resources
          </NavLink>
          <NavLink to="request" className="px-16 py-2.5 border border-solid bg-zinc-200 bg-opacity-20 border-zinc-200 fill-zinc-200 fill-opacity-20 stroke-zinc-200 max-md:px-5">
            Requests
          </NavLink>
          <NavLink to="user" className="px-16 py-2.5 rounded-none border border-solid bg-zinc-200 bg-opacity-20 border-zinc-200 fill-zinc-200 fill-opacity-20 stroke-zinc-200 max-md:px-5">
            Users
          </NavLink>
        </nav>
        <form className="flex flex-wrap ml-[-400px]  w-[30%] gap-4 py-2 mt-8 text-sm leading-6 whitespace-nowrap bg-white rounded border border-solid border-zinc-200 text-gray-500 text-opacity-60 ">
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
          />
        </form>
        
        </div>
{isRootRoute &&
      (<main className="flex flex-col self-center mt-12 w-full max-w-[1144px] max-md:mt-10 max-md:max-w-full">
        <section className="mt-8 max-md:max-w-full">
          <div className="grid grid-cols-3 gap-5 max-md:flex-col border-none">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="border  bg-white"
              >
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
            ))}
          </div>
        </section>
      </main>)}
      <Outlet/>
    </div>
  );
}
