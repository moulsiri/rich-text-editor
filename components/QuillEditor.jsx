"use client";

import { useState, useEffect } from "react";
/**
 * Material ui
 */
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

/**
 * Quill Editor
 */
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import katex from "katex";
import parse from "html-react-parser";
import "katex/dist/katex.min.css";
import axios from "axios";
window.katex = katex;

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["link", "image", "video"],
    ["formula"],
  ],
};
const read = {
  toolbar: false,
};
export default function Home() {
  const [open, setOpen] = useState(false);
  const [delta, setDelta] = useState("");
  const [html, setHtml] = useState("");

  const changeHandler = (e, v, g, h) => {
    setHtml(parse(e));
    setDelta(h.getContents());
    // console.log(h.getContents());
  };
  const clickHandler = async () => {
    try {
      let res = await axios.post(
        "http://localhost:3000/text-editor/api",
        {
          data: delta,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const PreviewHandler = () => {
    setOpen(true);
    // parsedReact = parse(html);
    // console.log(html);
    // console.log(parsedReact);
  };

  const getData = async () => {
    try {
      let { data: res } = await axios.get(
        "http://localhost:3000/text-editor/api"
      );
      // console.log(res);
      if (res.data) {
        let tmp = {
          ops: res.data[3]?.data,
        };
        setDelta(tmp);
      }
    } catch (err) {
      console.dir(err);
    }
  };
  return (
    <>
      <div className="container w-[45%]">
        <ReactQuill
          className="bg-white"
          theme="snow"
          modules={modules}
          onChange={changeHandler}
        />
        <button
          className="bg-pink-400 text-white px-4 py-2 mt-8"
          onClick={clickHandler}
        >
          Save
        </button>
        <button
          className="bg-green-900 text-white px-4 py-2 ml-8"
          onClick={PreviewHandler}
        >
          Preview
        </button>
      </div>

      <div className="container w-[45%] p-8">
        <ReactQuill
          style={{ backgroundColor: "#fff" }}
          theme="snow"
          value={delta}
          modules={read}
          readOnly={true}
        />
        <button
          className="bg-blue-900 text-white px-4 py-2 mt-8"
          onClick={getData}
        >
          Fetch Data
        </button>
      </div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <Box
          className="w-[80vw] min-h-[50vh] bg-white absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] p-8 overflow-auto"
          suppressContentEditableWarning={true}
        >
          {html}
        </Box>
      </Modal>
    </>
  );
}
