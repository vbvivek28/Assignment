import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const UserPage = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://media-content.ccbp.in/website/react-assignment/resources.json"
          );
          setResources(response.data.filter(r=>(r.tag == 'user'))); 
          
        } catch (error) {
          console.error("Error fetching resources:", error);
        }
      };
  
      fetchData();
      console.log(resources);
    }, []);
  
    
  
    return (
      <div className="flex overflow-hidden flex-col bg-zinc-50">
        <main className="flex flex-col self-center mt-12 w-full max-w-[1144px] max-md:mt-10 max-md:max-w-full">
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
        </main>
      </div>
    );
}

export default UserPage
