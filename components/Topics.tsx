"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      const response = await fetch("/api/topics"); // Adjust the URL to your API endpoint
      const data = await response.json();
      setTopics(data.topic);
    }

    fetchTopics();
  }, []);

  return (
    <>
      {topics.map((topic, index) => (
        <div
          key={index}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
