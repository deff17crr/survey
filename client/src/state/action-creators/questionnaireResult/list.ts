import { ActionType} from "../../action-types";
import { QuestionnaireResultsListCommonAction} from "../../actions";
import {Dispatch} from "redux";
import {fetch} from "../../../utils/fetch";

export const listQuestionnaireResults = (order = {}) => {
  return async (dispatch: Dispatch<QuestionnaireResultsListCommonAction>) => {
    dispatch({type: ActionType.QUESTIONNAIRE_RESULT_LIST});

    let urlParams = new URLSearchParams(order);
    const url = '/questionnaire_results?' + decodeURIComponent(urlParams.toString());

    try {
      const { data } = await fetch(url);

      dispatch({
        type: ActionType.QUESTIONNAIRE_RESULT_LIST_SUCCESS,
        payload: data['hydra:member'],
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.QUESTIONNAIRE_RESULT_LIST_ERROR,
          payload: err.message,
        });
      }
    }
  }
}
