import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navBar';
import  Hero from './pages/hero';
import About  from './pages/about';
import Projects from './pages/projects';
import Certifications from './pages/certs';
import Footer from './pages/footer';

function App() {
  return (
    <BrowserRouter basename='/Portfolio/'>
      <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-green-100">
        {/* Navbar */}
        <Navbar />
         <Hero />
         <About/>
         <Projects/>
         <Certifications/>
         <Footer/>
        {/* Main content with spacing to avoid overlap with fixed navbar */}
        <main className="pt-24 px-4 md:px-6">
          <Routes>
            <Route path="/about" element={<h1 className="text-3xl font-bold">About Page</h1>} />
            <Route path="/contact" element={<h1 className="text-3xl font-bold">Contact Page</h1>} />
            <Route path="/" element={<h1 className="text-3xl font-bold"></h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
