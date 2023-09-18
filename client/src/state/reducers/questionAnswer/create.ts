import {ActionType} from "../../action-types";
import {
  QuestionAnswerCreateCommonAction,
} from "../../actions";
import {QuestionAnswerEntity} from "../../entityInterfaces/QuestionAnswerEntity";

interface CreateQuestionAnswerState {
  loading: boolean,
  error: string | null
  data: QuestionAnswerEntity | null
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (
  state: CreateQuestionAnswerState = initialState,
  action: QuestionAnswerCreateCommonAction,
): CreateQuestionAnswerState => {
  switch (action.type) {
    case ActionType.QUESTION_ANSWER_CREATE:
      return {loading: true, error: null, data: null};
    case ActionType.QUESTION_ANSWER_CREATE_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case ActionType.QUESTION_ANSWER_CREATE_ERROR:
      return {loading: false, error: action.payload, data: null};
    case ActionType.QUESTION_ANSWER_CREATE_RESET:
      return {loading: false, error: null, data: null};
    default:
      return state;
  }
}

export default reducer;