import MainPage from './features/MainPage'
import Navigation from './features/Navigation'
import { Route, Routes  } from "react-router-dom";
import Skills from './features/Skills';
import Projects from './features/Projects';


function App() {


  return (
    <>
    <Navigation/>
    <MainPage/>
    <Skills/>
    <Projects/>


    <Routes>
    <Route path="/me" element={<MainPage />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    </Routes>
    </>
  )
}

export default App
