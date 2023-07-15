"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // apiRequest();
  }, []);
  const apiRequest = async () => {
    let res = await axios.get("http://localhost:3000/api");
    console.log(res);
  };
  return <div>Google</div>;
}
