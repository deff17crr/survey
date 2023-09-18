import {ActionType} from "../../action-types";
import {QuestionnaireResultsGetCommonAction} from "../../actions";
import {QuestionnaireResultEntity} from "./create";

interface QuestionnaireResultsGetState {
  loading: boolean
  error: string | null
  data: QuestionnaireResultEntity|null
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (
    state: QuestionnaireResultsGetState = initialState,
  action: QuestionnaireResultsGetCommonAction,
  ): QuestionnaireResultsGetState => {
  switch (action.type) {
    case ActionType.QUESTIONNAIRE_RESULT_GET:
      return {loading: true, error: null, data: null};
    case ActionType.QUESTIONNAIRE_RESULT_GET_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case ActionType.QUESTIONNAIRE_RESULT_GET_ERROR:
      return {loading: false, error: action.payload, data: null};
    default:
      return state;
  }
}

export default reducer;