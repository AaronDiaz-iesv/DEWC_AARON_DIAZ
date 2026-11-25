export const MENSAJES = {
  MENOR: 'Menor de edad',
  ACTIVO: 'Trabajando o estudiando',
  JUBILADO: 'Jubilado',
  NO_POSITIVA: 'La edad debe ser un entero positivo',
  CON_DECIMALES: 'La edad no debe tener decimales',
  NO_NUMERO: 'Debe introducir un número',
};

export function clasificarEdad(edad) {
  if (typeof edad !== 'number' || Number.isNaN(edad)) {
    throw new Error(MENSAJES.NO_NUMERO);
  }
  if (!Number.isInteger(edad)) {
    throw new Error(MENSAJES.CON_DECIMALES);
  }
  if (edad < 0) {
    throw new Error(MENSAJES.NO_POSITIVA);
  }
  if (edad < 18) {
    return MENSAJES.MENOR;
  } else if (edad > 65) {
    return MENSAJES.JUBILADO;
  } else {
    return MENSAJES.ACTIVO;
  }
}

export function parseEdad(texto) {
  if (typeof texto !== 'string' || texto.trim() === '') {
    throw new Error(MENSAJES.NO_NUMERO);
  }
  const edad = Number(texto);
  if (Number.isNaN(edad)) {
    throw new Error(MENSAJES.NO_NUMERO);
  }
  return edad;
}
