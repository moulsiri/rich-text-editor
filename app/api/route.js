// import { Server } from "socket.io";
import { NextResponse } from "next/server";

// const SocketHandler = (req, res) => {
//   if (res.socket.server.io) {
//     console.log("Socket is already running");
//   } else {
//     console.log("Socket is initializing");
//     const io = new Server(res.socket.server);
//     res.socket.server.io = io;
//   }
//   res.end();
// };

// export default SocketHandler;
export async function GET(req, res) {
  console.log(NextResponse);
  return NextResponse.json({
    data: "hellllllll",
  });
  // res.status(200).json({ name: "John Doe" });
}
