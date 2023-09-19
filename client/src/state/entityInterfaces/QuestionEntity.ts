import {QuestionOptionEntity} from "./QuestionOptionEntity";

export interface QuestionEntity {
  '@id': string,
  id: number,
  title: string,
  questionOptions: QuestionOptionEntity[],
  order: number,
}