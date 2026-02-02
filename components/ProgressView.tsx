
import React from 'react';

const ProgressView: React.FC = () => {
  const stats = [
    { label: "Días Seguidos", value: "12", icon: "🔥", color: "text-orange-400" },
    { label: "Ejercicios", value: "148", icon: "✅", color: "text-emerald-400" },
    { label: "Horas Entrenadas", value: "42.5", icon: "⏱️", color: "text-blue-400" },
    { label: "Nivel Pro", value: "14", icon: "🏆", color: "text-yellow-400" }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 animate-in slide-in-from-right-4 duration-500">
      <h2 className="text-4xl font-extrabold mb-2">Panel de <span className="text-emerald-500">Progreso</span></h2>
      <p className="text-slate-400 mb-10">Mide tu evolución y alcanza tu máximo potencial físico.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl text-center">
            <span className="text-3xl mb-2 block">{s.icon}</span>
            <div className={`text-3xl font-black mb-1 ${s.color}`}>{s.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-6">Actividad Reciente</h3>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-10 bg-emerald-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-200">Sesión de Gimnasio - Potencia</p>
                  <p className="text-xs text-slate-500">Hace {i} día(s) • 45 min</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
          <div className="relative w-32 h-32 mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
              <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="364" strokeDashoffset="91" className="text-emerald-500" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-black text-2xl">75%</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Objetivo Semanal</h3>
          <p className="text-slate-400 text-sm">¡Estás a solo 2 sesiones de completar tu meta de esta semana!</p>
          <button className="mt-6 px-6 py-2 bg-emerald-600 rounded-full text-xs font-bold hover:bg-emerald-500 transition-colors">
            Ver Detalles
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProgressView;
