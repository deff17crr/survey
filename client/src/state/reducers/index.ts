import { combineReducers } from "redux";
import questionnairesReducer from "./questionnairesReducer";
import questionnaireResultCreateReducer from "./questionnaireResultCreateReducer";
import questionnaireResultsListReducer from "./questionnaireResultsListReducer";

const reducers = combineReducers({
  questionnaires: questionnairesReducer,
  questionnaireResultCreate: questionnaireResultCreateReducer,
  questionnaireResultsList: questionnaireResultsListReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>