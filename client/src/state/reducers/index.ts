import { combineReducers } from "redux";
import questionnairesReducer from "./questionnairesReducer";
import questionnaireResultCreateReducer from "./questionnaireResultCreateReducer";

const reducers = combineReducers({
  questionnaires: questionnairesReducer,
  questionnaireResultCreate: questionnaireResultCreateReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>