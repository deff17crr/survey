import {useNavigate, useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import NotFound from "../components/NotFound";
import {useActions} from "../../hooks/useActions";
import React, {useEffect} from "react";
import {QuestionForm} from "../components/QuestionForm";
import {QuestionnaireResultEntity} from "../../state/entityInterfaces/QuestionnaireResultEntity";
import {QuestionEntity} from "../../state/entityInterfaces/QuestionEntity";
import {DefaultAlert} from "../components/Alert";

type RouteParams = {
  iri: string;
}

export const PassQuestionnaire: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<RouteParams>();
  const {getQuestionnaireResult} = useActions();
  const {data: questionnaireResult, loading, error} = useTypedSelector((state) => state.questionnaireResultsGet);
  const loadQuestionnaireResult = () => {
    if (params.iri) {
      getQuestionnaireResult(params.iri);
    }
  }

  useEffect(loadQuestionnaireResult, []);

  if (loading) {
    return <DefaultAlert message={'Loading...'} />
  }

  if (!questionnaireResult) {
    return <NotFound />
  }

  if (!!questionnaireResult['completedAt']) {
    navigate(`/questionnaire-result/${encodeURIComponent(questionnaireResult['@id'])}`);

    return null;
  }

  const currentQuestion = getNextQuestion(questionnaireResult);

  return (
    <div className={'w-100'}>
      <h3 className={'pb-1 mb-7 mt-5 border-b-2 border-gray-700 text-2xl'}>
        {questionnaireResult['questionnaire']['title']}
      </h3>

      {currentQuestion && (
        <QuestionForm
          key={currentQuestion.id}
          question={currentQuestion}
          questionnaireResult={questionnaireResult}
          reloadQuestionnaireResult={loadQuestionnaireResult}
        />
      )}
    </div>
  )
}

const getNextQuestion = (questionnaireResult: QuestionnaireResultEntity): QuestionEntity|null => {
  const lastQuestionOrder = questionnaireResult['lastAnsweredQuestionOrder'];
  const sortedQuestions = questionnaireResult['questionnaire']['questions'];

  for (let i = 0; i < sortedQuestions.length; i++) {
    if (sortedQuestions[i].order > lastQuestionOrder) {
      return sortedQuestions[i];
    }
  }

  return null;
}