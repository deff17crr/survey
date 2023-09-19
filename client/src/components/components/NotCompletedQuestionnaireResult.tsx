import {QuestionnaireResultEntity} from "../../state/entityInterfaces/QuestionnaireResultEntity";
import {useNavigate} from "react-router-dom";
import React from "react";

export const NotCompletedQuestionnaireResult: React.FC<{questionnaireResult: QuestionnaireResultEntity}> = (props) => {
  const {questionnaireResult} = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/questionnaire-pass/${encodeURIComponent(questionnaireResult['@id'])}`);
  }

  return (
    <>
      <h3 className={'pb-2 mb-3 mt-5 border-b-2 border-gray-700 text-gray-700'}>Previously Started Questionnaire</h3>
      <div className={"w-1/3 px-2 float-left"}>
        <div className="bg-fuchsia-100 border-fuchsia-500 text-fuchsia-700 border rounded shadow-md mb-5 px-4 py-3" role="alert">
          <p className="font-bold">{questionnaireResult.questionnaire.title}</p>
          <p className="text-sm">
            {questionnaireResult.questionAnswersQuantity} {questionnaireResult.questionAnswersQuantity === 1 ? 'Answer' : 'Answers'}
          </p>
          <button onClick={handleClick} className={
            "rounded border bg-white border-fuchsia-500 text-fuchsia-700 mt-2 px-4 py-1 inline-block hover:opacity-75"
          }>
            Continue
          </button>
        </div>
      </div>
      <div className={'clear-both'} />
    </>
  );
}