interface UserFitnessListProps {
  name: string;
  id: number;
  url?: string;
}

export interface UserFitness {
  fitness: UserFitnessListProps[];
  exerciseId: string;
}
