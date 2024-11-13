import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <Link to='/'><button className="navButton">About me</button></Link>
        <Link to='/skills'><button className="navButton">Skills</button></Link>
        <Link to='/projects'><button className="navButton">Projects</button></Link>
        <a href="https://github.com/DariaIgnatiuk"><img className='mini'src='/github.png'/></a>
        <a href="https://www.linkedin.com/in/daria-ignatiuk-8b1500325/"><img className='mini' src='/linkedin.webp'/></a>
    </nav>
  )
}

export default Navigation