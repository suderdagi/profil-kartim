import React from 'react';
import './App.css';

function App() {
  const handleGithubClick = () => {
    window.open('https://github.com/suderdagi', '_blank');
  };

  return (
    <div className="card">
      <img src="/sude.jpg" alt="Sude Erdağı" className="avatar" />
      <h2>Sude Erdağı</h2>
      <h4>🎓 Bilgisayar Mühendisi (İngilizce)</h4>
      <p>Beykent Üniversitesi - Mezun Oldum!</p>
      <p>React öğreniyorum ve kendimi yazılımda geliştiriyorum! 🌸</p>

      <button className="github-btn" onClick={handleGithubClick}>
        GitHub Profilim
      </button>
    </div>
  );
}

export default App;

