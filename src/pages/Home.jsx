import '../styles/Guia.css';

export const Home = () => {
    return (
        <div className='containerGuia'>
            <div className='contenedor'>
                <div className='columna1'>
                    <h2>Instrucciones para Usar el Cifrado de Escítala</h2>
                    <h3>Materiales Necesarios</h3>
                    <ul>
                        <li><strong>Cilindro:</strong> Un objeto cilíndrico (lápiz, tubo, palo).</li>
                        <li><strong>Cinta o papel:</strong> Una tira larga de papel o cinta (1-2 cm de ancho).</li>
                    </ul>

                    <h3>Paso 1: Preparar la Escítala</h3>
                    <ol>
                        <li><strong>Cortar la Cinta:</strong> Toma la tira de papel y córtala de 30-50 cm de largo.</li>
                        <li><strong>Enrollar la Cinta:</strong> Enrolla la cinta alrededor del cilindro, asegurándote de que esté bien ajustada.</li>
                    </ol>

                    <h3>Paso 2: Escribir el Mensaje</h3>
                    <ol>
                        <li><strong>Escribir Horizontalmente:</strong> Escribe tu mensaje en la cinta mientras está enrollada.</li>
                    </ol>
                    <p><strong>Ejemplo:</strong> Para el mensaje <code>"ENVIAR REFUERZOS"</code>, escribe:</p>
                    <pre>
                        E N V I A R
                        R E F U E R Z O S
                    </pre>

                    <h3>Paso 3: Cifrar el Mensaje</h3>
                    <ol>
                        <li><strong>Desenrollar la Cinta:</strong> Después de escribir, desenrolla la cinta.</li>
                        <li><strong>Observar el Cifrado:</strong> Ahora verás las letras desordenadas.</li>
                    </ol>

                    <h3>Paso 4: Enviar el Mensaje</h3>
                    <ol>
                        <li><strong>Enviar la Cinta:</strong> Envía la cinta cifrada al destinatario.</li>
                        <li><strong>Incluir el Cilindro:</strong> Puedes enviar el cilindro o especificar el diámetro.</li>
                    </ol>

                    <h3>Paso 5: Descifrar el Mensaje</h3>
                    <ol>
                        <li><strong>Enrollar la Cinta:</strong> El destinatario enrolla la cinta en un cilindro del mismo diámetro.</li>
                        <li><strong>Leer el Mensaje:</strong> Al desenrollar, podrá leer el mensaje en orden correcto.</li>
                    </ol>

                    <h3>Resumen Visual</h3>
                    <p><strong>Escribir:</strong></p>
                    <pre>
                        E N V I A R
                        R E F U E R Z O S
                    </pre>
                    <p><strong>Cinta Desenrollada:</strong> Letras en desorden.</p>
                    <p><strong>Enviar:</strong> Lleva la cinta al destinatario.</p>
                    <p><strong>Leer:</strong> El destinatario enrolla y lee el mensaje.</p>
                </div>

                <div className='columna2'>
                    <h2>Instrucciones para Usar el Cifrado de César</h2>
                    <h3>¿Qué es el Cifrado de César?</h3>
                    <p>El cifrado de César es un método de cifrado de sustitución en el que cada letra del texto se desplaza un número fijo de posiciones en el alfabeto.</p>

                    <h3>Materiales Necesarios</h3>
                    <ul>
                        <li><strong>Texto a Cifrar:</strong> El mensaje que deseas cifrar.</li>
                        <li><strong>Desplazamiento:</strong> Un número entero que indica cuántas posiciones se desplazarán las letras.</li>
                    </ul>

                    <h3>Paso 1: Elegir el Desplazamiento</h3>
                    <ol>
                        <li>Selecciona un número de desplazamiento entre 1 y 25 (por ejemplo, 3).</li>
                    </ol>

                    <h3>Paso 2: Escribir el Mensaje Original</h3>
                    <p>Escribe el mensaje que deseas cifrar.</p>
                    <pre>
                        Ejemplo: "MENSAJE SECRETO"
                    </pre>

                    <h3>Paso 3: Cifrar el Mensaje</h3>
                    <ol>
                        <li>Para cada letra en el mensaje:</li>
                        <li>Si es una letra, desplázala <strong>hacia adelante</strong> en el alfabeto por el número que elegiste.</li>
                        <li>Si llegas al final del alfabeto, vuelve al principio.</li>
                        <li>Las letras que no son del alfabeto (como espacios o puntuación) se quedan igual.</li>
                    </ol>
                    <p><strong>Ejemplo de Cifrado:</strong></p>
                    <pre>
                        Mensaje: "MENSAJE SECRETO" <br />
                        Desplazamiento: 3 <br />
                        Cifrado: "PHQVDMHJ VHCUHW"
                    </pre>

                    <h3>Paso 4: Enviar el Mensaje Cifrado</h3>
                    <p>Envía el mensaje cifrado al destinatario junto con el número de desplazamiento utilizado.</p>

                    <h3>Paso 5: Descifrar el Mensaje</h3>
                    <ol>
                        <li>El destinatario recibe el mensaje cifrado y el número de desplazamiento.</li>
                        <li>Para descifrar, desplaza cada letra <strong>hacia atrás</strong> en el alfabeto por el mismo número.</li>
                    </ol>
                    <p><strong>Ejemplo de Descifrado:</strong></p>
                    <pre>
                        Cifrado: "PHQVDMHJ VHCUHW"<br />
                        Desplazamiento: 3 <br />
                        Descifrado: "MENSAJE SECRETO"
                    </pre>

                    <h3>Resumen del Proceso</h3>
                    <p><strong>1. Elegir desplazamiento:</strong> 3</p>
                    <p><strong>2. Escribir mensaje:</strong> "MENSAJE SECRETO"</p>
                    <p><strong>3. Cifrar:</strong> "PHQVDMHJ VHCUHW"</p>
                    <p><strong>4. Enviar mensaje cifrado.</strong></p>
                    <p><strong>5. Recibir y descifrar.</strong></p>
                </div>
            </div>
        </div>
    );
}