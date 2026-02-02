
import React from 'react';
import { PlayerPosition } from '../types';

interface TacticsViewProps {
  selectedPosition: PlayerPosition | null;
}

const TacticsView: React.FC<TacticsViewProps> = ({ selectedPosition }) => {
  const generalTactics = [
    { title: "Presión tras pérdida", desc: "Reactividad inmediata para recuperar el balón en los primeros 5 segundos." },
    { title: "Basculación Defensiva", desc: "Movimiento coordinado del bloque hacia la zona activa del balón." },
    { title: "Salida de Balón Lavolpiana", desc: "Centrales abiertos y pivote bajando para generar superioridad." }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 animate-in slide-in-from-right-4 duration-500">
      <h2 className="text-4xl font-extrabold mb-2">Análisis <span className="text-emerald-500">Táctico</span></h2>
      <p className="text-slate-400 mb-10">Domina los conceptos estratégicos que marcan la diferencia en el campo.</p>

      {selectedPosition && (
        <section className="mb-12 bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-emerald-400">
            <span>📋</span> Consejos para el {selectedPosition}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-200">En Fase Ofensiva</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Busca siempre generar líneas de pase. Si eres un jugador exterior, prioriza la amplitud para estirar la defensa rival. Si juegas por dentro, busca el "tercer hombre" para romper líneas.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-slate-200">En Fase Defensiva</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mantén la distancia adecuada con tus compañeros de línea. La comunicación es vital: orienta a tus compañeros y mantén la vigilancia sobre los desmarques de ruptura.
              </p>
            </div>
          </div>
        </section>
      )}

      <h3 className="text-xl font-bold mb-6">Conceptos Globales</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {generalTactics.map((t, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 font-bold mb-4">
              {idx + 1}
            </div>
            <h4 className="font-bold mb-2 text-slate-100">{t.title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TacticsView;
