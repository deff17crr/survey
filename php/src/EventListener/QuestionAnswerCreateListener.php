<?php
namespace App\EventListener;

use App\Entity\Question;
use App\Entity\QuestionAnswer;
use App\Entity\QuestionOption;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsDoctrineListener;
use Doctrine\ORM\Event\PrePersistEventArgs;
use DateTime;

#[AsDoctrineListener('prePersist')]
class QuestionAnswerCreateListener
{
    public function prePersist(PrePersistEventArgs $event): void
    {
        $object = $event->getObject();

        if ($object instanceof QuestionAnswer) {
            /* if at least one incorrect option is selected, whole answer counts as incorrect */
            $this->calculateIfAnswerIsIncorrect($object);

            $questionnaireResult = $object->getQuestionnaireResult();
            $questionnaireResult->setLastAnsweredQuestionOrder($object->getQuestion()->getOrder());

            /* complete questionnaire if answered last question */
            /** @var Question $lastQuestion */
            $lastQuestion = $questionnaireResult->getQuestionnaire()->getQuestions()->last();
            if ($lastQuestion->getId() === $object->getQuestion()->getId()) {
                $questionnaireResult->setCompletedAt(new DateTime());
            }

            $event->getObjectManager()->persist($questionnaireResult);
        }
    }

    private function calculateIfAnswerIsIncorrect(QuestionAnswer $object): void
    {
        $selectedOptionIds = [];
        /** @var $questionOption QuestionOption */
        foreach ($object->getSelectedQuestionOptions() as $questionOption) {
            $selectedOptionIds[] = $questionOption->getId();
        }

        foreach ($object->getQuestion()->getQuestionOptions() as $questionOption) {
            if (
                !$questionOption->isCorrect() &&
                in_array($questionOption->getId(), $selectedOptionIds, true)
            ) {
                $object->setCorrect(false);
            }
        }
    }
}