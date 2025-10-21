
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GalleryPage from './components/GalleryPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Header Navigation */}
        <Header />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
