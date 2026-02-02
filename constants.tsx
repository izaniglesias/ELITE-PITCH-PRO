
import { PlayerPosition, Exercise } from './types';

export const DRILLS: Exercise[] = [
  // ==========================================
  // PORTERO (Goalkeeper)
  // ==========================================
  { id: 'p_tech_1', name: 'Reflejos a Quemarropa', description: 'Paradas de disparos rápidos desde corta distancia.', duration: '15 min', intensity: 'Alta', category: 'Técnico', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_1', name: 'Sentadilla con Salto', description: 'Explosividad pura para mejorar el impulso inicial en estiradas.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_2', name: 'Saltos al Cajón (Box Jumps)', description: 'Potencia reactiva para salidas rápidas y bloqueos aéreos.', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_3', name: 'Peso Muerto Rumano', description: 'Fortalecimiento de isquiotibiales para prevenir lesiones en el salto.', duration: '25 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_4', name: 'Press de Banca Explosivo', description: 'Fuerza de empuje necesaria para despejes de puños potentes.', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_5', name: 'Lanzamiento Balón Medicinal', description: 'Simula el movimiento de saque de mano largo con potencia.', duration: '15 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_6', name: 'Plancha con Toques (Shoulder Taps)', description: 'Estabilidad de hombros y core para aterrizajes seguros.', duration: '12 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_7', name: 'Flexiones con Palmada', description: 'Desarrolla la fuerza explosiva en el tren superior para paradas rápidas.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_8', name: 'Zancada Lateral con Pesa', description: 'Mejora el desplazamiento lateral y la fuerza de empuje lateral.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_9', name: 'Pull-ups (Dominadas)', description: 'Fuerza de tracción y agarre para asegurar balones aéreos.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },
  { id: 'p_gym_10', name: 'Medicine Ball Slams', description: 'Potencia total del core y brazos para movimientos descendentes.', duration: '10 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.GOALKEEPER] },

  // ==========================================
  // DEFENSA CENTRAL (Center Back)
  // ==========================================
  { id: 'd_tech_1', name: 'Muro Defensivo 1vs1', description: 'Posicionamiento y timing en la entrada.', duration: '25 min', intensity: 'Alta', category: 'Táctico', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_1', name: 'Peso Muerto (Deadlift)', description: 'Fuerza absoluta para no ser desplazado en duelos físicos.', duration: '30 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_2', name: 'Sentadilla Trasera Pesada', description: 'Base sólida para ganar la posición y estabilidad en el salto.', duration: '30 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_3', name: 'Press Militar', description: 'Fuerza de hombros para el forcejeo en balones parados.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_4', name: 'Remo con Barra', description: 'Tracción necesaria para dominar al delantero en el cuerpo a cuerpo.', duration: '25 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_5', name: 'Farmer\'s Walk', description: 'Estabilidad de core y fuerza de agarre bajo fatiga.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_6', name: 'Copenhagen Plank', description: 'Fortalecimiento de aductores para prevenir lesiones en cambios de dirección.', duration: '10 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_7', name: 'Puente de Glúteo Pesado', description: 'Potencia de cadera para saltos verticales defensivos.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_8', name: 'Broad Jumps (Salto Longitud)', description: 'Cierre rápido de espacios y anticipación explosiva.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_9', name: 'Weighted Plank', description: 'Core inamovible para resistir cargas de delanteros pesados.', duration: '15 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },
  { id: 'd_gym_10', name: 'Face Pulls', description: 'Salud de hombros y postura para el juego aéreo constante.', duration: '12 min', intensity: 'Baja', category: 'Gimnasio', position: [PlayerPosition.DEFENDER] },

  // ==========================================
  // LATERAL (Fullback)
  // ==========================================
  { id: 'l_tech_1', name: 'Desdoblamiento y Centro', description: 'Carrera por banda y precisión en el centro.', duration: '20 min', intensity: 'Alta', category: 'Táctico', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_1', name: 'Sled Push (Empuje de Trineo)', description: 'Resistencia específica de carrera y fuerza de empuje.', duration: '25 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_2', name: 'Sentadilla Búlgara', description: 'Fuerza unilateral clave para el sprint y el centro.', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_3', name: 'Skater Jumps', description: 'Potencia lateral para cambios de ritmo y repliegues rápidos.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_4', name: 'Calf Raises (Gemelos)', description: 'Resistencia en los tobillos para los kilómetros recorridos por banda.', duration: '15 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_5', name: 'Walking Lunges con Peso', description: 'Estabilidad de rodilla y resistencia muscular en piernas.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_6', name: 'Dead Bug', description: 'Estabilidad de core profundo para aguantar la fatiga del partido.', duration: '10 min', intensity: 'Baja', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_7', name: 'Banded Side Steps', description: 'Fortalece el glúteo medio para duelos defensivos laterales.', duration: '12 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_8', name: 'Mountain Climbers', description: 'Acondicionamiento metabólico y fuerza de core dinámico.', duration: '10 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_9', name: 'Press de Pecho con Mancuernas', description: 'Fuerza de hombro para proteger banda en carrera.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },
  { id: 'l_gym_10', name: 'Russian Twists con Pesa', description: 'Rotación explosiva para despejes y centros en carrera.', duration: '12 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.LATERAL] },

  // ==========================================
  // CENTROCAMPISTA (Midfielder)
  // ==========================================
  { id: 'm_tech_1', name: 'Control y Giro 360', description: 'Recibir en espacios reducidos y orientar juego.', duration: '15 min', intensity: 'Alta', category: 'Técnico', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_1', name: 'Kettlebell Swings', description: 'Potencia de cadera para pases largos y cambios de frente.', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_2', name: 'Pallof Press', description: 'Resistencia a la rotación para proteger el balón bajo presión.', duration: '15 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_3', name: 'Goblet Squat', description: 'Centro de gravedad bajo para mayor equilibrio en el giro.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_4', name: 'Landmine Rotations', description: 'Potencia rotacional para cambios rápidos de dirección con balón.', duration: '18 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_5', name: 'Step-ups con Mancuernas', description: 'Control de pierna única para cambios de ritmo en el medio.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_6', name: 'Single Leg RDL', description: 'Equilibrio propioceptivo para evitar lesiones al pivotar.', duration: '15 min', intensity: 'Baja', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_7', name: 'Rowing Machine Sprints', description: 'Resistencia cardiovascular intermitente (Box to Box).', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_8', name: 'Hammer Curls', description: 'Fuerza de brazos para forcejeos constantes en la zona medular.', duration: '15 min', intensity: 'Baja', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_9', name: 'Box Step-ups', description: 'Fuerza ascendente para ganar duelos tras el rebote.', duration: '15 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },
  { id: 'm_gym_10', name: 'Dumbbell Thrusters', description: 'Potencia total para el despliegue físico durante 90 minutos.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.MIDFIELDER] },

  // ==========================================
  // EXTREMO (Winger)
  // ==========================================
  { id: 'w_tech_1', name: 'Desborde 1vs1', description: 'Finta y velocidad hacia línea de fondo.', duration: '20 min', intensity: 'Alta', category: 'Técnico', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_1', name: 'Power Clean', description: 'Máxima explosividad para la primera zancada del regate.', duration: '30 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_2', name: 'Jump Squats (Sentadilla Salto)', description: 'Aceleración vertical y horizontal inmediata.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_3', name: 'Lateral Box Jumps', description: 'Velocidad de pies para cambios de dirección eléctricos.', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_4', name: 'Prowler Sprints', description: 'Fuerza de empuje en carrera a máxima velocidad.', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_5', name: 'Medicine Ball Chest Pass', description: 'Potencia tren superior para ganar el primer hombro.', duration: '15 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_6', name: 'A-Skips con Resistencia', description: 'Técnica de carrera optimizada para el sprint por banda.', duration: '12 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_7', name: 'Renegade Row', description: 'Core y estabilidad para no desequilibrarse en carrera.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_8', name: 'Single Leg Glute Bridge', description: 'Activación de cadena posterior para arranques potentes.', duration: '12 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_9', name: 'Saltos de Cuerda Pesada', description: 'Elasticidad y reactividad en los gemelos para el desborde.', duration: '10 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.WINGER] },
  { id: 'w_gym_10', name: 'Wall Sit', description: 'Resistencia isométrica para frenadas bruscas y giros.', duration: '10 min', intensity: 'Baja', category: 'Gimnasio', position: [PlayerPosition.WINGER] },

  // ==========================================
  // DELANTERO (Forward)
  // ==========================================
  { id: 'f_tech_1', name: 'Finalización Explosiva', description: 'Desmarques cortos y tiro a puerta.', duration: '20 min', intensity: 'Alta', category: 'Técnico', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_1', name: 'Front Squat (Sentadilla Frontal)', description: 'Fuerza de cuádriceps pura para potencia de tiro máxima.', duration: '30 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_2', name: 'Hip Thrust (Empuje Cadera)', description: 'Potencia de glúteo para arranques cortos explosivos.', duration: '25 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_3', name: 'Chin-ups con Peso', description: 'Fuerza de tracción para ganar la posición al defensa central.', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_4', name: 'Medicine Ball Slams', description: 'Potencia total para remates agresivos y rápidos.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_5', name: 'Prensa de Piernas Pesada', description: 'Fuerza bruta en piernas para proteger balón de espaldas.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_6', name: 'Dumbbell Snatch', description: 'Potencia explosiva unilateral para ganar balones divididos.', duration: '20 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_7', name: 'Hollow Body Hold', description: 'Core firme para transferir potencia al golpeo de balón.', duration: '12 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_8', name: 'Pistol Squats (Progresión)', description: 'Equilibrio y fuerza extrema a una pierna para tiros forzados.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_9', name: 'Bulgarian Split Squat con Salto', description: 'Potencia de salto a una pierna para remates de cabeza.', duration: '15 min', intensity: 'Alta', category: 'Gimnasio', position: [PlayerPosition.FORWARD] },
  { id: 'f_gym_10', name: 'Incline Bench Press', description: 'Fuerza de empuje superior para duelos frontales con el portero.', duration: '20 min', intensity: 'Media', category: 'Gimnasio', position: [PlayerPosition.FORWARD] }
];

export const POSITION_DATA = {
  [PlayerPosition.GOALKEEPER]: { color: 'bg-yellow-500', icon: '🧤', focus: 'Reflejos, Salto, Blocaje' },
  [PlayerPosition.DEFENDER]: { color: 'bg-blue-600', icon: '🛡️', focus: 'Fuerza, Juego Aéreo, Anticipación' },
  [PlayerPosition.LATERAL]: { color: 'bg-cyan-500', icon: '🏃', focus: 'Resistencia, Centros, Velocidad' },
  [PlayerPosition.MIDFIELDER]: { color: 'bg-green-500', icon: '🎯', focus: 'Visión, Pase Corto, Control' },
  [PlayerPosition.WINGER]: { color: 'bg-purple-500', icon: '⚡', focus: 'Regate, Aceleración, 1vs1' },
  [PlayerPosition.FORWARD]: { color: 'bg-red-500', icon: '🔥', focus: 'Definición, Desmarque, Potencia' }
};
