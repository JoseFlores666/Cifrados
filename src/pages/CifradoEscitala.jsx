import React, { useState } from 'react';
import { Estilos } from '../styles/Estilos';

export const CifradoEscitala = () => {
  const [mensaje, setMensaje] = useState('');
  const [clave, setClave] = useState('');
  const [resultado, setResultado] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');
  const [errorClave, setErrorClave] = useState('');

  // Función para cifrar con Escítala
  const cifrar = (mensaje, columnas) => {
    let mensajeCifrado = '';
    const filas = Math.ceil(mensaje.length / columnas);

    for (let col = 0; col < columnas; col++) {
      for (let fila = 0; fila < filas; fila++) {
        const indice = fila * columnas + col;
        if (indice < mensaje.length) {
          mensajeCifrado += mensaje[indice];
        }
      }
    }
    setMensaje("");
    setClave("");
    return mensajeCifrado;
  };

  // Función para descifrar con Escítala
  const descifrar = (mensaje, columnas) => {
    const filas = Math.ceil(mensaje.length / columnas);
    let mensajeDescifrado = Array(mensaje.length).fill('');
    let indice = 0;

    for (let col = 0; col < columnas; col++) {
      for (let fila = 0; fila < filas; fila++) {
        if (indice < mensaje.length) {
          const idx = fila * columnas + col;
          mensajeDescifrado[idx] = mensaje[indice];
          indice++;
        }
      }
    }
    setMensaje("");
    setClave("");
    return mensajeDescifrado.join('');
  };

  const handleCifrar = () => {
    let hasError = false;

    if (!mensaje.trim()) {
      setErrorMensaje("El mensaje es requerido.");
      hasError = true;
    } else {
      setErrorMensaje('');
    }

    const columnas = parseInt(clave, 10);
    if (!clave.trim() || isNaN(columnas) || columnas <= 0) {
      setErrorClave("ingresa una clave válida (número de columnas).");
      hasError = true;
    } else {
      setErrorClave('');
    }

    if (hasError) return;

    const mensajeCifrado = cifrar(mensaje.replace(/\s/g, ''), columnas);
    setResultado(mensajeCifrado);
  };

  const handleDescifrar = () => {
    let hasError = false;

    if (!mensaje.trim()) {
      setErrorMensaje("El mensaje es requerido.");
      hasError = true;
    } else {
      setErrorMensaje('');
    }

    const columnas = parseInt(clave, 10);
    if (!clave.trim() || isNaN(columnas) || columnas <= 0) {
      setErrorClave("ingresa una clave válida (número de columnas).");
      hasError = true;
    } else {
      setErrorClave('');
    }

    if (hasError) return;

    const mensajeDescifrado = descifrar(mensaje.replace(/\s/g, ''), columnas);
    setResultado(mensajeDescifrado);
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(resultado)
      .then(() => alert('Texto copiado al portapapeles!'))
      .catch(err => console.error('Error al copiar: ', err));
  };

  return (
    <div style={Estilos.container}>
      <h1 style={Estilos.title}>Cifrado Escítala</h1>

      <label>Ingresa tu mensaje:</label>
      <textarea
        placeholder="Ingresa tu mensaje aquí"
        style={Estilos.textarea}
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      {errorMensaje && <p style={Estilos.error}>{errorMensaje}</p>}

      <label>Ingresa tu clave:</label>
      <input
        type="number"
        placeholder="Ingresa tu clave aquí (número de columnas)"
        style={Estilos.input}
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      />
      {errorClave && <p style={Estilos.error}>{errorClave}</p>}

      <button style={Estilos.button} onClick={handleCifrar}>Cifrar</button>
      <button style={Estilos.button} onClick={handleDescifrar}>Descifrar</button>

      <h2>Resultado:</h2>
      <p style={Estilos.resultado}>{resultado}</p>
      {resultado && <button style={Estilos.button} onClick={copiarAlPortapapeles}>Copiar Texto</button>}
    </div>
  );
};