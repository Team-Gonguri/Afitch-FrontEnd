export interface CategoryType {
  category: 'WHOLE' | 'ARM' | 'LEG' | 'ABDOMINAL' | 'CHEST';
}

export interface GetExercisesRes {
  exercises: SimpleExerciseDto[];
}

export interface SimpleExerciseDto {
  id: number;
  name: string;
}

export interface GetExercisesParams {
  category: CategoryType;
}

export interface GetExerciseDetailParams {
  exerciseId: string;
}

export interface GetExerciseDetailRes {
  category: CategoryType;
  expertURL: string;
  name: string;
}

export interface GetCategoriesRes {
  categories: CategoryType;
}
