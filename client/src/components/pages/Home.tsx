import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {QuestionnaireEntity} from "../../state/reducers/questionnairesReducer";
import {DefaultAlert, ErrorAlert, WarningAlert} from "../Alert";
import {useEffect} from "react";

export const Home = () => {
  const navigate = useNavigate();
  const {listQuestionnaires, createQuestionnaireResult} = useActions();
  const questionnaires = useTypedSelector((state) => state.questionnaires);
  const questionnaireResultCreate = useTypedSelector((state) => state.questionnaireResultCreate);
  const loading = questionnaires.loading || questionnaireResultCreate.loading;
  const error = questionnaires.error || questionnaireResultCreate.error;

  useEffect(() => {listQuestionnaires()}, []);

  const handleClick = (questionnaire: QuestionnaireEntity) => {
    createQuestionnaireResult(questionnaire['@id']);
  }

  if (questionnaireResultCreate.data) {
    navigate(`/questionnaire-pass/${questionnaireResultCreate.data['id']}`);

    return <></>;
  }

  return (
    <div>
      {loading && (
        <DefaultAlert message={'Loading...'} />
      )}
      {error && (
        <ErrorAlert message={error} />
      )}
      <div className={"flex"}>
        {questionnaires.data && questionnaires.data.map(questionnaire => (
          <div key={questionnaire.id} className={"w-1/3 pr-3"}>
            <div className="bg-blue-100 border rounded shadow-md mb-5 border-blue-500 text-blue-700 px-4 py-3" role="alert">
              <p className="font-bold">{questionnaire.title}</p>
              <p className="text-sm">
                {questionnaire.questionsQuantity} {questionnaire.questionsQuantity === 1 ? 'Question' : 'Questions'}
              </p>
              <button onClick={() => handleClick(questionnaire)} className={
                "rounded border bg-blue-100 border-blue-500 text-blue-700 mt-2 px-4 py-1 inline-block hover:opacity-75"
              }>
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}