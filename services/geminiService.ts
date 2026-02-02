
import { GoogleGenAI, Type } from "@google/genai";
import { PlayerPosition } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateCustomRoutine = async (position: PlayerPosition, focus: string, duration: number) => {
  const model = 'gemini-3-flash-preview';
  
  const prompt = `Genera una rutina de entrenamiento de fútbol para la posición de ${position}. 
  El enfoque principal debe ser: ${focus}. 
  La duración total debe ser de aproximadamente ${duration} minutos.
  Incluye ejercicios específicos con nombre, descripción detallada, duración de cada uno e intensidad.`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          estimatedTime: { type: Type.STRING },
          exercises: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                description: { type: Type.STRING },
                duration: { type: Type.STRING },
                intensity: { type: Type.STRING },
                category: { type: Type.STRING }
              },
              required: ["name", "description", "duration", "intensity"]
            }
          }
        },
        required: ["title", "description", "exercises", "estimatedTime"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error parsing Gemini response:", error);
    throw new Error("No se pudo generar la rutina personalizada.");
  }
};
