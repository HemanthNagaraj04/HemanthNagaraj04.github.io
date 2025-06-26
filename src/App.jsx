import About from "./components/About"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import ProjectDisplay from "./components/ProjectDisplay"
import Skills from "./components/Skills"
import { useState } from "react"

import NewsApp from "./assets/News App.png"
import EVimg from "./assets/EV-web.png"
import MovieBrowser from "./assets/MovieBrowser.png"
import Calimg from "./assets/calorietracker.png"
import chatbot from "./assets/chatbot.png"
import Contact from "./components/Contact"

const projects = [
  { name: "News App", img: NewsApp, description: (<> A modern and responsive news web application built with React, Vite, and Tailwind CSS, integrating Auth0 for authentication and CNews API for real-time news fetching.<br/><strong>(The website will take some time to load, kindly wait for the server to start)</strong></>),
    github:"https://github.com/HemanthNagaraj04/NewsApp-CANTILEVER",
    web:"https://newsapp-cantilever.onrender.com",
   },
  { name: "EV Webpage", img: EVimg, description: "A modern and responsive electric vehicle (EV) website built using React.js. This project showcases a sleek UI with a hero section, auto image slider after every 3 seconds, and elements to engage users. (Additinal features are yet to be added, this is the initial web design with some working features)",
    github:"https://github.com/HemanthNagaraj04/EV-Website",
    web:"https://hemanthnagaraj04.github.io/EV-Website/",
  },
  { name: "Movie Browser", img: MovieBrowser, description: "Movie Browser is a sleek and responsive React application built with Vite that lets users search, browse, and explore movies using the OMDb API. Featuring categorized movie sliders and a powerful search functionality",
    github:"https://github.com/HemanthNagaraj04/MovieBrowser",
    web:"https://hemanthnagaraj04.github.io/MovieBrowser/",  
  },
  { name: "Calorie Tracker", img: Calimg, description: "This project is a Calorie & Macro Tracker web application that allows users to track the calories, protein, fats, and carbohydrates in the food they consume. The app uses the Nutritionix API to fetch nutritional information based on the food items and quantities entered by the user.",
    github:"https://github.com/HemanthNagaraj04/CalorieTracker",
    web:"https://hemanthnagaraj04.github.io/CalorieTracker/",  
  },
  { name: "Chatbot", img: chatbot, description: "This is a simple web-based University Chatbot built using HTML, CSS, and vanilla JavaScript. It provides quick responses to common university-related queries like admission process, course offerings, library timings, contact details, and more.",
    github:"https://github.com/HemanthNagaraj04/UniversityChatBot?tab=readme-ov-file",
    web:"https://hemanthnagaraj04.github.io/UniversityChatBot/",  
  },
]

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showProject, setShowProject] = useState(false)
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio
        projects={projects}
        onProjectClick={(project) => {
          setSelectedProject(project);
          setShowProject(true);
        }}
      />
      {showProject && (
        <ProjectDisplay
          project={selectedProject}
          onClose={() => {
            setShowProject(false);
            setSelectedProject(null);
          }}
        />
      )}
      <Contact />
    </div>
  )
}

export default App
