import {QuestionnaireEntity} from "../../state/reducers/questionnaire/list";

interface ComponentPropTypes {
  questionnaires: QuestionnaireEntity[],
  handleClick: (questionnaire: QuestionnaireEntity) => void
}

export function AvailableQuestionnairesList(props: ComponentPropTypes) {
  const {questionnaires, handleClick} = props;
  return (
    <>
      <h3 className={'pb-2 mb-3 mt-5 border-b-2 border-gray-700 text-gray-700'}>Available Questionnaires</h3>
      <div className={"flex"}>
        {questionnaires && questionnaires.map(questionnaire => (
          <div key={questionnaire.id} className={"w-1/3 pr-3"}>
            <div className="bg-blue-100 border rounded shadow-md mb-5 border-blue-500 text-blue-700 px-4 py-3" role="alert">
              <p className="font-bold">{questionnaire.title}</p>
              <p className="text-sm">
                {questionnaire.questionsQuantity} {questionnaire.questionsQuantity === 1 ? 'Question' : 'Questions'}
              </p>
              <button onClick={() => handleClick(questionnaire)} className={
                "rounded border bg-white border-blue-500 text-blue-700 mt-2 px-4 py-1 inline-block hover:opacity-75"
              }>
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}