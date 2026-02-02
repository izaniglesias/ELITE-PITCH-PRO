
export enum PlayerPosition {
  GOALKEEPER = 'Portero',
  DEFENDER = 'Defensa Central',
  LATERAL = 'Lateral',
  MIDFIELDER = 'Centrocampista',
  WINGER = 'Extremo',
  FORWARD = 'Delantero'
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: string;
  intensity: 'Baja' | 'Media' | 'Alta';
  category: 'Físico' | 'Técnico' | 'Táctico' | 'Gimnasio';
  position: PlayerPosition[];
}

export interface Routine {
  title: string;
  description: string;
  exercises: Exercise[];
  estimatedTime: string;
}

export interface AIRoutineRequest {
  position: PlayerPosition;
  focus: string;
  duration: number;
}
