import './Main.css';
import trophy from './image/trophy_ico.gif';

function Target() {
  return (
    <div className="Main">
      <header className="Main-header">
        <img src={trophy} alt="" />
        <h2>🏆 Objetivo</h2>
        <p>El objetivo es armar un grupo de estudio para ir hacia React, 
          desde el inicio, siguiendo el routemap en conjunto. Al principio 
          con proyectos individuales. Hasta poder llegar a un nivel avanzado 
          y hacer challenges colaborativos. La idea es pasar por todos los 
          puntos del routemap.
        </p>
      </header>
    </div>
  );
}

export default Target;
