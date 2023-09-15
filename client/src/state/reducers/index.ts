import { combineReducers } from "redux";
import questionnairesReducer from "./questionnairesReducer";

const reducers = combineReducers({
  questionnaires: questionnairesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>