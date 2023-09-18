import React from "react";
import {QuestionEntity} from "../../state/reducers/questionnaire/list";
import {FieldValues, useForm} from "react-hook-form";

interface QuestionComponentProperty {
  question: QuestionEntity,
  // reloadQuestionnaireResult: () => {},
}

export const QuestionForm: React.FC<QuestionComponentProperty> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const {question} = props;
  const fieldName = 'question_' + question['id'];
  const selectedValues = watch(fieldName);
  const onSubmit = (data: any) => {
    if (data[fieldName].length === 0) {
      return;
    }

    const answerData = {
      question: question['@id'],
      questionOptionsSelected: data[fieldName],
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className={'text-indigo-700 mb-2'}>
        <span className={'text-gray-700'}>Question:</span> {question['title']}
      </h3>
      {question.questionOptions.map(option => (
        <div className="flex items-center mb-4 pl-4" key={option['id']}>
          <input id={'option-' + option['id']}
                 type="checkbox"
                 {...register(fieldName)}
                 value={option['@id']}
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={'option-' + option['id']}
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {option['text']}
          </label>
        </div>
      ))}
      {selectedValues && selectedValues.length > 0 ? (
        <button className={
          "rounded border bg-white border-indigo-500 text-indigo-700 px-4 py-1 ml-4 inline-block hover:opacity-75"
        }>
          Submit
        </button>
        ) : (
        <div className={
          "rounded border border-gray-400 text-gray-500 px-4 py-1 ml-4 inline-block"
        }>
          Please select at least one option
        </div>
      )}
    </form>
  );
}