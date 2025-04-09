// Fully Responsive App.jsx with Sidebar Toggle & Fixed Layout
import React, { useState } from "react";
import {
  Home,
  Ship,
  LayoutTemplate,
  FileArchive,
  Sun,
  Moon,
  Droplet,
  Shield,
  CircleDot,
  MoreHorizontal,
  Shirt,
  Footprints,
  HardHat,
  Flame,
} from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./index.css";
import LightLogo from "./assets/logo-light (1).png";
import DarkLogo from "./assets/logo-dark (1).png";
import LightIcon from "./assets/icon-light (1).png";
import DarkIcon from "./assets/icon-dark (1).png";

const menuItems = [
  { label: "Home", icon: <Home size={20} /> },
  { label: "Vessels", icon: <Ship size={20} /> },
  { label: "Instruments", icon: <LayoutTemplate size={20} /> },
  { label: "Contracts", icon: <FileArchive size={20} /> },
  { label: "Calibration Cylinders", icon: <Droplet size={20} /> },
  { label: "Detectors Tubes", icon: <CircleDot size={20} /> },
  { label: "Alcohol Detectors", icon: <Flame size={20} /> },
  { label: "Other", icon: <MoreHorizontal size={20} /> },
];

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
      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div
          className={`fixed sm:relative top-0 left-0 h-full z-50 sm:z-auto bg-white dark:bg-gray-800 shadow-lg p-4 transition-all duration-300
            ${sidebarOpen ? "w-64" : "w-20"}`}
        >
          <img
            src={sidebarOpen ? logo : smallLogo}
            alt="Logo"
            className="h-10 w-auto transition-all duration-200 mb-6 mx-auto"
          />

          <ul className="space-y-4 relative">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="group relative flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {item.icon}
                {sidebarOpen && <span>{item.label}</span>}
                {!sidebarOpen && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-max whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {item.label}
                  </span>
                )}
              </li>
            ))}

            <li
              className="group relative"
              onMouseEnter={() => setShowPpe(true)}
              onMouseLeave={() => setShowPpe(false)}
            >
              <div className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <Shield size={20} />
                {sidebarOpen && <span>PPE ▾</span>}
              </div>
              {!sidebarOpen && (
                <span className="absolute left-full top-2 ml-3 w-max whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  PPE
                </span>
              )}
              {sidebarOpen && showPpe && (
                <ul className="ml-6 mt-2 space-y-2 text-sm bg-gray-900 text-white p-2 rounded-lg shadow-lg">
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
                    <Shirt size={16} />
                    <span>Parkas</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
                    <Footprints size={16} />
                    <span>Shoes</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
                    <LayoutTemplate size={16} />
                    <span>Boilersuits</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
                    <HardHat size={16} />
                    <span>Helmets</span>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col ml-20 sm:ml-64">
          <header className="bg-white dark:bg-gray-800 p-4 shadow flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button onClick={toggleSidebar} className="p-2 text-xl">
                ☰
              </button>
              <span className="text-sm font-medium hidden sm:block">
                Καλώς ήρθες Κωνσταντίνε 👋
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="text-sm">Prime Products ▼</div>
            </div>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {["Vessels", "Expiring Certificates", "Expired Certificates", "Items to Return"].map((label, index) => (
              <div
                key={index}
                className="bg-blue-700 text-white rounded p-4 shadow-md text-center flex flex-col items-center justify-center gap-2 hover:shadow-lg cursor-pointer"
              >
                <h2 className="text-lg font-semibold">{label}</h2>
                <div className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center font-bold">
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl cursor-move h-[260px]"
                          >
                            {item.date && <p className="text-red-600 font-bold mb-3 text-sm">{item.date}</p>}
                            <p className="mb-2"><strong>Prime Email:</strong> {item.email}</p>
                            <p>Contact Info:</p>
                            <p className="mb-2"><strong>Vessel:</strong> {item.vessel}</p>
                            <p className="mb-2"><strong>Subject:</strong> {item.subject}</p>
                            {item.documents && <p className="mb-2"><strong>Relevant Documents:</strong> {item.documents}</p>}
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

