import { ActionType} from "../../action-types";
import {
  QuestionnaireResultCreateCommonAction,
  QuestionnaireResultCreateResetAction
} from "../../actions";
import {Dispatch} from "redux";
import {fetch} from "../../../utils/fetch";

export const createQuestionnaireResult = (questionnaireIRI: string) => {
  return async (dispatch: Dispatch<QuestionnaireResultCreateCommonAction>) => {
    dispatch({type: ActionType.QUESTIONNAIRE_RESULT_CREATE});

    const options = {
      'method': 'POST',
      'data': {'questionnaire': questionnaireIRI}
    }

    try {
      const { data } = await fetch('/api/questionnaire_results', options);

      dispatch({
        type: ActionType.QUESTIONNAIRE_RESULT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.QUESTIONNAIRE_RESULT_CREATE_ERROR,
          payload: err.message,
        });
      }
    }
  }
}

export function resetCreateQuestionnaireResult() {
  return (dispatch: Dispatch<QuestionnaireResultCreateResetAction>) => {
    dispatch({
      type: ActionType.QUESTIONNAIRE_RESULT_CREATE_RESET,
    });
  }
}
