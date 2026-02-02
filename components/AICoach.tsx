
import React, { useState } from 'react';
import { PlayerPosition, Routine } from '../types';
import { generateCustomRoutine } from '../services/geminiService';
import ExerciseCard from './ExerciseCard';

interface AICoachProps {
  initialPosition: PlayerPosition;
}

const AICoach: React.FC<AICoachProps> = ({ initialPosition }) => {
  const [loading, setLoading] = useState(false);
  const [routine, setRoutine] = useState<Routine | null>(null);
  const [focus, setFocus] = useState('');
  const [duration, setDuration] = useState(30);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateCustomRoutine(initialPosition, focus || 'Mejora general', duration);
      setRoutine(result);
    } catch (error) {
      alert("Hubo un error generando la rutina. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-emerald-600/20 to-transparent">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span>🤖</span> Entrenador IA Personalizado
        </h2>
        <p className="text-slate-400 text-sm">Define tus objetivos y deja que la IA cree tu plan de hoy.</p>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1.5">¿En qué quieres enfocarte?</label>
          <input
            type="text"
            placeholder="Ej: Velocidad explosiva, Visión de juego, Salto..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1.5">Duración (minutos): {duration}</label>
          <input
            type="range"
            min="15"
            max="120"
            step="5"
            className="w-full accent-emerald-500"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Generando Plan...
            </>
          ) : 'Generar Rutina Inteligente'}
        </button>
      </div>

      {routine && (
        <div className="p-6 bg-slate-800/30 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{routine.title}</h3>
            <p className="text-slate-400 italic text-sm mb-2">{routine.description}</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              Tiempo Total: {routine.estimatedTime}
            </div>
          </div>
          <div className="space-y-4">
            {routine.exercises.map((ex, idx) => (
              <ExerciseCard key={idx} exercise={{ ...ex, id: `ai-${idx}`, position: [initialPosition] } as any} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AICoach;
