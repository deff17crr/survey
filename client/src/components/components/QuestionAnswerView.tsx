import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import {QuestionAnswerEntity} from "../../state/entityInterfaces/QuestionAnswerEntity";
import {QuestionOptionsView} from "./QuestionOptionsView";

interface ComponentProps {
  answer: QuestionAnswerEntity
}

export const QuestionAnswerView: React.FC<ComponentProps> = (props) => {
  const {answer} = props;

  return (
    <div className={"w-100 pr-20"}>
      <div className="bg-gray-100 border-gray-300 text-gray-700 border rounded shadow-md mb-5 px-4 py-3" role="alert">
        <p className="font-bold">Question: {answer['question']['title']}</p>
        <div>
          <QuestionOptionsView answer={answer} />
        </div>
      </div>
    </div>
  );
}