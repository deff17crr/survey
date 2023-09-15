import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import {Dispatch} from "redux";
import {fetch} from "../../utils/fetch";

export const listQuestionnaires = (filters = {}) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.LIST_QUESTIONNAIRE});

    try {
      const { data } = await fetch('/questionnaires', filters);

      dispatch({
        type: ActionType.LIST_QUESTIONNAIRE_SUCCESS,
        payload: data['hydra:member'],
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.LIST_QUESTIONNAIRE_ERROR,
          payload: err.message,
        });
      }
    }
  }
}
