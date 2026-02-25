export type Board = "CBSE" | "ICSE" | "State Board";

export interface Topic {
  id: string;
  name: string;
  animationCount: number;
  description: string;
}

export interface SubjectData {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  topics: Topic[];
}

export interface ClassData {
  class: number;
  subjects: SubjectData[];
}

const physicsTopics: Record<string, Topic[]> = {
  "8": [
    { id: "force-pressure", name: "Force and Pressure", animationCount: 3, description: "Understanding forces, pressure and their effects" },
    { id: "friction", name: "Friction", animationCount: 2, description: "Types of friction and their applications" },
    { id: "sound", name: "Sound", animationCount: 3, description: "Production and propagation of sound" },
    { id: "light", name: "Light", animationCount: 4, description: "Reflection, refraction and dispersion" },
  ],
  "9": [
    { id: "motion", name: "Motion", animationCount: 4, description: "Distance, displacement, velocity and acceleration" },
    { id: "force-laws", name: "Force and Laws of Motion", animationCount: 3, description: "Newton's three laws of motion" },
    { id: "gravitation", name: "Gravitation", animationCount: 3, description: "Universal law of gravitation and free fall" },
    { id: "work-energy", name: "Work and Energy", animationCount: 3, description: "Work, energy and power concepts" },
  ],
  "10": [
    { id: "electricity", name: "Electricity", animationCount: 5, description: "Electric current, circuits and Ohm's law" },
    { id: "magnetic-effects", name: "Magnetic Effects of Current", animationCount: 3, description: "Electromagnetic induction and motors" },
    { id: "light-reflection", name: "Light - Reflection & Refraction", animationCount: 4, description: "Mirrors, lenses and image formation" },
    { id: "human-eye", name: "Human Eye and Colourful World", animationCount: 3, description: "Eye defects, prism and scattering" },
  ],
  "11": [
    { id: "kinematics", name: "Kinematics", animationCount: 5, description: "Motion in straight line and plane" },
    { id: "laws-of-motion", name: "Laws of Motion", animationCount: 4, description: "Force, inertia, friction and circular motion" },
    { id: "work-energy-power", name: "Work, Energy and Power", animationCount: 3, description: "Conservative forces and collisions" },
    { id: "rotational-motion", name: "Rotational Motion", animationCount: 4, description: "Torque, angular momentum and rolling" },
    { id: "gravitation-11", name: "Gravitation", animationCount: 3, description: "Kepler's laws and orbital motion" },
  ],
  "12": [
    { id: "electric-charges", name: "Electric Charges and Fields", animationCount: 4, description: "Coulomb's law and electric field lines" },
    { id: "current-electricity", name: "Current Electricity", animationCount: 3, description: "Kirchhoff's laws and Wheatstone bridge" },
    { id: "electromagnetic-induction", name: "Electromagnetic Induction", animationCount: 4, description: "Faraday's law and AC generators" },
    { id: "optics", name: "Ray Optics and Optical Instruments", animationCount: 5, description: "Mirrors, lenses, microscopes and telescopes" },
    { id: "wave-optics", name: "Wave Optics", animationCount: 3, description: "Interference, diffraction and polarization" },
  ],
};

const chemistryTopics: Record<string, Topic[]> = {
  "8": [
    { id: "synthetic-fibres", name: "Synthetic Fibres and Plastics", animationCount: 2, description: "Types of synthetic materials" },
    { id: "metals-nonmetals-8", name: "Metals and Non-Metals", animationCount: 3, description: "Properties and reactions" },
    { id: "combustion", name: "Combustion and Flame", animationCount: 2, description: "Types of combustion and flame zones" },
  ],
  "9": [
    { id: "matter", name: "Matter in Our Surroundings", animationCount: 3, description: "States of matter and changes" },
    { id: "atoms-molecules", name: "Atoms and Molecules", animationCount: 3, description: "Atomic theory and molecular formula" },
    { id: "structure-atom", name: "Structure of the Atom", animationCount: 4, description: "Electron configuration and models" },
  ],
  "10": [
    { id: "chemical-reactions", name: "Chemical Reactions and Equations", animationCount: 4, description: "Types of reactions and balancing" },
    { id: "acids-bases", name: "Acids, Bases and Salts", animationCount: 3, description: "pH scale and neutralization" },
    { id: "periodic-classification", name: "Periodic Classification", animationCount: 3, description: "Modern periodic table trends" },
  ],
  "11": [
    { id: "atomic-structure", name: "Structure of Atom", animationCount: 5, description: "Quantum model and orbitals" },
    { id: "chemical-bonding", name: "Chemical Bonding", animationCount: 4, description: "Ionic, covalent and metallic bonds" },
    { id: "thermodynamics-chem", name: "Thermodynamics", animationCount: 3, description: "Enthalpy, entropy and Gibbs energy" },
  ],
  "12": [
    { id: "solutions", name: "Solutions", animationCount: 3, description: "Colligative properties and Raoult's law" },
    { id: "electrochemistry", name: "Electrochemistry", animationCount: 4, description: "Galvanic cells and electrolysis" },
    { id: "chemical-kinetics", name: "Chemical Kinetics", animationCount: 3, description: "Rate laws and reaction mechanisms" },
  ],
};

