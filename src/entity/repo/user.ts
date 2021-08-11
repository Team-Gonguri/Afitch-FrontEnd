export interface GetUserInfoParmas {
  authorities: 'ROLE_USER' | 'ROLE_ADMIN';
  id: number;
}

export interface DetailUserInfoResponse {
  height: number;
  myParticipation: SimpleExerciseParticipationDto[];
  nickName: string;
  weight: number;
}

export interface SimpleExerciseParticipationDto {
  id: number;
  scope: 'PUBLIC' | 'PRIVATE';
  score: number;
  userName: string;
}
