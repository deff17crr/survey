import {QuestionEntity} from "./QuestionEntity";

export interface QuestionnaireEntity {
  '@id': string,
  id: number,
  title: string,
  questionsQuantity: number|undefined,
  questions: QuestionEntity[],
}