import {QuestionnaireResultEntity} from "../reducers/questionnaireResult/create";
import {QuestionEntity, QuestionOptionEntity} from "../reducers/questionnaire/list";

export interface QuestionAnswerEntity {
  '@id': string,
  id: number,
  questionnaireResult: QuestionnaireResultEntity,
  correct?: boolean,
  question: QuestionEntity,
  selectedQuestionOptions: QuestionOptionEntity[],
}