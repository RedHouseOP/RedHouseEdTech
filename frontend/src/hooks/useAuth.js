// frontend/src/hooks/useAuth.js
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();
    const hasRedirectedRef = useRef(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token && !hasRedirectedRef.current) {
            alert('Sorry! You need to login first.');
            hasRedirectedRef.current = true;
            navigate('/login');
        }
    }, [navigate]);
};

export default useAuth;
