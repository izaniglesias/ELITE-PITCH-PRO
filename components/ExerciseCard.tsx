
import React from 'react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const intensityColor = {
    'Baja': 'text-green-400',
    'Media': 'text-yellow-400',
    'Alta': 'text-red-400'
  };

  const categoryStyles = {
    'Gimnasio': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Físico': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Técnico': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'Táctico': 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  };

  const badgeClass = categoryStyles[exercise.category as keyof typeof categoryStyles] || categoryStyles['Técnico'];

  return (
    <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-xl hover:border-emerald-500/50 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-slate-100">{exercise.name}</h3>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeClass} uppercase`}>
          {exercise.category}
        </span>
      </div>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {exercise.description}
      </p>
      <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500">Duración:</span>
          <span className="text-slate-300">{exercise.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500">Intensidad:</span>
          <span className={intensityColor[exercise.intensity as keyof typeof intensityColor]}>
            {exercise.intensity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
