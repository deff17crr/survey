import {ActionType} from "../action-types";

export interface ListQuestionnaireAction {
  type: ActionType.LIST_QUESTIONNAIRE
}

export interface ListQuestionnaireSuccessAction {
  type: ActionType.LIST_QUESTIONNAIRE_SUCCESS
  payload: [],
}

export interface ListQuestionnaireErrorAction {
  type: ActionType.LIST_QUESTIONNAIRE_ERROR
  payload: string
}

export type Action = ListQuestionnaireAction | ListQuestionnaireSuccessAction | ListQuestionnaireErrorAction;