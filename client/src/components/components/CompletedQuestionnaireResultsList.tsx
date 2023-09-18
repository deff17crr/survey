import {QuestionnaireResultEntity} from "../../state/reducers/questionnaireResult/create";
import {useNavigate} from "react-router-dom";

export function CompletedQuestionnaireResultsList(props: {questionnaireResults: QuestionnaireResultEntity[]}) {
  const navigate = useNavigate();
  const handleClick = (questionnaireResult: QuestionnaireResultEntity) => {
    navigate(`/questionnaire-result/${questionnaireResult['id']}`);
  }

  return (
    <>
      <h3 className={'pb-2 mb-3 mt-10 border-b-2 border-gray-700 text-gray-700'}>Previously Passed Questionnaires</h3>
      <div className={'flex'}>
        {props.questionnaireResults.map(questionnaireResult => (
          <div key={questionnaireResult.id} className={"w-1/3 pr-3"}>
            <div className="bg-indigo-100 border-indigo-500 text-indigo-700 border rounded shadow-md mb-5 px-4 py-3" role="alert">
              <p className="font-bold">{questionnaireResult['questionnaire'].title}</p>
              <p className="text-sm">
                {questionnaireResult.questionAnswersQuantity} {questionnaireResult.questionAnswersQuantity === 1 ? 'Answer' : 'Answers'}
              </p>
              <button onClick={() => handleClick(questionnaireResult)} className={
                "rounded border bg-white border-indigo-500 text-indigo-700 mt-2 px-4 py-1 inline-block hover:opacity-75"
              }>
                View Answers
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}