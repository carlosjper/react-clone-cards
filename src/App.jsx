import './App.css';
import Testimony from './components/Testimony.jsx';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimony
          name='Emma Bostian'
		      country='Suecia'
          image='emma'
          charge='Ingeniera de Software'
          firm='Spotify'
          testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
      />

<Testimony
    name="Sarah Drasner"
    country="Estados Unidos"
    image="sarah"
    charge="Ingeniera de Software"
    firm="Google"
    testimony="freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de nivel principiante total a un nivel muy seguro. Fue todo lo que necesitaba para conseguir mi primer trabajo como desarrolladora en una empresa increíble."
/>

<Testimony
    name="Shawn Wang"
    country="Singapur"
    image="shawn"
    charge="Ingeniero de Software"
    firm="Amazon"
    testimony="Da miedo cambiar de carrera. Solo gané confianza en que podía programar al trabajar con cientos de horas de lecciones gratuitas en freeCodeCamp. En un año conseguí un trabajo con salario de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
/>

    </div>
  )
}

export default App; 