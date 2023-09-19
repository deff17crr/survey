import {QuestionnaireResultEntity} from "./QuestionnaireResultEntity";
import {QuestionEntity} from "./QuestionEntity";
import {QuestionOptionEntity} from "./QuestionOptionEntity";

export interface QuestionAnswerEntity {
  '@id': string,
  id: number,
  questionnaireResult: QuestionnaireResultEntity,
  correct?: boolean,
  question: QuestionEntity,
  selectedQuestionOptions: QuestionOptionEntity[],
}