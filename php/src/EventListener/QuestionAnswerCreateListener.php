<?php
namespace App\EventListener;

use App\Entity\QuestionAnswer;
use App\Entity\QuestionOption;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsDoctrineListener;
use Doctrine\ORM\Event\PrePersistEventArgs;

#[AsDoctrineListener('prePersist')]
class QuestionAnswerCreateListener
{
    public function prePersist(PrePersistEventArgs $event): void
    {
        $object = $event->getObject();

        /* if at least one incorrect option is selected, whole answer counts as incorrect */
        if ($object instanceof QuestionAnswer && $object->getId() !== null) {
            $this->calculateIfAnswerIsIncorrect($object);


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