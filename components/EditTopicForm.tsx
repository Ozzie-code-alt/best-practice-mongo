"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const EditTopicForm = ({ id, title, description }) => {
  const router = useRouter()
  const [newTitle, setNewTitle] = useState(title);
  const [newdescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newdescription }),
      });
      if (!res.ok) {
          throw new Error("Failed TO update Topic")
      }

      router.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="topic Title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newdescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="topic Description"
      />
      <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
