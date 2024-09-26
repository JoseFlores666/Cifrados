import React, { useState } from "react";
import { cifrar, descifrar } from "../functions/CifradoCesar";
import { Estilos } from '../styles/Estilos';

export const CifradoCesar = () => {
    const [mensaje, setMensaje] = useState('');
    const [clave, setClave] = useState('');
    const [resultado, setResultado] = useState('');
    const [errorMensaje, setErrorMensaje] = useState('');
    const [errorClave, setErrorClave] = useState('');

    const handleCifrar = () => {
        let hasError = false;
        if (!mensaje.trim()) {
            setErrorMensaje("El mensaje es requerido");
            hasError = true;
        } else {
            setErrorMensaje('');
        }

        if (!clave.trim()) {
            setErrorClave("La clave es requerido");
            hasError = true;
        } else {
            setErrorClave('');
        }

        if (hasError) return;

        const mensajeCifrado = `${mensaje.toUpperCase()}`;
        setResultado(cifrar(mensajeCifrado, parseInt(clave)));
        setMensaje('');
        setClave('');
    };

    const handleDescifrar = () => {
        let hasError = false;
        if (!mensaje.trim()) {
            setErrorMensaje("El mensaje es requerido");
            hasError = true;
        } else {
            setErrorMensaje('');
        }

        if (!clave.trim()) {
            setErrorClave("La clave es requerido");
            hasError = true;
        } else {
            setErrorClave('');
        }

        if (hasError) return;

        setResultado(descifrar(resultado, parseInt(clave)));
        setMensaje('');
        setClave('');
    };

    const validarNumeros = (event) => {
        if (event.charCode >= 48 && event.charCode <= 57) {
            return true;
        }
        event.preventDefault();
    };

    const copiarAlPortapapeles = () => {
        navigator.clipboard.writeText(resultado)
            .then(() => alert('Texto copiado al portapapeles!'))
            .catch(err => console.error('Error al copiar: ', err));
    };

    return (
        <div style={Estilos.container}>
            <h1 style={Estilos.title}>Cifrado César</h1>
            
            <div>
                <label>Ingresa tu mensaje:</label>
                <textarea
                    type="text"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    style={Estilos.textarea}
                    placeholder="Ingresa tu mensaje aquí"
                    required
                />
                {errorMensaje && <p style={Estilos.error}>{errorMensaje}</p>}
            </div>

            <div>
                <label>Llave (solo números):</label>
                <input
                    type="number"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                    onKeyPress={validarNumeros}
                    style={Estilos.input}
                    placeholder="Ingresa tu clave de desplazamiento"
                    required
                />
                {errorClave && <p style={Estilos.error}>{errorClave}</p>}
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleCifrar}
                    style={Estilos.button}
                >
                    Cifrar
                </button>
                <button
                    type="button"
                    onClick={handleDescifrar}
                    style={Estilos.button}
                >
                    Descifrar
                </button>
            </div>

            <h2>Resultado:</h2>
            <p style={Estilos.resultado}>{resultado}</p>
            {resultado && <button style={Estilos.button} onClick={copiarAlPortapapeles}>Copiar Texto</button>}
        </div>
    );
};