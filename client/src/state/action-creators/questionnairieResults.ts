import { ActionType } from "../action-types";
import { Action } from "../actions";
import {Dispatch} from "redux";
import {fetch} from "../../utils/fetch";

export const createQuestionnaireResult = (questionnaireIRI: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({type: ActionType.LIST_QUESTIONNAIRE});

    const options = {
      'method': 'POST',
      'data': {'questionnaire': questionnaireIRI}
    }

    try {
      const { data } = await fetch('/questionnaire_results', options);

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
