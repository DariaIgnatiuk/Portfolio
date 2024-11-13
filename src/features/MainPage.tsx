
function MainPage() {
  return (
    <div className='mainPageContainer'>
      <div className='rightPart'>
        <p id='line1'>Hi👋, I’m </p>
        <p id='line2'>Daria Ignatiuk</p>
        <p className='line3'>I’m a <b>full stack developer</b> from Israel</p>
        <p className='line3'>I also have some experience in manual and automatic testing, so I pay a lot of attention to possible bugs when developing. </p>
        <p className='line3'>I love that feeling, when something you have been working on starts working the way you intended! </p>
      </div>
      <div className='rightPart'>
        <img id='photo'src='/photo.jpg'/>
      </div>
    </div>
  )
}

export default MainPage