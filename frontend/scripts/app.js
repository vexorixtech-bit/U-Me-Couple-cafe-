// ============================================
// U&ME COUPLE CAFE - MAIN APP COMPONENT
// ============================================

const { useState, useEffect } = React;

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setLoading(false);
            // Hide preloader
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('hidden');
            }
        }, 1500);
    }, []);

    if (loading) {
        return (
            <div className="preloader">
                <div className="preloader-content">
                    <h1>U&Me</h1>
                    <div className="spinner"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Features />
            <About />
            <Banner />
            <Menu />
            <Gallery />
            <Reservation />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);