import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const Overview = () => {
  const [favorito1, setFav1] = useState(false);
  const [favorito2, setFav2] = useState(false);
  const [favorito3, setFav3] = useState(false);
  const [favorito4, setFav4] = useState(false);

  useEffect(() => {
    try {
      leer();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const leer = () => {

    const fav1 = localStorage.getItem("fav1");
    if (fav1 !== null) {
      setFav1(JSON.parse(fav1));
    }

    const fav2 = localStorage.getItem("fav2");
    if (fav2 !== null) {
      setFav2(JSON.parse(fav2));
    }

    const fav3 = localStorage.getItem("fav3");
    if (fav3 !== null) {
      setFav3(JSON.parse(fav3));
    }

    const fav4 = localStorage.getItem("fav4");
    if (fav4 !== null) {
      setFav4(JSON.parse(fav4));
    }
  };

  const guardar1 = () => {
    setFav1(!favorito1);
    localStorage.setItem("fav1", !favorito1);
  };

  const guardar2 = () => {
    setFav2(!favorito2);
    localStorage.setItem("fav2", !favorito2);
  };

  const guardar3 = () => {
    setFav3(!favorito3);
    localStorage.setItem("fav3", !favorito3);
  };

  const guardar4 = () => {
    setFav4(!favorito4);
    localStorage.setItem("fav4", !favorito4);
  };

  return (
<div className="container">
  <div className="row">
    <div className="col-md-3">
      <div className="card">
        <img src="https://blog.ida.cl/wp-content/uploads/sites/5/2022/01/Dise%C3%B1o-de-futuros-en-tiempos-de-agilidad-blog.png" alt="imagen" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Add your organization</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.
          </p>
          <div className="cont-favorite">
          <button
  onClick={guardar1}
  className={`btn ${favorito1 ? 'btn-success' : 'btn-danger'}`}
>
  {favorito1 ? 'Favorito' : 'Marcar como Favorito'}
</button>


          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://blog.ida.cl/wp-content/uploads/sites/5/2022/01/Dise%C3%B1o-de-futuros-en-tiempos-de-agilidad-blog.png" alt="imagen" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Becoming a partner</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.
          </p>
          <div className="cont-favorite">
          <button
  onClick={guardar2}
  className={`btn ${favorito2 ? 'btn-success' : 'btn-danger'}`}
>
  {favorito2 ? 'Favorito' : 'Marcar como Favorito'}
</button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://blog.ida.cl/wp-content/uploads/sites/5/2022/01/Dise%C3%B1o-de-futuros-en-tiempos-de-agilidad-blog.png" alt="imagen" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Where the data comes from</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.
          </p>
          <div className="cont-favorite">
          <button
  onClick={guardar3}
  className={`btn ${favorito3 ? 'btn-success' : 'btn-danger'}`}
>
  {favorito3 ? 'Favorito' : 'Marcar como Favorito'}
</button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src="https://blog.ida.cl/wp-content/uploads/sites/5/2022/01/Dise%C3%B1o-de-futuros-en-tiempos-de-agilidad-blog.png" alt="imagen" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Glossary & definitions</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor dolore magnam deserunt! Quos minima, perferendis incidunt suscipit assumenda magni blanditiis ullam ipsum! Iusto eius architecto esse quisquam sit hic.
          </p>
          <div className="cont-favorite">
          <button
  onClick={guardar4}
  className={`btn ${favorito4 ? 'btn-success' : 'btn-danger'}`}
>
  {favorito4 ? 'Favorito' : 'Marcar como Favorito'}
</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Overview;

