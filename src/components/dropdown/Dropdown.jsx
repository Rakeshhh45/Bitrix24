import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const DropdownWithIcons = () => {

    const [activeCategory, setActiveCategory] = useState("CRM");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <div className="relative">
            <button
                className="flex items-center text-gray-800 font-semibold hover:text-gray-800"
                onClick={toggleDropdown}
            >
                PRODUCT
                <ChevronDownIcon
                    className={`w-5 h-5 ml-1 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            {isDropdownOpen &&  (
                <div className=" absolute right-10 left-0 top-full mt-9 w-[1000px] bg-white border rounded-lg shadow-lg flex z-50 ">
                    <div className="w-1/3 bg-blue-50 p-4">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveCategory(category.title)}
                                className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer ${activeCategory === category.title
                                    ? "bg-blue-500 text-white"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                <img src={category.icon} alt={category.title} className="w-8 h-8" />
                                <span className="font-bold">{category.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="w-2/3 p-6 grid grid-cols-2 gap-6 overflow-hidden">
                        {details[activeCategory]?.map((item, index) => (
                            <div key={index} className="flex flex-col space-y-2">
                                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
const categories = [
    {
        title: "CRM",
        icon: "https://cdn-icons-png.flaticon.com/128/9097/9097267.png",

    },
    {
        title: "Tasks & Projects",
        icon: "https://cdn-icons-png.flaticon.com/128/9186/9186677.png",
    },
    {
        title: "Collaboration",
        icon: "https://cdn-icons-png.flaticon.com/128/1283/1283342.png",
    },
    {
        title: "Sites & Stores",
        icon: "https://cdn-icons-png.flaticon.com/128/3514/3514491.png",
    },
    {
        title: "HR & Automation",
        icon: "https://cdn-icons-png.flaticon.com/128/7966/7966941.png",
    },
    {
        title: "Copilot",
        icon: "https://cdn-icons-png.flaticon.com/128/8088/8088469.png",
    },
];
const details = {
    "CRM": [
        { title: "Sales Management", description: "Manage leads, deals, contacts, and pipelines." },
        { title: "Contact Center", description: "Omnichannel communication tools for CRM." },
        { title: "Sales Team Collaboration", description: "Chat, tasks, calendars, and documents." },
        { title: "Sales Enablement", description: "Invoices, payments, e-signature, and more." },
        { title: "Analytics & Reports", description: "Analyze sales performance and data." },
        { title: "Mobile CRM", description: "Access CRM tools on the go." },
    ],
    "Tasks & Projects": [
        { title: "Task Management", description: "Track and organize your tasks." },
        { title: "Project Collaboration", description: "Team tools to streamline projects." },
        { title: "Sales Team Collaboration", description: "Chat, tasks, calendars, and documents." },
        { title: "Sales Enablement", description: "Invoices, payments, e-signature, and more." },
        { title: "Analytics & Reports", description: "Analyze sales performance and data." },
        { title: "Mobile CRM", description: "Access CRM tools on the go." },
    ],
    "Collaboration": [
        { title: "Task Management", description: "Track and organize your tasks." },
        { title: "Project Collaboration", description: "Team tools to streamline projects." },
        { title: "Sales Team Collaboration", description: "Chat, tasks, calendars, and documents." },
        { title: "Sales Enablement", description: "Invoices, payments, e-signature, and more." },
        { title: "Analytics & Reports", description: "Analyze sales performance and data." },
        { title: "Mobile CRM", description: "Access CRM tools on the go." },
    ],
    "Sites & Stores": [
        { title: "Task Management", description: "Track and organize your tasks." },
        { title: "Project Collaboration", description: "Team tools to streamline projects." },
        { title: "Sales Team Collaboration", description: "Chat, tasks, calendars, and documents." },
        { title: "Sales Enablement", description: "Invoices, payments, e-signature, and more." },
        { title: "Analytics & Reports", description: "Analyze sales performance and data." },
        { title: "Mobile CRM", description: "Access CRM tools on the go." },
    ],
    "HR & Automation": [
        { title: "Task Management", description: "Track and organize your tasks." },
        { title: "Project Collaboration", description: "Team tools to streamline projects." },
        { title: "Sales Team Collaboration", description: "Chat, tasks, calendars, and documents." },
        { title: "Sales Enablement", description: "Invoices, payments, e-signature, and more." },
        { title: "Analytics & Reports", description: "Analyze sales performance and data." },
        { title: "Mobile CRM", description: "Access CRM tools on the go." },
    ],
    "Copilot": [
        { title: "Task Management", description: "Track and organize your tasks." },
        { title: "Project Collaboration", description: "Team tools to streamline projects." },
        { title: "Sales Team Collaboration", description: "Chat, tasks, calendars, and documents." },
        { title: "Sales Enablement", description: "Invoices, payments, e-signature, and more." },
        { title: "Analytics & Reports", description: "Analyze sales performance and data." },
    ]

};

export default DropdownWithIcons;
