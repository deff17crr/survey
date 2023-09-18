import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { questionnairesActionCreators } from "../state"
import { questionnaireResultsListActionCreators } from "../state"
import { questionnaireResultsCreateActionCreators } from "../state"
import { questionnaireResultsGetActionCreators } from "../state"

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({
    ...questionnairesActionCreators,
    ...questionnaireResultsListActionCreators,
    ...questionnaireResultsCreateActionCreators,
    ...questionnaireResultsGetActionCreators,
  }, dispatch);
}