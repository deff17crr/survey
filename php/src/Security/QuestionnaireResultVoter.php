<?php
namespace App\Security;

use App\Repository\QuestionnaireResultRepository;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class QuestionnaireResultVoter extends Voter
{
    const CREATE_QUESTIONNAIRE_RESULT = 'CREATE_QUESTIONNAIRE_RESULT';

    public function __construct(
      private readonly QuestionnaireResultRepository $questionnaireResultRepository,
    ) {
    }

    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, [
            self::CREATE_QUESTIONNAIRE_RESULT,
        ]);
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        return match ($attribute) {
            self::CREATE_QUESTIONNAIRE_RESULT => $this->canCreate(),
            default => throw new \LogicException('This code should not be reached!')
        };
    }

    private function canCreate(): bool
    {
        return !$this->questionnaireResultRepository->hasNotCompletedQuestionnairesResults();
    }
}
