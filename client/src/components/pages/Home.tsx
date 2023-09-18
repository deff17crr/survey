import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {QuestionnaireEntity} from "../../state/reducers/questionnaire/list";
import {DefaultAlert, ErrorAlert} from "../components/Alert";
import {useEffect} from "react";
import {QuestionnaireResultEntity} from "../../state/reducers/questionnaireResult/create";
import {CompletedQuestionnaireResultsList} from "../components/CompletedQuestionnaireResultsList";
import {AvailableQuestionnairesList} from "../components/AvailableQuestionnairesList";
import {NotCompletedQuestionnaireResult} from "../components/NotCompletedQuestionnaireResult";

export const Home = () => {
  const navigate = useNavigate();
  const {listQuestionnaires, createQuestionnaireResult, listQuestionnaireResults, resetCreateQuestionnaireResult} = useActions();
  const questionnaires = useTypedSelector((state) => state.questionnaires);
  const questionnaireResults = useTypedSelector((state) => state.questionnaireResultsList);
  const questionnaireResultCreate = useTypedSelector((state) => state.questionnaireResultCreate);
  const loading = questionnaires.loading || questionnaireResultCreate.loading || questionnaireResults.loading;
  const error = questionnaires.error || questionnaireResultCreate.error || questionnaireResults.error;

  useEffect(() => {
    listQuestionnaires();
    listQuestionnaireResults({'order[completedAt]': 'desc'});
  }, []);

  const handleClick = (questionnaire: QuestionnaireEntity) => {
    createQuestionnaireResult(questionnaire['@id']);
  }

  if (questionnaireResultCreate.data) {
    navigate(`/questionnaire-pass/${encodeURIComponent(questionnaireResultCreate.data['@id'])}`);
    resetCreateQuestionnaireResult();

    return <></>;
  }

  let notCompletedQuestionnaireResult;
  let completedQuestionnaireResults: QuestionnaireResultEntity[] = [];
  if (questionnaireResults.data.length > 0) {
    if (questionnaireResults.data[0]['completedAt'] === null) {
      notCompletedQuestionnaireResult = questionnaireResults.data[0];
    }

    completedQuestionnaireResults = questionnaireResults.data.filter(qr => !!qr.completedAt)
  }

  return (
    <div>
      {loading && (
        <DefaultAlert message={'Loading...'} />
      )}
      {error && (
        <ErrorAlert message={error} />
      )}

      {notCompletedQuestionnaireResult ? (
        <NotCompletedQuestionnaireResult questionnaireResult={notCompletedQuestionnaireResult} />
      ) : (
        <AvailableQuestionnairesList questionnaires={questionnaires.data} handleClick={handleClick} />
      )}

      {completedQuestionnaireResults.length > 0 && (
        <CompletedQuestionnaireResultsList questionnaireResults={completedQuestionnaireResults} />
      )}
    </div>
  )
}