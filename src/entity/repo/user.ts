import { Authorities } from './default';

export interface GetUserInfoParmas {
  authorities: Authorities;
  id: number;
}

export interface DetailUserInfoResponse {
  height: number;
  myParticipation: SimpleExerciseParticipationDto[];
  nickName: string;
  weight: number;
}

interface SimpleExerciseParticipationDto {
  id: number;
  scope: 'PUBLIC' | 'PRIVATE';
  score: number;
  userName: string;
}

export interface UpdateUserInfoParams {
  authorities: Authorities;
  id: number;
}

export interface UpdateUserInfoRequest {
  height: number;
  nickName: string;
  weight: number;
}

export interface SimpleUserInfoResponse {
  height: number;
  nickName: string;
  weight: number;
}
