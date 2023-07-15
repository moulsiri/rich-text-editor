import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "new_data",
});
connection.connect();

export async function GET(request) {
  let [arr, fields] = await connection.execute("Select * from quill_data");
  return NextResponse.json({
    data: arr,
  });
}

export async function POST(req, request) {
  try {
    let { data } = await req.json();
    let tmp = JSON.stringify(data.ops);
    let id = nanoid();
    // console.log();
    var sql = "INSERT INTO quill_data (id, data) VALUES ?";
    let values = [[id, tmp]];
    let res = await connection.query(sql, [values]);
    return NextResponse.json({
      data: tmp,
    });
  } catch (err) {
    console.log(err);
  }
}

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
