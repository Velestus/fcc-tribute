import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main id="main">
        <header className="title">
          <h1 id="title">Albert Einstein</h1>
          <p>Forefather of modern physics.</p>
        </header>
        <figure id="img-div">
          <img src="http://yesofcorsa.com/wp-content/uploads/2015/09/2086_albert_einstein.jpg" 
              id="image" alt="Albert Einstein" />
          <figcaption id="img-caption">Albert Einstein in one of his most known photographs.</figcaption>
        </figure>
        <article id="tribute-info">
          <p>Here is time line from Einstein's life:</p>
          <ul id="tribute-timeline">
            <li><strong>1879</strong> - Albert Einstein is born in Ulm.</li>
            <li><strong>1889</strong> - Max Talmud (later: Talmey), a Jewish medical student, becomes in the following years
            the tutor of young Albert. Together they read and discuss scientific and philosophic works.</li>
            <li><strong>1895</strong> - He writes his first scientific work, however, it is not published.</li>
            <li><strong>1896</strong> - Einstein begins to study at the Polytechnic in Zurich.</li>
            <li><strong>1900</strong> - He hands in his first scientific work to the “Annalen der Physik” (Annals of Physics).</li>
            <li><strong>1903</strong> - Einstein becomes member of the Naturforschende Gesellschaft of Bern.</li>
            <li><strong>1906</strong> - He is awarded a doctorate by the University of Zurich.</li>
            <li><strong>1907</strong> - Einstein starts to think about the general theory of relativity and discovers the principle
            of equivalence of mass and energy for continuously accelerated systems.</li>
            <li><strong>1911</strong> - He calculates the deflection of the light in the gravitational field of the sun and in this
            process recognizes the experimental possibility to observe this process during a total solar eclipse.</li>
            <li><strong>1912</strong> - Start of the cooperation with Marcel Grossmann, professor for mathematics at the ETH, about
            the basics of the general theory of relativity.</li>
            <li><strong>1915</strong> - He finishes his work on the general theory of relativity.</li>
            <li><strong>1916</strong> - Einstein finishes his work on his most famous book "Über die spezielle und die allgemeine
            Relativitätstheorie, gemeinverständlich" (On the Special and General Theory of Relativity, A Popular Account).</li>
            <li><strong>1919</strong> - The solar eclipse which was observed by the astronomer Arthur Stanley Eddington on May 29
            confirms Einstein’s forecast about the deflection of light in the gravitational field of the sun which he had postulated
            in his general theory of relativity.</li>
            <li><strong>1922</strong> - Einstein hands in his first work to the Academy of Science about the unified field theory.</li>
            <li><strong>1925</strong> - Einstein formulates the Bose-Einstein-Statistics and publishes the Bose-Einstein-Condensation.</li>
            <li><strong>1930</strong> - Einstein signs a manifesto demanding the world’s disarmament. He develops an intensive interest
            in pacifism.</li>
            <li><strong>1935</strong> - The Einstein-Podolsky-Rosen-Paradoxon is published.</li>
            <li><strong>1939</strong> - Einstein signs a letter to the American president Franklin D. Roosevelt on August 2 to tell him
            about the possible danger of an atomic bomb.</li>
            <li><strong>1946</strong> - He becomes head of the Emergency Committee of Atomic Scientists, whose aim it is to control
            armament and to promote the peaceful use of nuclear energy. </li>
            <li><strong>1955</strong> - Albert Einstein dies in the hospital in Princeton.</li>
          </ul>
          
        </article>
        <footer>
          <p id="quote">"It is an irony of fate that I myself have been the recipient of excessive admiration
          and reverence from my fellow-beings, through no fault and no merit of my own."</p>
          <p id="author">Albert Einstein</p>
          <p>If you have time, you should really take a look at this&nbsp;<a href="https://en.wikipedia.org/wiki/Albert_Einstein" 
             target="_blank" id="tribute-link">Wikipedia entry</a>&nbsp;about him.
          </p>
          <p id="disclaimer">This page was created for freecodecamp.org project purposes.</p>
        </footer>
      </main>
    );
  }
}

export default App;
