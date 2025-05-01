import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Get.css';

function Get() {
  const [dogImage, setDogImage] = useState('');
  const [catImage, setCatImage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  // Función para obtener imágenes - podemos llamarla al cargar y con el botón refresh
  const fetchImages = () => {
    setLoading(true);
    
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setDogImage(response.data.message);
      })
      .catch(error => {
        console.error('Error al obtener la imagen del perro:', error);
      });

    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        setCatImage(response.data[0].url);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener la imagen del gato:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="get-container">
      <h1>Página de Peticiones GET</h1>
      <button className="refresh-button" onClick={fetchImages} disabled={loading}>
        {loading ? 'Cargando...' : 'Refrescar Imágenes'}
      </button>
      
      {loading ? (
        <p>Cargando imágenes...</p>
      ) : (
        <div className="images-container">
          <div className="image-card">
            <h2>Imagen de Perro</h2>
            <img src={dogImage} alt="Perro aleatorio" />
          </div>
          <div className="image-card">
            <h2>Imagen de Gato</h2>
            <img src={catImage} alt="Gato aleatorio" />
          </div>
        </div>
      )}
      <button className="back-button" onClick={() => navigate('/')}>
        Volver al inicio
      </button>
    </div>
  );
}

export default Get;