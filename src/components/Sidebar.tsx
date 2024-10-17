import { useState } from "react";


function Sidebar() {
    const [open, setOpen] = useState(true);


    return (
        <div className={`${open ? "w-72" : "w-20"} bg-[#1a1b23] h-screen p-5 pt-8 relative duration-300`}>
            <p className="text-red-50" onClick={() => setOpen(!open)}>Close</p>
        </div>
    )
}

export default Sidebar;