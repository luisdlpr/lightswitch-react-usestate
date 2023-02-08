import React, { useState } from 'react'
import "./App.css"

function App() {
  // Use state hook to keep track of current theme.  Use light as default
  const [currentTheme, setTheme] = useState(() => { return "light" })
  return (
    <body className={ currentTheme }>
      <div className="title">
        <div className="logo">Lightswitch</div>
        <div className="currentTheme">{ currentTheme }</div>
      </div>
      <div className="switch">
        {/* Set theme to opposite of current. */}
        <button onClick={() => {setTheme(currentTheme === "light" ? "dark" : "light")}}>💡</button>
      </div>
    </body>
  )
}

export default App;
