import React, { useState, useEffect } from "react";
import RunningProgressBar from "./RunningProgressBar";
import Footer from "../footer/Footer";

const MainPage = () => {
    const [activeSection, setActiveSection] = useState("CRM");

    const [progressTrigger, setProgressTrigger] = useState(false);

    const [progress, setProgress] = useState(0);

    // const [active, setActive] = useState("Monthly");

    const [activePlan, setActivePlan] = useState("Monthly");

    const pricingData = {
        Monthly: [
            {
                title: "Basic",
                price: "1,990",
                billingInfo: "/ organization / month / billed monthly",
                includes: "5 users",
                storage: "24 GB",
                users: "5 users",
            },
            {
                title: "Standard",
                price: "4,990",
                billingInfo: "/ organization / month / billed monthly",
                includes: "50 users",
                storage: "100 GB",
                users: "50 users",
            },
            {
                title: "Premium",
                price: "9,990",
                billingInfo: "/ organization / month / billed monthly",
                includes: "100 users",
                storage: "500 GB",
                users: "100 users",
            },
            {
                title: "Enterprise",
                price: "19,990",
                billingInfo: "/ organization / month / billed monthly",
                includes: "Unlimited users",
                storage: "1 TB",
                users: "Unlimited users",
            },
        ],
        Annually: [
            {
                title: "Basic",
                price: "1,590",
                billingInfo: "/ organization / month / billed annually",
                includes: "5 users",
                storage: "24 GB",
                users: "5 users",
            },
            {
                title: "Standard",
                price: "3,990",
                billingInfo: "/ organization / month / billed annually",
                includes: "50 users",
                storage: "100 GB",
                users: "50 users",
            },
            {
                title: "Premium",
                price: "7,990",
                billingInfo: "/ organization / month / billed annually",
                includes: "100 users",
                storage: "500 GB",
                users: "100 users",
            },
            {
                title: "Enterprise",
                price: "15,990",
                billingInfo: "/ organization / month / billed annually",
                includes: "250 users",
                storage: "1 TB",
                users: "250 users",
            },
        ],
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setProgressTrigger(true);
        setProgress(0);
    };


    useEffect(() => {
        if (progress === 100) {
            const sections = ["CRM", "Collaboration", "Tasks", "Sites", "HR"];
            const currentIndex = sections.indexOf(activeSection);
            const nextSection = sections[(currentIndex + 1) % sections.length];
            handleSectionChange(nextSection);
        }
    }, [progress]);


    const renderSectionContent = () => {
        switch (activeSection) {
            case "CRM":
                return (
                    <section className="flex p-8 ml-5 ">
                        <ul className="ml-28 mt-10 space-y-2 text-gray-700 font-bold">
                            <li>• Leads, Deals, Contacts, Companies</li>
                            <li>• Quotes, Invoices</li>
                            <li>• Online payments</li>
                            <li>• Sales automation</li>
                            <li>• Rules and triggers</li>
                            <li>• Contact center</li>
                            <li>• Marketing</li>
                            <li>• Sales Intelligence</li>
                        </ul>
                        <div className="mb-4">
                            <img
                                src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/crm.1366w.png.webp?1728243915317"
                                alt="CRM Section"
                                className="w-full ml-40 max-w-2xl mx-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </section>

                );
            case "Collaboration":
                return (
                    <section className="flex p-8 ml-5">
                        <ul className="ml-28 mt-10 space-y-2 text-gray-700 font-bold">
                            <li>• Chats, Calls, Video conferencing</li>
                            <li>• Group collaboration</li>
                            <li>• Shared calendars</li>
                            <li>• Workspaces</li>
                            <li>• Notifications</li>
                            <li>• Discussions</li>
                            <li>• Documents</li>
                            <li>• Knowledge base</li>
                        </ul>
                        <div className="mb-4">
                            <img
                                src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/workspace.1366w.png.webp?1728243915317"
                                alt="Collaboration Section"
                                className="w-full ml-40 max-w-2xl mx-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </section>
                );
            case "Tasks":
                return (
                    <section className="flex p-8 ml-5">
                        <ul className="ml-28 mt-10 space-y-2 text-gray-700 font-bold">
                            <li>• Task Management</li>
                            <li>• Subtasks and Dependencies</li>
                            <li>• Gantt Chart View</li>
                            <li>• Workload Planning</li>
                            <li>• Task Templates</li>
                            <li>• Time Tracking</li>
                            <li>• Prioritization & Notifications</li>
                            <li>• Reporting</li>
                        </ul>
                        <div className="mb-4">
                            <img
                                src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/tasks.1366w.png.webp?1728243915317"
                                alt="Tasks & Projects Section"
                                className="w-full ml-40 max-w-2xl mx-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </section>
                );
            case "Sites":
                return (
                    <section className="flex p-8 ml-5">
                        <ul className="ml-28 mt-10 space-y-2 text-gray-700 font-bold">
                            <li>• Website Builder</li>
                            <li>• Templates</li>
                            <li>• SEO Tools</li>
                            <li>• Analytics Integration</li>
                            <li>• Customizable Pages</li>
                            <li>• E-commerce Integration</li>
                            <li>• Online Store Management</li>
                            <li>• Mobile-Friendly Design</li>
                        </ul>
                        <div className="mb-4">
                            <img
                                src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/sites.1366w.png.webp?1728243915317"
                                alt="Sites & Stores Section"
                                className="w-full ml-40 max-w-2xl mx-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </section>
                );
            case "HR":
                return (
                    <section className="flex p-8 ml-5">
                        <ul className="ml-28 mt-10 space-y-2 text-gray-700 font-bold">
                            <li>• Employee Directory</li>
                            <li>• Payroll Management</li>
                            <li>• Time Off & Leave</li>
                            <li>• Recruitment</li>
                            <li>• Performance Tracking</li>
                            <li>• HR Automation</li>
                            <li>• HR Analytics</li>
                            <li>• Benefits & Perks</li>
                        </ul>
                        <div className="mb-4">
                            <img
                                src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/hr.1366w.png.webp?1728243915317"
                                alt="HR & Automation Section"
                                className="w-full ml-40 max-w-2xl mx-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="font-sans">
            <header className="text-center py-8 bg-blue-100">
                <h1 className="text-5xl font-bold">Bitrix24. Your ultimate workspace.</h1>
            </header>
            <nav className="text-2xl flex justify-center space-x-20 bg-gray-100 p-4 font-bold border-b-2">
                <button
                    onClick={() => handleSectionChange("CRM")}
                    className={`text-blue-600 font-semibold  ${activeSection === "CRM" ? "border-blue-600" : ""
                        }`}
                >
                    CRM
                    {activeSection === "CRM" && <RunningProgressBar progress={progress} setProgress={setProgress} />}
                </button>
                <button
                    onClick={() => handleSectionChange("Collaboration")}
                    className={`text-blue-600 font-semibold border-b-2 ${activeSection === "Collaboration" ? "border-blue-600" : ""
                        }`}
                >
                    Collaboration
                    {activeSection === "Collaboration" && <RunningProgressBar progress={progress} setProgress={setProgress} />}
                </button>
                <button
                    onClick={() => handleSectionChange("Tasks")}
                    className={`text-blue-600 font-semibold border-b-2 ${activeSection === "Tasks" ? "border-blue-600" : ""
                        }`}
                >
                    Tasks & Projects
                    {activeSection === "Tasks" && <RunningProgressBar progress={progress} setProgress={setProgress} />}
                </button>
                <button
                    onClick={() => handleSectionChange("Sites")}
                    className={`text-blue-600 font-semibold border-b-2 ${activeSection === "Sites" ? "border-blue-600" : ""
                        }`}
                >
                    Sites & Stores
                    {activeSection === "Sites" && <RunningProgressBar progress={progress} setProgress={setProgress} />}
                </button>
                <button
                    onClick={() => handleSectionChange("HR")}
                    className={`text-blue-600 font-semibold border-b-2 ${activeSection === "HR" ? "border-blue-600" : ""
                        }`}
                >
                    HR & Automation
                    {activeSection === "HR" && <RunningProgressBar progress={progress} setProgress={setProgress} />}
                </button>
            </nav>
            {renderSectionContent()}
            <div className="h-auto w-full bg-blue-400">
                <h1 className="text-6xl p-5 pl-24 text-white-300">PRICING</h1>
            </div>
            <img className="mt-8 ml-32" src="https://www.bitrix24.in/upload/optimizer/converted/images/content_in/banners/prices/cloud-1.1366w.jpg.webp?1728243915317" width="80%" height="80%" alt="" srcset="" />
            {/* <h1 className=" items-center w-32 font-bold text-white bg-black  ">Save up to 20%</h1> */}
            <div className="flex flex-col items-center mt-12">
                <div className="flex border-2 border-blue-500 rounded-md overflow-hidden w-60 ">
                    <button
                        className={`flex-1 py-2 px-4 ${activePlan === "Monthly"
                            ? "bg-blue-500 text-white"
                            : "bg-white text-blue-500"
                            }`}
                        onClick={() => setActivePlan("Monthly")}
                    >
                        Monthly
                    </button>
                    <button
                        className={`flex-1 py-2 px-4 ${activePlan === "Annually"
                            ? "bg-blue-500 text-white"
                            : "bg-white text-blue-500"
                            }`}
                        onClick={() => setActivePlan("Annually")}
                    >
                        Annually
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2  mt-12">
                {pricingData[activePlan].map((plan, index) => (
                    <div
                        key={index}
                        className="w-80 border-2 border-blue-300 rounded-lg shadow-md p-6"
                    >
                        <h3 className="text-xl font-semibold text-blue-500">
                            {plan.title}
                        </h3>
                        <p className="text-4xl font-bold text-gray-800 mt-4">
                            Rs. {plan.price}
                        </p>
                        <p className="text-sm text-gray-500">
                            {plan.billingInfo}
                        </p>
                        <div className="bg-blue-100 text-blue-500 text-sm rounded-full px-4 py-1 inline-block mt-4">
                            includes {plan.includes}
                        </div>
                        <button className="w-full bg-blue-500 text-white font-medium text-lg py-2 rounded-lg mt-4">
                            BUY
                        </button>
                        <div className="mt-6 border-t border-gray-300 pt-4">
                            <div className="flex items-center space-x-2 text-gray-600">
                                <span className="material-icons text-blue-500">
                                    storage
                                </span>
                                <p className="text-sm">{plan.storage}</p>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600 mt-2">
                                <span className="material-icons text-blue-500">
                                    group
                                </span>
                                <p className="text-sm">{plan.users}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default MainPage;
