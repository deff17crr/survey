<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\QuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use DateTime;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['questionnaireResult:item']),
        new GetCollection(normalizationContext: ['questionnaireResult:collection']),
    ],
)]
class QuestionnaireResult
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'datetime')]
    private ?DateTime $completedAt;

    #[ORM\OneToMany(mappedBy: 'questionnaire', targetEntity: QuestionAnswer::class, )]
    private Collection $questionAnswers;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function __construct()
    {
        $this->questionAnswers = new ArrayCollection();
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
