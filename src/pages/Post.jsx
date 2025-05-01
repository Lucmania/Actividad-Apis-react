import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Post.css';

function Post() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const userData = {
      name: name,
      job: job
    };

    // Petición con header de autenticación x-api-key
    axios.post('https://reqres.in/api/users', userData, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        }
      })
      .then(response => {
        console.log('Respuesta exitosa:', response);
        setResponse(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al crear el usuario:', error);
        setError('Error al crear el usuario. Por favor, inténtalo de nuevo.');
        setLoading(false);
      });
  };

  return (
    <div className="post-container">
      <h1>Página de Petición POST</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="job">Trabajo:</label>
            <input
              type="text"
              id="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Crear Usuario'}
          </button>
        </form>
      </div>

      {response && (
        <div className="response-container">
          <h2>Usuario Creado Correctamente</h2>
          <div className="user-response">
            <div className="user-info">
              <p><span className="label">Nombre:</span> {response.name}</p>
              <p><span className="label">Trabajo:</span> {response.job}</p>
              <p><span className="label">ID:</span> {response.id}</p>
              <p><span className="label">Creado en:</span> {new Date(response.createdAt).toLocaleString()}</p>
            </div>
            <div className="user-icon">
              <div className="avatar">{response.name.charAt(0).toUpperCase()}</div>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}

      <button className="back-button" onClick={() => navigate('/')}>
        Volver al inicio
      </button>
    </div>
  );
}

export default Post;