import React from 'react';

import texts from '../../data/members/members.json';



function Members() {
  return (
    <section>
      <div className="title">
      <h2>Integrantes</h2>
        <ul>
          {
            texts.data.map((member) => (
              <li key={member.githubUser}>
                {member.name}
                (<a target="_blank" rel="noopener noreferrer" href={member.url} >
                  @{member.githubUser}
                </a>)
              </li>
            )
            )
          }
        </ul>
      </div>
     
      {/* <div>
        <h2>👋🏽 Integrantes</h2>
        <ul>
          <li>Matias Palladino (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/Sheephack" >@Sheephack</a>)</li>
          <li>Damian Palavecino (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/DamianPalavecino" >@DamianPalavecino</a>)</li>
          <li>German Paak (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/205mdp" >@205mdp</a>)</li>
          <li>leanvk (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/leanvk" >@leanvk</a>)</li>
          <li>Fernando Demaio (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/fdemaio" >@fdemaio</a>)</li>
          <li>Cristian Reyes (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/cristianireyes" >@cristianireyes</a>)</li>
          <li>Pablo Espinoza (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/astragant97" >@astragant97</a>)</li>
          <li>Alexis Bonvicini (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/abonvicini" >@abonvicini</a>)</li>
          <li>Agustin Vazquez (<a className="Main-link" target="_blank" rel="noopener noreferrer" href="https://github.com/9gustin" >@9gustin</a>)</li>
        </ul>
      </div> */}
    </section>
  );
}

export default Members;
