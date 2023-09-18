import { ActionType} from "../../action-types";
import {QuestionnaireResultsGetCommonAction, QuestionnaireResultsListCommonAction} from "../../actions";
import {Dispatch} from "redux";
import {fetch} from "../../../utils/fetch";

export const getQuestionnaireResult = (iri: string) => {
  return async (dispatch: Dispatch<QuestionnaireResultsGetCommonAction>) => {
    dispatch({type: ActionType.QUESTIONNAIRE_RESULT_GET});

    try {
      const { data } = await fetch(iri);

      dispatch({
        type: ActionType.QUESTIONNAIRE_RESULT_GET_SUCCESS,
        payload: data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.QUESTIONNAIRE_RESULT_GET_ERROR,
          payload: err.message,
        });
      }
    }
  }
}
