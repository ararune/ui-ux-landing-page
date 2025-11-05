// src/App.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const vitePrimaryGlow = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500';
const viteButton = 'px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.03] shadow-lg'; 
const viteCard = 'bg-[#18181b] border border-gray-800 p-6 rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:border-purple-600';


function App() {
  return (
    <div className="min-h-screen bg-[#111113] text-gray-200 font-sans antialiased pt-0 mt-0">
      <Header primaryGlow={vitePrimaryGlow} viteButton={viteButton} />
      
      <main>
        <Hero primaryGlow={vitePrimaryGlow} viteButton={viteButton} />
        <AboutUs primaryGlow={vitePrimaryGlow} viteCard={viteCard} />
        <Gallery primaryGlow={vitePrimaryGlow} viteCard={viteCard} />
        <Contact primaryGlow={vitePrimaryGlow} viteButton={viteButton} />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;