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

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['question:item']),
        new GetCollection(normalizationContext: ['question:collection']),
    ],
)]
class QuestionAnswer
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'boolean')]
    private bool $correct = false;

    #[ORM\ManyToOne(targetEntity: QuestionnaireResult::class, inversedBy: "questionAnswers")]
    #[Assert\NotNull]
    #[ORM\JoinColumn(nullable: false)]
    private ?QuestionnaireResult $questionnaireResult;

    #[ORM\ManyToOne(targetEntity: Question::class)]
    #[Assert\NotNull]
    #[ORM\JoinColumn(nullable: false)]
    private ?Question $question;

    #[ORM\OneToMany(mappedBy: 'question', targetEntity: QuestionOptionSelected::class, )]
    private Collection $questionOptionsSelected;

    public function __construct()
    {
        $this->questionOptionsSelected = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isCorrect(): bool
    {
        return $this->correct;
    }

    public function setCorrect(bool $correct): void
    {
        $this->correct = $correct;
    }

    public function getQuestionnaireResult(): ?QuestionnaireResult
    {
        return $this->questionnaireResult;
    }

    public function setQuestionnaireResult(QuestionnaireResult $questionnaireResult): void
    {
        $this->questionnaireResult = $questionnaireResult;
    }

    public function getQuestion(): ?Question
    {
        return $this->question;
    }

    public function setQuestion(Question $question): void
    {
        $this->question = $question;
    }

    public function getQuestionOptionsSelected(): Collection
    {
        return $this->questionOptionsSelected;
    }

    public function addQuestionOptionsSelected(QuestionOptionSelected $questionOptionsSelected): void
    {
        if (!$this->questionOptionsSelected->contains($questionOptionsSelected)) {
            $questionOptionsSelected->setQuestionAnswer($this);
            $this->questionOptionsSelected->add($questionOptionsSelected);
        }
    }
}
