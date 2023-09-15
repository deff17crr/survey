import {ActionType} from "../action-types";
import {Action} from "../actions";

interface QuestionnaireEntity {
  id: number,
  title: string,
  questionsQuantity: number,
}

interface QuestionnairesState {
  loading: boolean,
  error: string | null
  entries: QuestionnaireEntity[]
}

const initialState = {
  loading: false,
  error: null,
  entries: [],
};

const reducer = (
  state: QuestionnairesState = initialState,
  action: Action,
): QuestionnairesState => {
  switch (action.type) {
    case ActionType.LIST_QUESTIONNAIRE:
      return {loading: true, error: null, entries: []};
    case ActionType.LIST_QUESTIONNAIRE_SUCCESS:
      return {loading: false, error: null, entries: action.payload};
    case ActionType.LIST_QUESTIONNAIRE_ERROR:
      return {loading: false, error: action.payload, entries: []};
    default:
      return state;
  }

}

export default reducer;