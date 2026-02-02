
import React, { useState, useMemo } from 'react';
import PitchView from './components/PitchView';
import ExerciseCard from './components/ExerciseCard';
import AICoach from './components/AICoach';
import TacticsView from './components/TacticsView';
import ProgressView from './components/ProgressView';
import { PlayerPosition } from './types';
import { DRILLS, POSITION_DATA } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'training' | 'tactics' | 'progress'>('training');
  const [selectedPosition, setSelectedPosition] = useState<PlayerPosition | null>(null);
  const [view, setView] = useState<'standard' | 'ai'>('standard');
  const [activeCategory, setActiveCategory] = useState<string | 'All'>('All');

  const filteredDrills = useMemo(() => {
    if (!selectedPosition) return [];
    let drills = DRILLS.filter(drill => drill.position.includes(selectedPosition));
    if (activeCategory !== 'All') {
      drills = drills.filter(drill => drill.category === activeCategory);
    }
    return drills;
  }, [selectedPosition, activeCategory]);

  const categories = ['All', 'Técnico', 'Táctico', 'Gimnasio', 'Físico'];

  const renderContent = () => {
    switch (activeSection) {
      case 'tactics':
        return <TacticsView selectedPosition={selectedPosition} />;
      case 'progress':
        return <ProgressView />;
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in duration-500">
            {/* Left Column: Selector & Field */}
            <div className="lg:col-span-5 space-y-8">
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-bold">Posición en <span className="text-emerald-500">Campo</span></h2>
                </div>
                <p className="text-slate-400 mb-8 max-w-md">
                  Toca una posición para ver su rutina específica, incluyendo el entrenamiento en gimnasio.
                </p>
                <PitchView 
                  selectedPosition={selectedPosition}
                  onSelectPosition={setSelectedPosition}
                />
              </section>

              {selectedPosition && (
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${POSITION_DATA[selectedPosition].color} bg-opacity-10 border-emerald-500/20`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{POSITION_DATA[selectedPosition].icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{selectedPosition}</h3>
                      <p className="text-sm opacity-70">Perfil de jugador profesional</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Enfoque Clave</p>
                    <p className="text-slate-200">{POSITION_DATA[selectedPosition].focus}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Drills & IA */}
            <div className="lg:col-span-7">
              {!selectedPosition ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-slate-800 rounded-3xl bg-slate-900/20">
                  <div className="text-6xl mb-6 opacity-20">⚽</div>
                  <h3 className="text-xl font-bold text-slate-400">Selecciona tu rol táctico</h3>
                  <p className="text-slate-500 mt-2">Explora los ejercicios base o genera un plan con IA.</p>
                </div>
              ) : (
                <div className="space-y-8 animate-in fade-in duration-700">
                  {/* View Switcher */}
                  <div className="flex p-1 bg-slate-900 rounded-xl w-fit">
                    <button 
                      onClick={() => setView('standard')}
                      className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'standard' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Rutinas Pro
                    </button>
                    <button 
                      onClick={() => setView('ai')}
                      className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${view === 'ai' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      <span>✨</span> Coach IA
                    </button>
                  </div>

                  {view === 'standard' ? (
                    <div className="space-y-6">
                      {/* Category Filter */}
                      <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                          <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                              activeCategory === cat 
                              ? 'bg-emerald-500 border-emerald-400 text-white' 
                              : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700'
                            }`}
                          >
                            {cat === 'All' ? 'Todo' : cat}
                          </button>
                        ))}
                      </div>

                      <div className="flex justify-between items-end">
                        <h2 className="text-2xl font-bold">
                          {activeCategory === 'Gimnasio' ? 'Rutina de Gimnasio' : `Ejercicios: ${selectedPosition}`}
                        </h2>
                        <span className="text-sm text-slate-500">{filteredDrills.length} ejercicios</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredDrills.map(drill => (
                          <ExerciseCard key={drill.id} exercise={drill} />
                        ))}
                      </div>
                      {filteredDrills.length === 0 && (
                        <p className="text-slate-500 italic text-center py-12">No hay ejercicios específicos para esta categoría todavía.</p>
                      )}
                    </div>
                  ) : (
                    <AICoach initialPosition={selectedPosition} />
                  )}
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('training')}>
            <div className="bg-emerald-500 p-2 rounded-lg">
              <span className="text-xl">⚽</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">ELITE <span className="text-emerald-500">PITCH</span> PRO</h1>
          </div>
          <div className="flex gap-4 md:gap-8 text-sm font-semibold">
            <button 
              onClick={() => setActiveSection('training')}
              className={`transition-colors ${activeSection === 'training' ? 'text-emerald-500' : 'text-slate-400 hover:text-emerald-500'}`}
            >
              Ejercicios
            </button>
            <button 
              onClick={() => setActiveSection('tactics')}
              className={`transition-colors ${activeSection === 'tactics' ? 'text-emerald-500' : 'text-slate-400 hover:text-emerald-500'}`}
            >
              Tácticas
            </button>
            <button 
              onClick={() => setActiveSection('progress')}
              className={`transition-colors ${activeSection === 'progress' ? 'text-emerald-500' : 'text-slate-400 hover:text-emerald-500'}`}
            >
              Progreso
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">
        {renderContent()}
      </main>

      <footer className="mt-20 border-t border-white/5 py-12 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-800 p-1.5 rounded-lg">
                  <span className="text-lg">⚽</span>
                </div>
                <h1 className="text-lg font-bold tracking-tight">ELITE PITCH PRO</h1>
              </div>
              <p className="text-slate-500 text-sm">© 2024 Elite Pitch Pro. Optimiza tu rendimiento físico y táctico.</p>
          </div>
          <div className="flex gap-8 text-slate-400 text-sm font-medium">
            <a href="#" className="hover:text-emerald-500">Privacidad</a>
            <a href="#" className="hover:text-emerald-500">Términos</a>
            <a href="#" className="hover:text-emerald-500">Soporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
