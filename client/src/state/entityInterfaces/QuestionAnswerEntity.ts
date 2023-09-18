import {QuestionnaireResultEntity} from "../reducers/questionnaireResult/create";

export interface QuestionAnswerEntity {
  '@id': string,
  id: number,
  questionnaireResult: QuestionnaireResultEntity

}