const mathTopics: Record<string, Topic[]> = {
  "8": [
    { id: "rational-numbers", name: "Rational Numbers", animationCount: 2, description: "Properties of rational numbers" },
    { id: "linear-equations-8", name: "Linear Equations", animationCount: 3, description: "Solving linear equations in one variable" },
    { id: "mensuration", name: "Mensuration", animationCount: 3, description: "Areas and volumes of shapes" },
  ],
  "9": [
    { id: "polynomials", name: "Polynomials", animationCount: 3, description: "Zeros and factorization of polynomials" },
    { id: "coordinate-geometry", name: "Coordinate Geometry", animationCount: 3, description: "Cartesian plane and plotting" },
    { id: "triangles-9", name: "Triangles", animationCount: 3, description: "Congruence and similarity" },
  ],
  "10": [
    { id: "quadratic-equations", name: "Quadratic Equations", animationCount: 3, description: "Roots, discriminant and applications" },
    { id: "trigonometry", name: "Trigonometry", animationCount: 4, description: "Ratios, identities and applications" },
    { id: "circles", name: "Circles", animationCount: 3, description: "Tangents, secants and theorems" },
  ],
  "11": [
    { id: "sets-functions", name: "Sets and Functions", animationCount: 3, description: "Set operations and types of functions" },
    { id: "limits-derivatives", name: "Limits and Derivatives", animationCount: 4, description: "Concept of limits and differentiation" },
    { id: "conic-sections", name: "Conic Sections", animationCount: 4, description: "Circle, ellipse, parabola and hyperbola" },
  ],
  "12": [
    { id: "matrices", name: "Matrices and Determinants", animationCount: 4, description: "Matrix operations and applications" },
    { id: "integration", name: "Integrals", animationCount: 5, description: "Definite and indefinite integrals" },
    { id: "vectors-3d", name: "Vectors and 3D Geometry", animationCount: 4, description: "Vector algebra and 3D shapes" },
  ],
};

const biologyTopics: Record<string, Topic[]> = {
  "8": [
    { id: "cell-structure", name: "Cell - Structure and Functions", animationCount: 3, description: "Cell organelles and their functions" },
    { id: "reproduction-8", name: "Reproduction in Animals", animationCount: 2, description: "Sexual and asexual reproduction" },
  ],
  "9": [
    { id: "tissues", name: "Tissues", animationCount: 3, description: "Plant and animal tissues" },
    { id: "diversity-organisms", name: "Diversity in Living Organisms", animationCount: 3, description: "Classification of organisms" },
  ],
  "10": [
    { id: "life-processes", name: "Life Processes", animationCount: 4, description: "Nutrition, respiration, transport and excretion" },
    { id: "heredity", name: "Heredity and Evolution", animationCount: 3, description: "Mendel's laws and evolution" },
  ],
  "11": [
    { id: "cell-biology", name: "Cell Biology", animationCount: 4, description: "Cell cycle, division and transport" },
    { id: "plant-physiology", name: "Plant Physiology", animationCount: 4, description: "Photosynthesis and respiration" },
  ],
  "12": [
    { id: "genetics", name: "Genetics and Evolution", animationCount: 5, description: "Molecular basis of inheritance" },
    { id: "biotechnology", name: "Biotechnology", animationCount: 3, description: "Principles and applications" },
    { id: "ecology", name: "Ecology", animationCount: 3, description: "Ecosystems and biodiversity" },
  ],
};

export function getSubjectsForClass(classNum: number): SubjectData[] {
  const cls = String(classNum);
  return [
    { id: "physics", name: "Physics", icon: "⚡", gradient: "gradient-physics", topics: physicsTopics[cls] || [] },
    { id: "chemistry", name: "Chemistry", icon: "🧪", gradient: "gradient-chemistry", topics: chemistryTopics[cls] || [] },
    { id: "mathematics", name: "Mathematics", icon: "📐", gradient: "gradient-math", topics: mathTopics[cls] || [] },
    { id: "biology", name: "Biology", icon: "🧬", gradient: "gradient-biology", topics: biologyTopics[cls] || [] },
  ];
}

export const boards: Board[] = ["CBSE", "ICSE", "State Board"];
export const classes = [8, 9, 10, 11, 12];
