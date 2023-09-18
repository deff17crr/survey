import {Home} from "./components/pages/Home";
import {QuestionnaireResultView} from "./components/pages/QuestionnaireResultView";
import {PassQuestionnaire} from "./components/pages/PassQuestionnaire";


export const routes = [
  {
    url: '/',
    component: Home,
  },
  {
    url: `/questionnaire-result/:iri`,
    component: QuestionnaireResultView,
  },
  {
    url: `/questionnaire-pass/:iri`,
    component: PassQuestionnaire,
  },
];