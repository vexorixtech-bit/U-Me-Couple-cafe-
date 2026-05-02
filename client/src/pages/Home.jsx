import React from 'react'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary/to-pink-300">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">U & Me</h1>
          <p className="text-xl mb-8">Couple Cafe - 24/7 Pure Veg & Non-Veg</p>
          <a href="/menu" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-light">
            View Menu
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🍽</div>
            <h3 className="text-xl font-semibold mb-2">100% Fresh</h3>
            <p className="text-gray-600">Daily fresh ingredients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">24/7 Open</h3>
            <p className="text-gray-600">Always available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Pure Love</h3>
            <p className="text-gray-600">Made with passion</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
