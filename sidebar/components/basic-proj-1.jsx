
// unpolished attempt for a side bar with different approach
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="w-24 bg-red-300 h-full flex flex-col space-y-4 py-4">
            <Link to="/" className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>I-1</span>
        </Link>
            <Link to="/route2" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>I-2</span>
        </Link>
        <Link to="/route3" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>I-3</span>
        </Link>
        <Link to="/route4" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>I-4</span>
        </Link>

        <Link to="/route5" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>I-5</span>
        </Link>
        </div>
    );
}

export function Circuit() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="/route2" element={<Page2 />} />
                    <Route path="/route3" element={<Page3 />} />
                    <Route path="/route4" element={<Page4 />} />
                    <Route path="/route5" element={<Page5 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Layout() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 bg-blue-300 p-4">
                <Outlet />
            </div>
        </div>
    );
}

function Landing() {
    return <div></div>;
}

function Page2() {
    return <div>page 2 content</div>;
}

function Page3() {
    return <div>page 3 content</div>;
}

function Page4() {
    return <div>page 4 content</div>;
}

function Page5() {
    return <div>page 5 content</div>;
}

export function Classname1() {
    const [click, setClick] = useState(true);
    const [open, setOpen] = useState(true); // You need this state for controlling `open`

    return (
        <div className="flex h-screen">
            <div className={`${click ? "w-96" : "w-8"} transition-all duration-1000 bg-red-300 h-screen overflow-hidden`}>
                <button onClick={() => setClick((prevClick) => !prevClick)}>Toggle</button>

                {open && (<div className="flex items-start justify-between">
                         <div>
                             <img src={"/logo.png"} className="w-10 h-10 rounded" alt="Logo" />
                         </div>
                    </div>
                )}
                <div>
                    <Circuit/>
                </div>
            </div>
        </div>
    );
}


