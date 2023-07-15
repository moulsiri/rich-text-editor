"use client";
import axios from "axios";
import React, { useEffect } from "react";

import { io } from "socket.io-client";
const URL = "http://localhost:4000/";
const socket = io.connect(URL, {
  // autoConnect: false,
});

const Socket = () => {
  useEffect(() => {
    socketInitializer();
  }, []);
  const socketInitializer = async () => {
    let res = await axios.get("/soket/api/");
    // console.log(res);
    socket.on("connect", function () {
      console.log("conneted!!!");
    });
  };
  return <div>Socket</div>;
};

export default Socket;
