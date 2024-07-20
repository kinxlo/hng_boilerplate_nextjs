"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Tab from "./tab";

const WaitListTabFeature: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % Tab.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activateTab = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <section className="mx-auto w-[774px] max-[801px]:w-full">
      <div className="flex items-center justify-between max-[801px]:flex-col">
        <ul className="flex flex-col gap-[32px] max-[801px]:flex-row">
          {Tab.map((item, index) => (
            <li
              key={index}
              onClick={() => activateTab(index)}
              className={`flex h-[72px] w-[320px] cursor-pointer items-center gap-4 rounded-[8px] border bg-[#FAFAFA] p-[24px] max-[801px]:w-[183px] ${index === currentIndex ? "border-[#F97316]" : ""}`}
            >
              <div
                className={`rounded-[50%] bg-[#CBD5E1] p-2 ${index === currentIndex ? "bg-[#F97316]" : ""}`}
              >
                {item.svg}
              </div>
              <p
                className={`font-600 text-[20px] text-[#525252] max-[801px]:text-[18px] ${index === currentIndex ? "font-semibold" : ""}`}
              >
                {item.svgTitle}
              </p>
            </li>
          ))}
        </ul>
        <div className="w-[291px] max-[801px]:hidden">
          <Image
            src={Tab[currentIndex].image}
            width={291}
            height={344}
            alt={Tab[currentIndex].imageTitle}
          />
          <div className="space-y-[24px]">
            <h2 className="text-[30px] font-[600] text-[#525252]">
              {Tab[currentIndex].imageTitle}
            </h2>
            <p className="font-500 text-[18px] text-[#525252]">
              {Tab[currentIndex].imageContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitListTabFeature;
