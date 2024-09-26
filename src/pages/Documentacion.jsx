import { Estilos } from '../styles/Estilos';

export const Documentacion = () => {
  return (
    <div style={Estilos.containerDoc}>
      <h1 style={{marginTop:10,marginBottom:10}}>Cifrado Escítala</h1>
      <p>
        El cifrado de Escítala es un método de criptografía que se remonta a la antigua Grecia. 
        Consiste en enrollar un mensaje en una vara o cilindro (la escítala) y luego desenrollar el cilindro para revelar el mensaje. 
        El mensaje solo puede ser leído si se tiene una vara del mismo tamaño.
      </p>

      <h1 style={{marginTop:10,marginBottom:10}}>Cifrado de César</h1>
      <p>
        El cifrado de César es un método de sustitución en el que cada letra del texto se desplaza un número fijo de lugares en el alfabeto. 
        Por ejemplo, con un desplazamiento de 3, 'A' se convierte en 'D', 'B' en 'E', y así sucesivamente. 
        Este cifrado es mucho más simple y se asocia a Julio César, quien lo usaba para comunicarse con sus generales.
      </p>

      <h1 style={{marginTop:10,marginBottom:10}}>Seguridad</h1>

      <h2 style={{marginTop:10,marginBottom:10}}>Escítala</h2>
      <p style={{marginTop:10,marginBottom:10}}><strong>Ventajas:</strong></p>
      <ul>
        <li>La seguridad depende de la longitud de la vara utilizada, lo que lo hace más seguro contra ataques de fuerza bruta si se usa correctamente.</li>
        <li>Requiere un dispositivo físico (la vara) que es difícil de replicar sin el conocimiento del tamaño.</li>
      </ul>
      <p style={{marginTop:10,marginBottom:10}}><strong>Desventajas:</strong></p>
      <ul>
        <li>Si un adversario tiene acceso a la vara, el cifrado se vuelve vulnerable.</li>
        <li>El método es limitado por el tamaño del cilindro, lo que restringe la longitud del mensaje.</li>
      </ul>

      <h2 style={{marginTop:10,marginBottom:10}}>César</h2>
      <p style={{marginTop:10,marginBottom:10}}><strong>Ventajas:</strong></p>
      <ul>
        <li>Fácil de implementar y entender.</li>
        <li>Rápido en términos de encriptación y desencriptación.</li>
      </ul>
      <p style={{marginTop:10,marginBottom:10}}><strong>Desventajas:</strong></p>
      <ul>
        <li>Muy vulnerable a ataques de fuerza bruta, ya que hay solo 25 posibles desplazamientos (en el caso del alfabeto inglés).</li>
        <li>Su naturaleza simple lo hace susceptible a análisis de frecuencia, donde se pueden identificar las letras más comunes y descifrar el mensaje.</li>
      </ul>

      <h2 style={{marginTop:10,marginBottom:10}}>Mejoras de UI</h2>
      <p style={{marginTop:10,marginBottom:10}}>
        Para enriquecer la experiencia del usuario en una aplicación que implemente ambos cifrados, se pueden considerar las siguientes características:
      </p>
      <ul>
        <li style={{marginTop:10,marginBottom:10}}><strong>Interfaz Intuitiva:</strong> Utilizar un diseño limpio y minimalista que permita a los usuarios ingresar fácilmente el texto y elegir el método de cifrado.</li>
        <li style={{marginTop:10,marginBottom:10}}><strong>Desplazamiento Visual (para César):</strong> Incluir un control deslizante para que los usuarios ajusten el desplazamiento de manera visual.</li>
        <li style={{marginTop:10,marginBottom:10}}><strong>Visualización del Proceso de Cifrado:</strong> Mostrar una animación del proceso de cifrado para el cifrado de Escítala, ilustrando cómo se enrolla y desenrolla el mensaje.</li>
        <li style={{marginTop:10,marginBottom:10}}><strong>Seguridad Mejorada:</strong> Incluir una opción para generar una "vara" de forma virtual para el cifrado de Escítala, permitiendo al usuario definir su propia longitud y patrón.</li>
        <li style={{marginTop:10,marginBottom:10}}><strong>Historial de Mensajes:</strong> Implementar una función que permita a los usuarios guardar sus mensajes cifrados y descifrados, así como las configuraciones utilizadas.</li>
        <li style={{marginTop:10,marginBottom:10}}><strong>Tutoriales y Ayuda:</strong> Incluir tutoriales interactivos que guíen a los usuarios a través del uso de cada cifrado y sus aplicaciones prácticas.</li>
        <li style={{marginTop:10,marginBottom:10}}><strong>Comparativa de Seguridad:</strong> Incluir una sección que informe a los usuarios sobre las diferencias en seguridad entre ambos métodos, para ayudarles a elegir el más adecuado para sus necesidades.</li>
      </ul>
    </div>
  );
};