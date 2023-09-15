import {Home} from "./components/pages/Home";
import {QuestionnaireResultView} from "./components/pages/questionnaire/QuestionnaireResultView";
import {PassQuestionnaire} from "./components/pages/questionnaire/PassQuestionnaire";


export const routes = [
  {
    url: '/',
    component: Home,
  },
  {
    url: `/questionnaire-result/:id`,
    component: QuestionnaireResultView,
  },
  {
    url: `/questionnaire-pass/:id`,
    component: PassQuestionnaire,
  },
];