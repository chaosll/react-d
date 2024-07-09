import reactLogo from '/q.png'
import viteLogo from '/chaosll.png'
import './App.css'

function App() {
  const srcMap = [
    {
      src: 'https://bing.ee123.net/img/?date=20240705&size=1080x720',
    },
    {
      src: 'https://bing.ee123.net/img/?date=20240701&size=1920x1080',
    },
    {
      src: 'https://bing.ee123.net/img/?date=20240505&size=1920x1080',
    },
    {
      src: 'https://bing.ee123.net/img/?date=20240407&size=1920x1080',
    },
  ]

  return (
    <>
      <div id='App'>
        <div className="main">
          <h1 className='h1'>惊蛰</h1>
          <div className='container'>
            <a href="">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="">
              <img src={reactLogo} className="logo" alt="React logo" />
            </a>
          </div>
        </div>
        <div className="bgci">
          {srcMap.map((e) => {
            return (
              <img
                loading="lazy"
                className="bing"
                src={e.src}
                key={e.src}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
