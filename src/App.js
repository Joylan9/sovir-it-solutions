import React from 'react';
import ITSolutionsPage from './components/ITSolutionsPage'; 
import './index.css';

function App() {
  return (
    <div className="bg-sovir-bg-light min-h-screen text-sovir-text-dark font-sans">
      <div className="debug-responsive"></div>
      <ITSolutionsPage />
    </div>
  );
}

export default App;
