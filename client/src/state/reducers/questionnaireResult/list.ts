import {ActionType} from "../../action-types";
import {QuestionnaireResultsListCommonAction} from "../../actions";
import {QuestionnaireResultEntity} from "./create";

interface QuestionnaireResultsListState {
  loading: boolean,
  error: string | null
  data: QuestionnaireResultEntity[]
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: QuestionnaireResultsListState = initialState,
  action: QuestionnaireResultsListCommonAction,
): QuestionnaireResultsListState => {
  switch (action.type) {
    case ActionType.QUESTIONNAIRE_RESULT_LIST:
      return {loading: true, error: null, data: []};
    case ActionType.QUESTIONNAIRE_RESULT_LIST_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case ActionType.QUESTIONNAIRE_RESULT_LIST_ERROR:
      return {loading: false, error: action.payload, data: []};
    default:
      return state;
  }
}

export default reducer;