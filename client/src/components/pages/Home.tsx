import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {QuestionnaireEntity} from "../../state/reducers/questionnairesReducer";

export const Home = () => {
  const {listQuestionnaires, createQuestionnaireResult} = useActions();
  const {
    entries,
    error,
    loading,
  } = useTypedSelector((state) => state.questionnaires);

  useEffect(() => {listQuestionnaires()}, []);

  const handleClick = (questionnaire: QuestionnaireEntity) => {
    createQuestionnaireResult(questionnaire['@id']);
  }

  return (
    <div className={"flex"}>
      {entries && entries.map(questionnaire => (
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
  )
}