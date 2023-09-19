import {QuestionnaireEntity} from "./QuestionnaireEntity";
import {QuestionAnswerEntity} from "./QuestionAnswerEntity";

export interface QuestionnaireResultEntity {
  '@id': string,
  id: number,
  questionnaire: QuestionnaireEntity,
  completedAt: string|null,
  questionAnswersQuantity: number,
  lastAnsweredQuestionOrder: number,
  questionAnswers: QuestionAnswerEntity[],
}