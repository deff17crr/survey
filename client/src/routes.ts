import {Home} from "./pages/Home";
import {QuestionnaireResultView} from "./pages/questionnaire/QuestionnaireResultView";
import {PassQuestionnaire} from "./pages/questionnaire/PassQuestionnaire";


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