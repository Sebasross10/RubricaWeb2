import React, { useContext } from 'react';
import { Contexto } from '../contexto/Contexto';

const Content = () => {
  const data = useContext(Contexto);

  const [selectedCategory, setSelectedCategory] = React.useState('Todas');

  const categories = ['Todas', ...new Set(data.dataCard.map(item => item.categoria))];

  const filteredData =
    selectedCategory !== 'Todas'
      ? data.dataCard.filter(item => item.categoria === selectedCategory)
      : data.dataCard;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 mb-3">
          <label htmlFor="categorySelect">Selecciona una categoría:</label>
          <select
            id="categorySelect"
            className="form-control"
            value={selectedCategory}
            onChange={event => setSelectedCategory(event.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        {filteredData.map(elemento => (
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={elemento.image} alt={elemento.titulo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{elemento.titulo}</h5>
                <p className="card-text">{elemento.descripcion}</p>
                <p className="card-text">
                  <b>Categoría:</b> {elemento.categoria}
                </p>
                <p className="card-text">
                  <b>Referente:</b> {elemento.referente}
                </p>
                <a
                  href={elemento.link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

