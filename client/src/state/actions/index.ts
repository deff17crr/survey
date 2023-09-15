import {ActionType} from "../action-types";

export interface SearchRepositoriesAction {
  type: ActionType.LIST_QUESTIONNAIRE
}

export interface SearchRepositoriesSuccessAction {
  type: ActionType.LIST_QUESTIONNAIRE_SUCCESS
  payload: [],
}

export interface SearchRepositoriesErrorAction {
  type: ActionType.LIST_QUESTIONNAIRE_ERROR
  payload: string
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;