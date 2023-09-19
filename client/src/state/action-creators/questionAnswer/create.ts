import { ActionType} from "../../action-types";
import {QuestionAnswerCreateCommonAction} from "../../actions";
import {Dispatch} from "redux";
import {fetch} from "../../../utils/fetch";

export interface CreateQuestionAnswerData {
  questionnaireResult: string,
  question: string,
  selectedQuestionOptions: string[],
}

export const createQuestionAnswer = (data: CreateQuestionAnswerData) => {
  return async (dispatch: Dispatch<QuestionAnswerCreateCommonAction>) => {
    dispatch({type: ActionType.QUESTION_ANSWER_CREATE});

    const options = {
      'method': 'POST',
      'data': data,
    }

    try {
      const { data } = await fetch('/api/question_answers', options);

      dispatch({
        type: ActionType.QUESTION_ANSWER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.QUESTION_ANSWER_CREATE_ERROR,
          payload: err.message,
        });
      }
    }
  }
}

export function resetCreateQuestionAnswer() {
  return (dispatch: Dispatch<QuestionAnswerCreateCommonAction>) => {
    dispatch({
      type: ActionType.QUESTION_ANSWER_CREATE_RESET,
    });
  }
}
