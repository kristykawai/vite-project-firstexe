import { useState } from 'react'
import bearEmoji from './assets/emoji_bear_004_cute_2026-06-07.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Header />

      <section id="center">
        <div className="bear-container">
          <a
            href="https://store.line.me/emojishop/product/6a278136d868932001df0522/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={bearEmoji}
              className="bear"
              width="150"
              height="150"
              alt="Visit Bear Emoji Line Store"
            />
          </a>
        </div>

        <h1>ども</h1>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((c) => c + 1)}
        >
          Hi Five is {count}
        </button>
      </section>

      <Footer />
    </div>
  )
}

export default App