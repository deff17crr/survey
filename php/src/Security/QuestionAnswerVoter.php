<?php

namespace App\Security;

use App\Entity\QuestionAnswer;
use App\Repository\QuestionnaireResultRepository;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class QuestionAnswerVoter extends Voter
{
    public const CREATE_QUESTION_ANSWER = 'CREATE_QUESTION_ANSWER';

    //    public function __construct(
    //      private readonly QuestionnaireResultRepository $questionnaireResultRepository,
    //    ) {
    //    }

    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, [
            self::CREATE_QUESTION_ANSWER,
        ]);
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        return match ($attribute) {
            self::CREATE_QUESTION_ANSWER => $this->canCreate($subject),
            default => throw new \LogicException('This code should not be reached!')
        };
    }

    private function canCreate(QuestionAnswer $subject): bool
    {
        if (null !== $subject->getQuestionnaireResult()->getCompletedAt()) {
            return false;
        }

        if ($subject->getQuestionnaireResult()->isQuestionAlreadyAnswered($subject->getQuestion())) {
            return false;
        }

        return true;
    }
}
