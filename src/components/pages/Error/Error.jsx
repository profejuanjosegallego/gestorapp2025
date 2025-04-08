import "./Error.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Error() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/Error'); 
      }, 5000);
  
      return () => clearTimeout(timer); 
    }, [navigate]);
  
    return (
      <>
        <h1>404 Error</h1>
        <p className="zoom-area">
        </p>
        <section className="error-container">
          <span>
            <span>4</span>
          </span>
          <span>0</span>
          <span>
            <span>4</span>
          </span>
        </section>
      </>
    );
  }