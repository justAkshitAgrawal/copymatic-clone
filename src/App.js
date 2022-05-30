import React from "react";
import { BsChatSquareFill } from "react-icons/bs";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-[#F1F4F8] font-jakarta">
      <Header />
      <Banner />
      <div className="flex flex-col items-center mt-8 space-y-4">
        <h1 className="text-4xl font-extrabold">
          👋🏻 Hey, what will you create today?
        </h1>
        <h1>
          Get started by selecting the content type from the options below
        </h1>
      </div>
      <Hero />
      <div className="bg-[#2e17e7] rounded-full p-4 flex items-center w-fit fixed bottom-5 right-5 cursor-pointer">
        <BsChatSquareFill className="text-white w-7 h-7" />
      </div>
    </div>
  );
}

export default App;
