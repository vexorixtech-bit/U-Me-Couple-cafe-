// ============================================
// U&ME COUPLE CAFE - MAIN APP COMPONENT
// ============================================

const { useState, useEffect } = React;

const App = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (err) {
            console.error("Error in App:", err);
            setError(err.message);
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '2rem',
                backgroundColor: '#FFF5F5'
            }}>
                <h1>U & Me</h1>
                <div style={{
                    marginTop: '20px',
                    width: '40px',
                    height: '40px',
                    border: '4px solid #FF6B6B',
                    borderTop: '4px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}></div>
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{padding: '50px', textAlign: 'center', color: 'red'}}>
                <h1>Error</h1>
                <p>{error}</p>
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
try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
    console.log("App rendered successfully!");
} catch (err) {
    console.error("Failed to render App:", err);
    document.getElementById('root').innerHTML = '<h1 style="color: red; padding: 50px;">Error: ' + err.message + '</h1>';
}
