<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Repository\QuestionnaireResultRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use DateTime;

#[ORM\Entity(repositoryClass: QuestionnaireResultRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['questionnaireResult:item']),
        new GetCollection(normalizationContext: ['questionnaireResult:collection']),
        new Post(denormalizationContext: ['questionnaireResult:create'], security: 'is_granted("CREATE_QUESTIONNAIRE_RESULT")')
    ],
)]
class QuestionnaireResult
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Questionnaire::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotNull]
    private ?Questionnaire $questionnaire;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?DateTime $completedAt;

    #[ORM\OneToMany(mappedBy: 'questionnaireResult', targetEntity: QuestionAnswer::class, )]
    private Collection $questionAnswers;

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

    public function getCompletedAt(): ?DateTime
    {
        return $this->completedAt;
    }

    public function setCompletedAt(DateTime $completedAt): void
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
}
