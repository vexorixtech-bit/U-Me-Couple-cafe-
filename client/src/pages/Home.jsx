import React from 'react'

function Home() {
  return (
    <div style={{padding: '50px', textAlign: 'center' }}>
      <h1 style={{fontSize: '3rem', color: '#FF6B6B'}}>U & Me Couple Cafe</h1>
      <p style={{fontSize: '1.2rem', marginTop: '20px'}}>Welcome to our restaurant!</p>
      <div style={{marginTop: '30px'}}>
        <button style={{padding: '10px 30px', fontSize: '1rem', backgroundColor: '#FF6B6B', color: 'white', border: 'none', borderRadius: '5px'}}>
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Home;
