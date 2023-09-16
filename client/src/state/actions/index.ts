import {ActionType} from "../action-types";
import {QuestionnaireResultEntity} from "../reducers/questionnaireResultCreateReducer";

export interface ListQuestionnaireAction {
  type: ActionType.QUESTIONNAIRE_LIST
}

export interface ListQuestionnaireSuccessAction {
  type: ActionType.QUESTIONNAIRE_LIST_SUCCESS
  payload: [],
}

export interface ListQuestionnaireErrorAction {
  type: ActionType.QUESTIONNAIRE_LIST_ERROR
  payload: string
}

export type Action = ListQuestionnaireAction | ListQuestionnaireSuccessAction | ListQuestionnaireErrorAction;
export interface QuestionnaireResultCreateAction {
  type: ActionType.QUESTIONNAIRE_RESULT_CREATE,
}

export interface QuestionnaireResultCreateSuccessAction {
  type: ActionType.QUESTIONNAIRE_RESULT_CREATE_SUCCESS,
  payload: QuestionnaireResultEntity,
}

export interface QuestionnaireResultCreateErrorAction {
  type: ActionType.QUESTIONNAIRE_RESULT_CREATE_ERROR,
  payload: string
}

export type QuestionnaireResultCreateCommonAction = QuestionnaireResultCreateAction | QuestionnaireResultCreateSuccessAction | QuestionnaireResultCreateErrorAction;
