import 'react-native-url-polyfill/auto'; // Necesario para entornos RN
import { createClient } from '@supabase/supabase-js';

// Usaremos valores temporales. Debes reemplazarlos con tus variables de entorno.
// EN UN PROYECTO REAL, estos valores deben obtenerse de un archivo .env o expo-constants
// para garantizar que la clave pública no esté hardcodeada.

const supabaseUrl = 'TU_SUPABASE_URL_AQUI'; // URL de tu proyecto Supabase
const supabaseAnonKey = 'TU_SUPABASE_ANON_KEY_AQUI'; // Clave pública 'anon'

if (!supabaseUrl || !supabaseAnonKey) {
  // En producción, manejar esto como un error fatal
  console.error("Faltan las variables de entorno de Supabase.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: {
        getItem: (key) => {
            // Placeholder para almacenamiento seguro, ej: AsyncStorage de React Native
            // Aquí deberías usar una solución de almacenamiento asíncrono y seguro.
            // Para el MVP inicial, si usas Expo, puedes usar Expo SecureStore o AsyncStorage.
            return localStorage.getItem(key); // Usando localStorage para pruebas iniciales o Web
        },
        setItem: (key, value) => {
            return localStorage.setItem(key, value);
        },
        removeItem: (key) => {
            return localStorage.removeItem(key);
        },
    },
    autoRefreshToken: true, // Auto-refresco de tokens [18]
    persistSession: true,
    detectSessionInUrl: false,
  },
});