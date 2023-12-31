<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Repository\QuestionnaireResultRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuestionnaireResultRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => ['questionnaireResult:item']]),
        new GetCollection(normalizationContext: ['groups' => ['questionnaireResult:collection'], 'skip_null_values' => false]),
        new Post(denormalizationContext: ['groups' => ['questionnaireResult:create']], security: 'is_granted("CREATE_QUESTIONNAIRE_RESULT")'),
    ],
)]
#[ApiFilter(
    OrderFilter::class,
    properties: [
        'completedAt' => ['completedAt' => ['nulls_comparison' => OrderFilter::NULLS_ALWAYS_FIRST, 'default_direction' => 'DESC']],
    ],
    arguments: ['orderParameterName' => 'order']
)]
class QuestionnaireResult
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['questionnaireResult:item', 'questionnaireResult:collection'])]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Questionnaire::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotNull]
    #[Groups(['questionnaireResult:item', 'questionnaireResult:collection', 'questionnaireResult:create'])]
    private ?Questionnaire $questionnaire;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['questionnaireResult:item', 'questionnaireResult:collection'])]
    private ?\DateTime $completedAt;

    #[ORM\OneToMany(mappedBy: 'questionnaireResult', targetEntity: QuestionAnswer::class)]
    #[Groups(['questionnaireResult:completed'])]
    private Collection $questionAnswers;

    #[ORM\Column(type: 'integer')]
    #[Groups(['questionnaireResult:item'])]
    #[Assert\Range(min: 0)]
    private int $lastAnsweredQuestionOrder = 0;

    #[Groups(groups: ['questionnaireResult:item', 'questionnaireResult:collection'])]
    public function getQuestionAnswersQuantity(): int
    {
        return $this->questionAnswers->count();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function __construct()
    {
        $this->questionAnswers = new ArrayCollection();
    }

    public function getQuestionnaire(): ?Questionnaire
    {
        return $this->questionnaire;
    }

    public function setQuestionnaire(Questionnaire $questionnaire): void
    {
        $this->questionnaire = $questionnaire;
    }

    public function getCompletedAt(): ?\DateTime
    {
        return $this->completedAt;
    }

    public function setCompletedAt(\DateTime $completedAt): void
    {
        $this->completedAt = $completedAt;
    }

    public function getQuestionAnswers(): Collection
    {
        return $this->questionAnswers;
    }

    public function addQuestionAnswer(QuestionAnswer $questionAnswer): void
    {
        if (!$this->questionAnswers->contains($questionAnswer)) {
            $questionAnswer->setQuestionnaireResult($this);
            $this->questionAnswers->add($questionAnswer);
        }
    }

    public function isQuestionAlreadyAnswered(Question $question): bool
    {
        foreach ($this->questionAnswers as $questionAnswer) {
            /** @var $questionAnswer QuestionAnswer */
            if (null !== $questionAnswer->getId() && $questionAnswer->getQuestion()->getId() === $question->getId()) {
                return true;
            }
        }

        return false;
    }

    public function getLastAnsweredQuestionOrder(): int
    {
        return $this->lastAnsweredQuestionOrder;
    }

    public function setLastAnsweredQuestionOrder(int $lastAnsweredQuestionOrder): void
    {
        $this->lastAnsweredQuestionOrder = $lastAnsweredQuestionOrder;
    }

    public function isCompleted(): bool
    {
        return null !== $this->completedAt;
    }
}
