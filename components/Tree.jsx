"use client";
import Tree from "react-d3-tree";

const orgChart = {
  name: "Branch Manager",
  children: [
    {
      name: "Bank Manager",
    },
    {
      name: "Area Sales Manager",
      children: [
        {
          name: "Foreman",
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
    {
      name: "Operations Manager",
      children: [
        {
          name: "Foreman",
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};
export default function Home() {
  return (
    <main className="w-full h-[100vh] bg-green-300 pt-[12vh]">
      <Tree data={orgChart} />
    </main>
  );
}
