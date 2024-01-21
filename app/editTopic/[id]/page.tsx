import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch Topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

//we grab params from dynamic route
const EditTopic = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const {title , description} = topic
  console.log("id", id);
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
