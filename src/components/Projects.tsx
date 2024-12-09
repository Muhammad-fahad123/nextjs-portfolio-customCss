import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import "../app/styles/projects.css"; // Importing custom CSS for Projects

const data = [
  {
    id: 0,
    title: "Editable Resume Builder",
    desc: "A Typescript-based Editable and Interactive resume built with HTML | CSS | Node.js | Typescript.",
    img: "/project_01.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Interactive Resume",
    desc: "A Typescript-based Interactive Personal resume with HTML and CSS.",
    img: "/project_02.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Avion",
    desc: "A fully Responsive Nextjs ecommerce website using tailwind css and shadcn",
    img: "/project_03.jpg",
    tags: ["Nextjs","Tailwindcss"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
