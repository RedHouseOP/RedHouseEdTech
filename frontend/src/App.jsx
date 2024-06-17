import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthForm from './pages/AuthForm';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<AuthForm />} />
                </Routes>
            </div>
            <Footer />

        </BrowserRouter>
    );
}