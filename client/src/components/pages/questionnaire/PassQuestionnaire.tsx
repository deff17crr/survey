import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import NotFound from "../../components/NotFound";
import {useActions} from "../../../hooks/useActions";
import React, {useEffect} from "react";
import {QuestionForm} from "../../components/QuestionForm";

interface RouteParams {
  iri: string;
}

export const PassQuestionnaire: React.FC = () => {
  // @ts-ignore
  const params = useParams<RouteParams>();
  const {getQuestionnaireResult} = useActions();
  const {data: questionnaireResult, loading, error} = useTypedSelector((state) => state.questionnaireResultsGet);
  useEffect(() => {
    if (params.iri) {
      getQuestionnaireResult(params.iri);
    }
  }, []);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>
  }

  if (!questionnaireResult || !!questionnaireResult['completedAt']) {
    return <NotFound />
  }

  const questions = questionnaireResult['questionnaire']['questions'].filter(q => q.id === 1);

  return (
    <div className={'w-100'}>
      <h1 className={'text-4xl font-bold mb-3'}>{questionnaireResult['questionnaire']['title']}</h1>
      {questions.map(question => (
        <QuestionForm question={question} key={question.id} />
      ))}
    </div>
  )
}