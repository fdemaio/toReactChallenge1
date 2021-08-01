import './Main.css';

function About() {
  return (
    <div className="Main">
      <header className="Main-header">
        <h2>📚 About</h2>
        <p>La idea es seguir el routemap de React que encontramos en roadmap.sh. 
            No tenemos un material en particular, proponemos este Notion con varios 
            cursos que sirven como punto de partida y luego algunos links sobre 
            temas particulares. La idea seria ir siguiendo el routemap y enfocar 
            la planificación en grupos de temas. En vez de decir: "vemos n videos en esta semana" 
            diríamos "sacamos n conceptos del routemap". Por ejemplo: La primer semana podríamos 
            ver CRA, JSX y Components. Y así ir sacando conceptos y armando objetivos
             semanales en base a como se vaya avanzando. <br/>
             También la idea es hacer mas que nada challenges, desde los conceptos mas 
             simples a los mas complejos, para todo habría challenges, y no necesariamente
              challenges fijos, sino ir armando cositas que demuestren eso nuevo que se vio 
              en la semana/s .
        </p>
      </header>
    </div>
  );
}

export default About;
