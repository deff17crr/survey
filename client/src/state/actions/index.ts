import {ActionType} from "../action-types";
import {QuestionnaireResultEntity} from "../reducers/questionnaireResult/create";
import {QuestionAnswerEntity} from "../entityInterfaces/QuestionAnswerEntity";

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

export interface QuestionnaireResultsListAction {
  type: ActionType.QUESTIONNAIRE_RESULT_LIST,
}

export interface QuestionnaireResultsListSuccessAction {
  type: ActionType.QUESTIONNAIRE_RESULT_LIST_SUCCESS,
  payload: QuestionnaireResultEntity[],
}

export interface QuestionnaireResultsListErrorAction {
  type: ActionType.QUESTIONNAIRE_RESULT_LIST_ERROR,
  payload: string
}

export type QuestionnaireResultsListCommonAction = QuestionnaireResultsListAction | QuestionnaireResultsListSuccessAction | QuestionnaireResultsListErrorAction;


export interface QuestionnaireResultsGetAction {
  type: ActionType.QUESTIONNAIRE_RESULT_GET,
}

export interface QuestionnaireResultsGetSuccessAction {
  type: ActionType.QUESTIONNAIRE_RESULT_GET_SUCCESS,
  payload: QuestionnaireResultEntity,
}

export interface QuestionnaireResultsGetErrorAction {
  type: ActionType.QUESTIONNAIRE_RESULT_GET_ERROR,
  payload: string
}

export type QuestionnaireResultsGetCommonAction = QuestionnaireResultsGetAction | QuestionnaireResultsGetSuccessAction | QuestionnaireResultsGetErrorAction;

export interface QuestionAnswerCreateAction {
  type: ActionType.QUESTION_ANSWER_CREATE,
}

export interface QuestionAnswerCreateSuccessAction {
  type: ActionType.QUESTION_ANSWER_CREATE_SUCCESS,
  payload: QuestionAnswerEntity,
}

export interface QuestionAnswerCreateErrorAction {
  type: ActionType.QUESTION_ANSWER_CREATE_ERROR,
  payload: string
}

export interface QuestionAnswerCreateResetAction {
  type: ActionType.QUESTION_ANSWER_CREATE_RESET,
}

export type QuestionAnswerCreateCommonAction = QuestionAnswerCreateAction | QuestionAnswerCreateSuccessAction | QuestionAnswerCreateErrorAction | QuestionAnswerCreateResetAction;
