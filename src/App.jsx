import { useState } from 'react';
import '../src/css/bootstrap-5.0.2-dist - Copy/bootstrap-5/css/bootstrap.min.css'; // Corrected import path for CSS

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <nav className="navbar bg-body-tertiary"> {/* Replaced class with className */}
          <div className="container-fluid"> {/* Replaced class with className */}
            <a className="navbar-brand" href="#">
              <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> {/* Replaced class with className */}
              Bootstrap
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
