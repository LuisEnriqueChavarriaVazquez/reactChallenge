import React, { createContext, useReducer, useEffect } from "react";
import { fetchBanks } from "../services/bankService";

// Creación del contexto para los datos de los bancos que será accesible globalmente en el componente.
export const BankContext = createContext();

// Estado inicial para el reducer que incluye una lista de bancos vacía, un estado de carga y un campo para errores.
const initialState = {
	banks: [],
	isLoading: true,
	error: null,
};

/**
 * Reducer para manejar los estados de la solicitud de datos de bancos.
 * @param {Object} state Estado actual del contexto.
 * @param {Object} action Acción a ejecutar.
 * @returns {Object} Nuevo estado basado en la acción recibida.
 */
function bankReducer(state, action) {
	switch (action.type) {
		case "FETCH_SUCCESS":
			// Maneja el éxito de la petición actualizando el estado con los datos recibidos y marcando la carga como false.
			return {
				...state,
				banks: action.payload,
				isLoading: false,
			};
		case "FETCH_ERROR":
			// Maneja los errores de la petición limpiando los bancos y estableciendo el mensaje de error.
			return {
				...state,
				banks: [],
				isLoading: false,
				error: action.payload,
			};
		default:
			// Devuelve el estado actual para cualquier acción no manejada.
			return state;
	}
}

/**
 * Provider que envuelve a los componentes hijos permitiendo el acceso al contexto de los bancos.
 * @param {Object} props Propiedades del componente, incluyendo los hijos.
 * @returns {JSX.Element} Provider con el contexto.
 */
export const BankProvider = ({ children }) => {
	const [state, dispatch] = useReducer(bankReducer, initialState);

	useEffect(() => {
		// Llama a la función fetchBanks y maneja la respuesta o los errores.
		fetchBanks()
			.then((data) => {
				// Despacha una acción de éxito cuando la petición es exitosa.
				dispatch({ type: "FETCH_SUCCESS", payload: data });
			})
			.catch((error) => {
				// Despacha una acción de error si ocurre un problema en la petición.
				dispatch({ type: "FETCH_ERROR", payload: error.message });
			});
	}, []); // Se asegura que el efecto solo se ejecute una vez al montar el componente.

	return (
		// Provee el estado actual del contexto a los componentes hijos.
		<BankContext.Provider value={{ state }}>{children}</BankContext.Provider>
	);
};
