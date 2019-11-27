import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header>
        <a href="inicial.html">
            <h2 id="logo">FutureTube</h2>
        </a>
        <input id="busca" type="search" placeholder="Busca"/>
    </header>
    <section>
      <div  id="container">
        <nav>
          <div>
            <div id="primeiro-menu">
              <ul>
                <li>Início</li>
                <li>Em alta</li>
                <li>Inscrições</li>
                <li>Originais</li>
              </ul>
            </div>
            <div id="segundo-menu">
              <ul>
                <li>Biblioteca</li>
                <li>Histórico</li>
              </ul>
            </div>
          </div>
        </nav>
        <article>
        <div>
            <a href="video1.html "><img class="img" src="https://picsum.photos/id/278/125/125" alt=""/> </a>
            <p>Media 1</p>
        </div>
        <div>
            <a href="video2.html "><img class="img" src="https://picsum.photos/id/288/125/125" alt=""/></a>
            <p>Media 2</p>
        </div>
        <div>
            <a href="video3.html "> <img class="img" src="https://picsum.photos/id/23/125/125" alt=""/></a>
            <p>Media 3</p>
        </div>
        <div>
            <a href="video4.html "> <img class="img" src="https://picsum.photos/id/218/125/125" alt=""/></a>
            <p>Media 4</p>
        </div>
        <div>
            <a href="video5.html "> <img class="img" src="https://picsum.photos/id/788/125/125" alt=""/></a>
            <p>Media 5</p>
        </div>
        <div>
            <a href="video6.html "> <img class="img" src="https://picsum.photos/id/27/125/125" alt=""/></a>
            <p>Media 6</p>
        </div>
        <div>
            <a href="video7.html "> <img class="img" src="https://picsum.photos/id/28/125/125" alt=""/></a>
            <p>Media 7</p>
        </div>
        <div>
            <a href="video8.html "> <img class="img" src="https://picsum.photos/id/2/125/125" alt=""/></a>
            <p>Media 8</p>
        </div>
        </article>
      
      </div>
        
    </section>
    <footer>
        <h2>Oi! Eu moro no footer!</h2>
    </footer>
    </div>
  );
}

export default App;
