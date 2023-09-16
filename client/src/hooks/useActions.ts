import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { questionnairesActionCreators } from "../state"
import { questionnaireResultsActionCreators } from "../state"
import { questionnaireResultsListActionCreators } from "../state"

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({
    ...questionnairesActionCreators,
    ...questionnaireResultsActionCreators,
    ...questionnaireResultsListActionCreators,
  }, dispatch);
}