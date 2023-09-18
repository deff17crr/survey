import {useNavigate, useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import NotFound from "../components/NotFound";
import {useActions} from "../../hooks/useActions";
import React, {useEffect} from "react";
import {QuestionForm} from "../components/QuestionForm";
import {QuestionnaireResultEntity} from "../../state/reducers/questionnaireResult/create";
import {QuestionEntity} from "../../state/reducers/questionnaire/list";

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
    return <h1 className="text-center">Loading...</h1>
  }

  if (!questionnaireResult) {
    return <NotFound />
  }

  if (!!questionnaireResult['completedAt']) {
    navigate(`/questionnaire-result/${questionnaireResult['id']}`);

    return null;
  }

  const currentQuestion = getNextQuestion(questionnaireResult);

  return (
    <div className={'w-100'}>
      <h1 className={'text-4xl font-bold mb-3'}>{questionnaireResult['questionnaire']['title']}</h1>

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