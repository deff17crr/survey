import React, {useEffect} from "react";
import {DefaultAlert} from "../components/Alert";
import NotFound from "../components/NotFound";
import {useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {QuestionAnswerEntity} from "../../state/entityInterfaces/QuestionAnswerEntity";
import {QuestionAnswerView} from "../components/QuestionAnswerView";

type RouteParams = {
  iri: string;
}

export const QuestionnaireResultView = () => {
  const params = useParams<RouteParams>();
  const {getQuestionnaireResult} = useActions();
  const {data: questionnaireResult, loading, error} = useTypedSelector((state) => state.questionnaireResultsGet);
  const correctAnswers: QuestionAnswerEntity[] = [];
  const wrongAnswers: QuestionAnswerEntity[] = [];

  useEffect(() => {
    if (params.iri) {
      getQuestionnaireResult(params.iri);
    }
  }, []);

  if (loading) {
    return <DefaultAlert message={'Loading...'} />
  }

  if (!questionnaireResult || !questionnaireResult['completedAt']) {
    return <NotFound />
  }

  questionnaireResult['questionAnswers'].forEach(questionAnswer => {
    if (questionAnswer['correct']) {
      correctAnswers.push(questionAnswer);
    } else {
      wrongAnswers.push(questionAnswer);
    }
  });

  return (
    <div>
      <h3 className={'pb-1 mb-7 mt-5 border-b-2 border-gray-700 text-2xl'}>
        View Answers for: <span className={"text-indigo-800"}>{questionnaireResult['questionnaire']['title']}</span>
      </h3>

      {correctAnswers.length > 0 && (
        <div className={'float-left w-2/5'}>
          <h4 className={'text-teal-400'}>Correct Answers ({correctAnswers.length}):</h4>
          {correctAnswers.map(answer => (
            <QuestionAnswerView answer={answer} key={answer['id']} />
          ))}
        </div>
      )}

      {wrongAnswers.length > 0 && (
        <div className={'float-left w-2/5'}>
          <h4 className={'text-red-400'}>Wrong Answers ({wrongAnswers.length}):</h4>
          {wrongAnswers.map(answer => (
            <QuestionAnswerView answer={answer} key={answer['id']} />
          ))}
        </div>
      )}
    </div>
  )
}