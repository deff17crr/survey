export enum ActionType {
  QUESTIONNAIRE_LIST = 'list_questionnaire',
  QUESTIONNAIRE_LIST_SUCCESS = 'list_questionnaire_success',
  QUESTIONNAIRE_LIST_ERROR = 'list_questionnaire_error',

  QUESTIONNAIRE_RESULT_CREATE = 'questionnaire_result_create',
  QUESTIONNAIRE_RESULT_CREATE_SUCCESS = 'questionnaire_result_create_success',
  QUESTIONNAIRE_RESULT_CREATE_ERROR = 'questionnaire_result_create_error',

  QUESTIONNAIRE_RESULT_LIST = 'questionnaire_result_list',
  QUESTIONNAIRE_RESULT_LIST_SUCCESS = 'questionnaire_result_list_success',
  QUESTIONNAIRE_RESULT_LIST_ERROR = 'questionnaire_result_list_error',

  QUESTIONNAIRE_RESULT_GET = 'questionnaire_result_get',
  QUESTIONNAIRE_RESULT_GET_SUCCESS = 'questionnaire_result_get_success',
  QUESTIONNAIRE_RESULT_GET_ERROR = 'questionnaire_result_get_error',

  QUESTION_ANSWER_CREATE = 'question_answer_create',
  QUESTION_ANSWER_CREATE_SUCCESS = 'question_answer_create_success',
  QUESTION_ANSWER_CREATE_ERROR = 'question_answer_create_error',
  QUESTION_ANSWER_CREATE_RESET = 'question_answer_create_reset',
}