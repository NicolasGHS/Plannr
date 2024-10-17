import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";



function App() {
  const [open, setOpen] = useState(true);
 
  
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className="bg-white">
      <div className={`${open ? "w-72" : "w-20"} bg-black h-screen p-5 pt-8 relative duration-300`}>
        <p className="text-red-50" onClick={() => setOpen(!open)}>Close</p>
      </div>
      <p className="">Test</p> 
    </div>
  );
}

export default App;
