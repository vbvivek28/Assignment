import { useState } from "react";
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    iconUrl: "",
    tagName: "",
    category: "",
    description: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://media-content.ccbp.in/website/react-assignment/add_resource.json", formData);
      if (response.status === 200) {
        toast.success("Item created successfully!");
      } else {
        toast.error("Failed to create item. Please try again.");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("An error occurred while creating the item.");
    }
  };

  return (
    <div>
        <ToastContainer position="bottom-right"/>
      <form
        className="flex flex-col self-end mt-28 w-80 max-w-full text-sm leading-6 max-md:mt-10 "
        onSubmit={handleSubmit}
      >
        <h1 className="self-center text-3xl leading-none text-center text-indigo-950 mb-3">
          Item Details
        </h1>
        <label htmlFor="title" className="mb-1">
          Item Title
        </label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="p-2 mb-3 outline-none px-4 py-2 mt-2 bg-white rounded-sm border border-solid border-zinc-200 max-md:pr-5 text-indigo-950"
        />

        <label htmlFor="link" className="mb-1">
          Link
        </label>
        <input
          id="link"
          type="url"
          value={formData.link}
          onChange={(e) => handleChange("link", e.target.value)}
          className="p-2 mb-3 outline-none px-4 py-2 mt-2 bg-white rounded-sm border border-solid border-zinc-200 max-md:pr-5 text-blue-600"
        />

        <label htmlFor="iconUrl" className="mb-1">
          Icon URL
        </label>
        <input
          id="iconUrl"
          type="url"
          value={formData.iconUrl}
          onChange={(e) => handleChange("iconUrl", e.target.value)}
          className="p-2 mb-3 outline-none px-4 py-2 mt-2 bg-white rounded-sm border border-solid border-zinc-200 max-md:pr-5 text-blue-600"
        />

        <label htmlFor="tagName" className="mb-1">
          Tag Name
        </label>
        <input
          id="tagName"
          type="text"
          value={formData.tagName}
          onChange={(e) => handleChange("tagName", e.target.value)}
          className="p-2 mb-3 outline-none px-4 py-2 mt-2 bg-white rounded-sm border border-solid border-zinc-200 max-md:pr-5 text-indigo-950"
        />

        <label htmlFor="category" className="mb-1">
          Category
        </label>
        <input
          id="category"
          type="text"
          value={formData.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="p-2 mb-3 outline-none px-4 py-2 mt-2 bg-white rounded-sm border border-solid border-zinc-200 max-md:pr-5 text-indigo-950"
        />

        <label htmlFor="description" className="mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="p-2 mb-3 outline-none px-4 py-2 mt-2 bg-white rounded-sm border border-solid border-zinc-200 max-md:pr-5 text-indigo-950"
          rows={3}
        />

        <button
          type="submit"
          className="overflow-hidden gap-2.5 self-center px-5 py-2 mt-12 font-semibold text-center text-white whitespace-nowrap bg-blue-600 rounded max-md:mt-10"
        >
          CREATE
        </button>
      </form>
    </div>
  );
};

export default ItemDetailsForm;
