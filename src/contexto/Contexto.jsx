import React, { useContext } from 'react'
import { createContext } from 'react'

export const Contexto = createContext()

export const Datos = ({children}) => {
  const [dataMovie, setDataMov] = React.useState([
    {
      numero:1,
      titulo: "Formula 1",
      descripcion:"La Fórmula 1 es una categoría de automovilismo de velocidad que se disputa en circuitos cerrados, conocidos como autódromos o circuitos urbanos temporales​",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/200px-F1.svg.png",
    categoria: "Deportes de motor",
    referente: "Lewis Hamilton",
    link: "https://es.wikipedia.org/wiki/Fórmula_1"

  },
  {
      numero: 2,
      titulo: "Rally",
      descripcion:"El rally es una disciplina de competición en la que los pilotos compiten en tramos cronometrados en diferentes tipos de terrenos, como caminos de tierra, asfalto y nieve.​ ​",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Rally_cuatro_epocas_montaje.jpg/400px-Rally_cuatro_epocas_montaje.jpg",
      categoria: "Deportes de motor",
      referente:"Valentino Rossi",
      link: "https://es.wikipedia.org/wiki/Rally"
    },
  
    {
      numero: 3,
      titulo: "MotoGP",
      descripcion: "MotoGP es una competición de motociclismo de velocidad en la que participan motocicletas especialmente diseñadas para carreras en circuitos asfaltados.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Moto_Gp_logo.svg/250px-Moto_Gp_logo.svg.png",
      categoria: "Deportes de motor",
      referente: "Loeb",
      link: "https://es.wikipedia.org/wiki/MotoGP"
    },
  
    {
      numero: 4,
      titulo: "Ajedrez",
      descripcion: "El ajedrez es un juego de estrategia en el que dos jugadores compiten por capturar al rey del oponente mientras protegen el propio.",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Opening_chess_position_from_black_side.jpg/275px-Opening_chess_position_from_black_side.jpg",
      categoria: "Deportes de mesa",
      referente: "Magnus Carlsen",
      link: "https://es.wikipedia.org/wiki/Ajedrez"
    },
  
    {
      numero: 5,
      titulo: "Tenis de mesa",
      descripcion:"El tenis de mesa es un deporte en el que dos jugadores o dos parejas compiten utilizando pequeñas paletas para golpear una pelota hacia el lado contrario de la mesa, pasando por encima de una red.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/2012_Summer_Olympics_Men%27s_Team_Table_Tennis_Final_1.jpg/275px-2012_Summer_Olympics_Men%27s_Team_Table_Tennis_Final_1.jpg",
      categoria: "Deportes de mesa",
      referente:"Ma Long",
      link:"https://es.wikipedia.org/wiki/Tenis_de_mesa"
    },
  
    {
      numero: 6,
      titulo: "Billar",
      descripcion: "El billar es un deporte que engloba varias modalidades, siendo el más conocido el billar pool",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Studenten_Billard.JPG/250px-Studenten_Billard.JPG",
      categoria: "Deportes de mesa",
      referente:"Efren Reyes",
      link:"https://es.wikipedia.org/wiki/Billar"
    },
  
    {
      numero: 7,
      titulo: "Futbol",
      descripcion: "El fútbol, también conocido como soccer en algunos países, es uno de los deportes de equipo más populares en el mundo.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Football_in_Bloomington%2C_Indiana%2C_1996.jpg/275px-Football_in_Bloomington%2C_Indiana%2C_1996.jpg",
      categoria: "Deportes en equipo",
      referente:"Barcelona",
      link:"https://es.wikipedia.org/wiki/Fútbol"
    },
  
    {
      numero: 8,
      titulo: "Baloncesto",
      descripcion:"El baloncesto es un deporte en el que dos equipos compiten por anotar puntos en una canasta elevada.",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Dr._James_Naismith.jpg/220px-Dr._James_Naismith.jpg",
      categoria: "Deportes en equipo",
      referente:"Los Angeles Lakers",
      link:"https://es.wikipedia.org/wiki/Baloncesto"
    },
  
    {
      numero: 9,
      titulo: "Rugby",
      descripcion:"El rugby es un deporte de equipo que se juega en diferentes variantes, siendo el rugby de 15 jugadores y el rugby de 7 jugadores las más populares​ ",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/New_Zealand_vs_South_Africa_2006_Tri_Nations_Line_Out.JPG/275px-New_Zealand_vs_South_Africa_2006_Tri_Nations_Line_Out.JPG",
      categoria: "Deportes en equipo",
      referente:"All Blacks",
      link:"https://es.wikipedia.org/wiki/Rugby"
    }
  ])
  return (
    <Contexto.Provider value={{dataMovie, setDataMov}}>
        {children}
    </Contexto.Provider>
  )
}

