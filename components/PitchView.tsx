
import React from 'react';
import { PlayerPosition } from '../types';

interface PitchViewProps {
  onSelectPosition: (pos: PlayerPosition) => void;
  selectedPosition: PlayerPosition | null;
}

const PitchView: React.FC<PitchViewProps> = ({ onSelectPosition, selectedPosition }) => {
  return (
    <div className="relative w-full max-w-2xl aspect-[2/3] md:aspect-[3/2] mx-auto pitch-gradient rounded-xl border-4 border-white/20 overflow-hidden shadow-2xl">
      {/* Field Markings */}
      <div className="absolute inset-0 border-2 border-white/30 m-4 rounded-lg pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Position Nodes */}
      <div className="absolute inset-0 flex flex-col justify-between py-10 px-4">
        {/* Row 1: Attackers (Extremos y Delanteros) */}
        <div className="flex justify-around items-center">
          <PositionNode 
            pos={PlayerPosition.WINGER} 
            isSelected={selectedPosition === PlayerPosition.WINGER} 
            onClick={() => onSelectPosition(PlayerPosition.WINGER)}
            label="EXT"
          />
          <PositionNode 
            pos={PlayerPosition.FORWARD} 
            isSelected={selectedPosition === PlayerPosition.FORWARD} 
            onClick={() => onSelectPosition(PlayerPosition.FORWARD)}
            label="DEL"
          />
          <PositionNode 
            pos={PlayerPosition.WINGER} 
            isSelected={selectedPosition === PlayerPosition.WINGER} 
            onClick={() => onSelectPosition(PlayerPosition.WINGER)}
            label="EXT"
          />
        </div>

        {/* Row 2: Midfielders */}
        <div className="flex justify-center gap-12">
          <PositionNode 
            pos={PlayerPosition.MIDFIELDER} 
            isSelected={selectedPosition === PlayerPosition.MIDFIELDER} 
            onClick={() => onSelectPosition(PlayerPosition.MIDFIELDER)}
            label="MC"
          />
        </div>

        {/* Row 3: Defensive Line (Laterales y Centrales) */}
        <div className="flex justify-between items-center px-4">
          <PositionNode 
            pos={PlayerPosition.LATERAL} 
            isSelected={selectedPosition === PlayerPosition.LATERAL} 
            onClick={() => onSelectPosition(PlayerPosition.LATERAL)}
            label="LAT"
          />
          <PositionNode 
            pos={PlayerPosition.DEFENDER} 
            isSelected={selectedPosition === PlayerPosition.DEFENDER} 
            onClick={() => onSelectPosition(PlayerPosition.DEFENDER)}
            label="DFC"
          />
          <PositionNode 
            pos={PlayerPosition.LATERAL} 
            isSelected={selectedPosition === PlayerPosition.LATERAL} 
            onClick={() => onSelectPosition(PlayerPosition.LATERAL)}
            label="LAT"
          />
        </div>

        {/* Row 4: Goalkeeper */}
        <div className="flex justify-center">
          <PositionNode 
            pos={PlayerPosition.GOALKEEPER} 
            isSelected={selectedPosition === PlayerPosition.GOALKEEPER} 
            onClick={() => onSelectPosition(PlayerPosition.GOALKEEPER)}
            label="POR"
          />
        </div>
      </div>
    </div>
  );
};

const PositionNode: React.FC<{ pos: PlayerPosition; isSelected: boolean; onClick: () => void; label: string }> = ({ pos, isSelected, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative flex flex-col items-center transition-all duration-300 transform
        ${isSelected ? 'scale-125 z-10' : 'hover:scale-110'}
      `}
    >
      <div className={`
        w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-[10px] md:text-sm font-bold
        ${isSelected ? 'bg-white text-emerald-900 ring-4 ring-emerald-400' : 'bg-emerald-800 text-white group-hover:bg-emerald-700'}
      `}>
        {label}
      </div>
      <span className={`
        mt-1 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider
        ${isSelected ? 'bg-white text-emerald-900' : 'bg-black/50 text-white'}
      `}>
        {pos}
      </span>
    </button>
  );
};

export default PitchView;
