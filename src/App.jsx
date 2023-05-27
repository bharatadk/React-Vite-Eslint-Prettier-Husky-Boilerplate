import './App.css';

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
    const [count, setCount] = useState(0);
    const { NODE_ENV } = process.env;
    console.log('ram');

    return (
        <div>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <div>
                {' '}
                <h2>
                    mode : <span style={{ color: 'green' }}>{NODE_ENV}</span>
                </h2>
            </div>
            <h1>React + Vite + Eslint + Prettier + Husky </h1>
            <div className="card">
                <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    );
}

export default App;