import { useNavigate } from 'react-router-dom';
import './Botones.css';

function Botones() {
  const navigate = useNavigate();

  return (
    <div className="botones-container">
      <h1>Proyecto de APIs y Rutas</h1>
      <div className="botones">
        <button onClick={() => navigate('/get')}>
          Ir a GET (Obtener imágenes)
        </button>
        <button onClick={() => navigate('/post')}>
          Ir a POST (Crear usuario)
        </button>
      </div>
    </div>
  );
}

export default Botones;