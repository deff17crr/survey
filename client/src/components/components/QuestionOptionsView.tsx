import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import {QuestionAnswerEntity} from "../../state/entityInterfaces/QuestionAnswerEntity";

interface ComponentProps {
  answer: QuestionAnswerEntity
}

export const QuestionOptionsView: React.FC<ComponentProps> = (props) => {
  const {answer} = props;

  const renderOptions: any = [];
  const indexedSelectedOptions: {[key: string]: boolean} = {};
  answer.selectedQuestionOptions.map(option => {
    indexedSelectedOptions[option['@id']] = !!option['correct'];
  });

  answer.question.questionOptions.map(option => {
    const selected = option['@id'] in indexedSelectedOptions;
    const correct = selected && indexedSelectedOptions[option['@id']];
    const textColor = selected ? (correct ? 'green' : 'red') : 'black';

    renderOptions.push(
      <div key={option['id']}>
        <div className={'float-left w-2/12'}>
          {!selected && (
            <MdCheckBoxOutlineBlank className={"text-2xl"} />
          )}
          {selected && (correct ?
              <MdCheckBox className={'text-green-500 text-2xl'} /> :
              <MdCheckBox className={"text-red-500 text-2xl"} />
          )}
        </div>
        <div className={'float-left w-10/12' + ` text-${textColor}-500`}>{option['text']}</div>
        <div className={"clear-both"} />
      </div>
    );
  });

  return renderOptions;
}