import './App.css'
import {Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Welcome to sate</h1>
        <Link className="Link" to="/about">About</Link>
        <Link className="Link" to="/myapp">MyApp</Link>
        <Outlet />
    </div>
  );
}

export default App;
