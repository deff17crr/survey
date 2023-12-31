import {ActionType} from "../../action-types";
import {Action} from "../../actions";
import {QuestionnaireEntity} from "../../entityInterfaces/QuestionnaireEntity";


interface QuestionnairesState {
  loading: boolean,
  error: string | null
  data: QuestionnaireEntity[]
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: QuestionnairesState = initialState,
  action: Action,
): QuestionnairesState => {
  switch (action.type) {
    case ActionType.QUESTIONNAIRE_LIST:
      return {loading: true, error: null, data: []};
    case ActionType.QUESTIONNAIRE_LIST_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case ActionType.QUESTIONNAIRE_LIST_ERROR:
      return {loading: false, error: action.payload, data: []};
    default:
      return state;
  }
}

export default reducer;