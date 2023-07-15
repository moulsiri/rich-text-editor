import React from "react";
import QuillEditor from "@/components/QuillEditor";

const page = () => {
  return (
    <main className="w-full min-h-[100vh] bg-yellow-300 pt-[15vh] flex justify-between items-start px-8">
      <QuillEditor />
    </main>
  );
};

export default page;
