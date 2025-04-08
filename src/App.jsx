import React, { useState } from "react";
import {
  Home,
  Ship,
  FileText,
  FileArchive,
  Sun,
  Moon,
  Droplet,
  Shield,
  CircleDot,
  MoreHorizontal,
  Shirt,
  ShoppingBag,
  HardHat,
  Flame,
} from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./index.css";
import LightLogo from "./assets/logo-light (1).png";
import DarkLogo from "./assets/logo-dark (1).png";
import LightIcon from "./assets/icon-light (1).png";
import DarkIcon from "./assets/icon-dark (1).png";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showPpe, setShowPpe] = useState(false);
  const [cards, setCards] = useState([
    {
      id: "1",
      date: "13/10/2023",
      email: "#14166",
      vessel: "PRIME TEST 7",
      subject: "Expiring Certificates - Notification Email",
    },
    {
      id: "2",
      email: "#14165",
      vessel: "PRIME TEST 6",
      subject: "Expiring Certificates - Notification Email",
    },
    {
      id: "3",
      email: "#14164",
      vessel: "PRIME TEST 6",
      subject: "Expiring Certificates - Notification Email",
      documents: "Quotation No 9890",
    },
    {
      id: "4",
      email: "#14163",
      vessel: "PRIME TEST 1",
      subject: "Expiring Certificates - Notification Email",
    },
    {
      id: "5",
      email: "#14162",
      vessel: "PRIME TEST 1",
      subject: "Expiring Certificates - Notification Email",
      documents: "Order No 9820",
    },
  ]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const logo = darkMode ? DarkLogo : LightLogo;
  const smallLogo = darkMode ? DarkIcon : LightIcon;

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(cards);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setCards(newItems);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-150">
        <div
          className={`$%7BsidebarOpen ? "w-64" : "w-20"%7D bg-white dark:bg-gray-800 shadow-lg p-4 transition-all duration-200`}
        >
          <img
            src={sidebarOpen ? logo : smallLogo}
            alt="Logo"
            className={`${sidebarOpen ? "h-10" : "h-8"} w-auto transition-all duration-200 mb-6 mx-auto`}
          />

          <ul className="space-y-4">
            <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <Home size={20} />
              {sidebarOpen && <span>Home</span>}
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <Ship size={20} />
              {sidebarOpen && <span>Vessels</span>}
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <FileText size={20} />
              {sidebarOpen && <span>Instruments</span>}
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <FileArchive size={20} />
              {sidebarOpen && <span>Contracts</span>}
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <Droplet size={20} />
              {sidebarOpen && <span>Calibration Cylinders</span>}
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <CircleDot size={20} />
              {sidebarOpen && <span>Detectors Tubes</span>}
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <Flame size={20} />
              {sidebarOpen && <span>Alcohol Detectors</span>}
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <MoreHorizontal size={20} />
              {sidebarOpen && <span>Other</span>}
            </li>
            <li className="relative group">
              <div
                className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setShowPpe(!showPpe)}
              >
                <Shield size={20} />
                {sidebarOpen && <span>PPE ▾</span>}
              </div>
              {sidebarOpen && (
                <ul className="ml-6 mt-1 space-y-2 text-sm absolute left-full top-0 hidden group-hover:block bg-white dark:bg-gray-700 shadow p-2 rounded-md z-10">
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                    <Shirt size={16} />
                    <span>Parkas</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                    <ShoppingBag size={16} />
                    <span>Shoes</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                    <FileText size={16} />
                    <span>Boilersuits</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                    <HardHat size={16} />
                    <span>Helmets</span>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col">
          <header className="bg-white dark:bg-gray-800 p-4 shadow flex justify-between items-center transition-colors duration-150">
            <div className="flex items-center space-x-4">
              <button onClick={toggleSidebar} className="p-2 text-xl">
                ☰
              </button>
              <span className="flex items-center space-x-2 text-sm font-medium">
                Καλώς ήρθες Κωνσταντίνε <span className="text-lg">👋</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="text-sm">Prime Products ▼</div>
            </div>
          </header>

          <div className="grid grid-cols-4 gap-4 p-4">
            {["Vessels", "Expiring Certificates", "Expired Certificates", "Items to Return"].map((label, index) => (
              <div
                key={index}
                className="bg-blue-700 text-white rounded p-4 shadow-md text-center flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <h2 className="text-lg font-semibold">{label}</h2>
                <div className="text-white font-bold bg-red-600 w-6 h-6 rounded flex items-center justify-center">
                  {index === 0 ? 2 : 0}
                </div>
                <p className="text-xs">More info</p>
              </div>
            ))}
          </div>

          <div className="p-4">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="cards" direction="horizontal">
                {(provided) => (
                  <div
                    className="flex flex-wrap gap-4"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {cards.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white dark:bg-gray-800 p-4 rounded-none shadow-lg transition duration-300 hover:shadow-xl cursor-move w-[300px]"
                          >
                            {item.date && (
                              <p className="text-red-600 font-bold mb-2">{item.date}</p>
                            )}
                            <p>
                              <strong>Prime Piraeus Email:</strong> {item.email}
                            </p>
                            <p>
                              <strong>Vessel:</strong> {item.vessel}
                            </p>
                            <p>
                              <strong>Subject:</strong> {item.subject}
                            </p>
                            {item.documents && (
                              <p>
                                <strong>Relevant Documents:</strong> {item.documents}
                              </p>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

