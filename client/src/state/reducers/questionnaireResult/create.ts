import {ActionType} from "../../action-types";
import {QuestionnaireResultCreateCommonAction} from "../../actions";
import {QuestionnaireResultEntity} from "../../entityInterfaces/QuestionnaireResultEntity";

interface QuestionnaireResultCreateState {
  loading: boolean,
  error: string | null
  data: QuestionnaireResultEntity|null
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (
  state: QuestionnaireResultCreateState = initialState,
  action: QuestionnaireResultCreateCommonAction,
): QuestionnaireResultCreateState => {
  switch (action.type) {
    case ActionType.QUESTIONNAIRE_RESULT_CREATE:
      return {loading: true, error: null, data: null};
    case ActionType.QUESTIONNAIRE_RESULT_CREATE_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case ActionType.QUESTIONNAIRE_RESULT_CREATE_ERROR:
      return {loading: false, error: action.payload, data: null};
    case ActionType.QUESTIONNAIRE_RESULT_CREATE_RESET:
      return {loading: false, error: null, data: null};
    default:
      return state;
  }
}

export default reducer;