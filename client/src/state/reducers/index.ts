import { combineReducers } from "redux";
import questionnairesReducer from "./questionnaire/list";
import questionnaireResultCreateReducer from "./questionnaireResult/create";
import questionnaireResultsListReducer from "./questionnaireResult/list";
import questionnaireResultsGetReducer from "./questionnaireResult/get";
import questionAnswerCreateReducer from "./questionAnswer/create";

const reducers = combineReducers({
  questionnaires: questionnairesReducer,
  questionnaireResultCreate: questionnaireResultCreateReducer,
  questionnaireResultsList: questionnaireResultsListReducer,
  questionnaireResultsGet: questionnaireResultsGetReducer,
  questionAnswerCreate: questionAnswerCreateReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>