import { HomeNav } from "@/components/HomeNav";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Write } from "@/ai/write";
import snarkdown from "snarkdown";
export default function App() {
  const [prompt, setPrompt] = useState({
    topic: "",
    type: 1,
  });

  const [response, setRes] = useState("");
  const [loader, setLoader] = useState(false);
  const generate = async () => {
    setRes("");
    setLoader(true);
    let type = "";
    switch (prompt.type) {
      case "2":
        type = "story";
        break;
      case "3":
        type = "article";
        break;
      case "4":
        type = "dialogue";
        break;
      case "5":
        type = "paragraph";
        break;
      case "6":
        type = "scene";
        break;
      case "7":
        type = "book";
        break;
      default:
        type = "poem";
        break;
    }
    const generatedPrompt = `Please write a ${type} about the ${prompt.topic}`;
    const res = await Write(generatedPrompt);
    //alert(res)
    setLoader(false);
    setRes(snarkdown(res));
  };
  return (
    <main>
      <HomeNav />
      <section className=" bg-slate-400/30 m-10 p-5 rounded-lg h-full-container overflow-auto relative">
        {response ? (
          <section className=" w-[90%] left-0 mx-[5%] bg-slate-100 p-5 rounded-lg text-lg lg:h-[80%] overflow-auto mb-2 ">
            <iframe
              className="w-full h-full bg-transperant"
              title="Parsed Markdown"
              srcDoc={`<!DOCTYPE html><html><head><style>body { margin: 0; padding: 16px; font-family:tahoma; }</style></head><body class="markdown-body">${snarkdown(
                response,
              )}</body></html>`}
            />
          </section>
        ) : !loader ? (
          <div className=" w-full h-content flex  items-center justify-center max-h-[50%] lg:max-h-[80%]  h-full">
            <div>
              <Image
                src={"/gimini.png"}
                width={400}
                height={0}
                className="lg:block hidden"
              ></Image>
              <p className="text-2xl text-center font-bold">
                Please choose a topic
              </p>
            </div>
          </div>
        ) : (
          <div class="w-full h-content flex  items-center justify-center max-h-[50%] lg:max-h-[80%]  h-full">
            <div class="rounded-full h-20 w-20 bg-blue-800 animate-ping"></div>
          </div>
        )}
        <div className="lg:absolute bottom-[2%] w-[90%] left-0 mx-[5%] bg-slate-400 p-5 rounded-lg text-lg  lg:flex lg:justify-evenly lg:h-[100px] lg:items-center">
          <select
            className="bg-white cursor-pointer text-black rounded-md h-full p-2 w-full lg:w-1/4"
            value={prompt.type}
            onChange={(e) => {
              setPrompt({ ...prompt, type: e.target.value });
            }}
          >
            <option value="1">Please choose a topic</option>
            <option value="2">Write a story</option>
            <option value="3">Write an article</option>
            <option value="4">Write an dialogue</option>
            <option value="5">Write an paragraph</option>
            <option value="6">Write an scene</option>
            <option value="7">Write an book</option>
            <option value="8">Write a poem</option>
          </select>
          <br></br>
          <input
            disabled={prompt.type == 1}
            className="bg-white my-5 lg:my-0 text-black rounded-md h-full p-2 w-full lg:w-2/4 disabled:bg-slate-200"
            value={prompt.topic}
            placeholder="Type the topic"
            onChange={(e) => {
              setPrompt({ ...prompt, topic: e.target.value });
            }}
          />
          <button
            className="lg:w-1/5 w-full btn-grad rounded-lg disabled:cursor-auto disabled:shadow-none h-full "
            onClick={generate}
            disabled={prompt.topic == ""}
          >
            Generate
          </button>
        </div>
      </section>
    </main>
  );
}
