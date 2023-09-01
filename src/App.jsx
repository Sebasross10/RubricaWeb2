import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Datos } from './contexto/Contexto';
import Overview from './components/Overview';
import Content from './components/Content';
import Create from './components/Create';

function App() {
  const [over, setOver] = useState(true);
  const [content, setContent] = useState(false);
  const [create, setCreate] = useState(false);

  return (
    <Datos>
      <div className="container-fluid">
        <header>
          <Navbar setOver={setOver} setContent={setContent} setCreate={setCreate} />
        </header>
        <div className="row">
          <div className="col-12">
            {over ? <Overview /> : <></>}
            {content ? <Content /> : <></>}
            {create ? <Create setOver={setOver} setContent={setContent} setCreate={setCreate} /> : <></>}
          </div>
        </div>
        <Footer />
      </div>
    </Datos>
  );
}

export default App;

