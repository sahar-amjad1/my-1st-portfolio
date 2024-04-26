"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>Css</li>
        <li>Paython</li>
        <li>typescprit</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>eat</li>
        <li>code</li>
        <li>sleep</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>punjab collage</li>
        <li>Umt</li>
      </ul>
    ),
  },
  {
    title: "life Goals",
    id: "Life Goals",
    content: (
      <ul className="list-disc pl-2">
        <li>Prefect Developer</li>
        <li>Coder</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/img.jpg" alt="Image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
             I have experience
            working with JavaScript, React, next.js, html, css, 
              and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.My journey into coding has just begun, and I m fueled by a desire to continuously improve and innovate. My long-term goal is to become a proficient developer, adept at crafting robust and user-friendly software solutions that address real-world problems.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
  {TAB_DATA.find((t) => t.id === tab)?.content || null}
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
