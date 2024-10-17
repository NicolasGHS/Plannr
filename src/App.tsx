import "./App.css";
import Sidebar from "./components/Sidebar";


function App() {
  
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className="bg-white">
      <Sidebar />
      <p className="">Test</p> 
    </div>
  );
}

export default App;
