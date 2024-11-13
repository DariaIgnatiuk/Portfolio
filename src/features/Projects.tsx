

function Projects() {
  return (
    <div id='projects'>
       <div id='projectsHeading'>Projects</div> 
       <div id='containers'>

        <div className="projectContainer">
            <img className='projectImg'src='/project1.png'/>
            <div className="projectInfo">
                <p className="projectP">A reading tracker and reading diary for book lovers using Typescript, Node.js, React and Redux</p>
                <button className="projectButton"><a href="https://bookworm.justabaka.net/dashboard"><p className="link">Learn More</p></a></button>
            </div>
        </div>
        <div className="projectContainer">
        <img className='projectImg'src='/project2.png'/>
        <div className="projectInfo">
        <p className="projectP">A language learning application to make learning Hebrew easier using HTML, CSS and Java Scrips</p>
        <button className="projectButton"><a href="https://github.com/DariaIgnatiuk/LLA"><p className="link">Learn More</p></a></button>
        </div>
        </div>
        <div className="projectContainer">
        <img className='projectImg'src='/project3.jpeg'/>
        <div className="projectInfo">
        <p className="projectP">A web-site about Israeli banking system for new immigrants using HTML, CSS and Materialize</p>
        <button className="projectButton"><a href="https://github.com/DariaIgnatiuk/Hackathon"><p className="link">Learn More</p></a></button>
        </div>
        </div>
       </div>
        </div>
  )
}

export default Projects