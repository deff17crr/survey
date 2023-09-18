<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\QuestionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['question:item']),
        new GetCollection(normalizationContext: ['question:collection']),
    ],
)]
class QuestionOption
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(groups: ['questionnaire:item', 'questionnaireResult:item'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('questionnaireResult:completed')]
    private bool $correct = true;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(groups: ['questionnaire:item', 'questionnaireResult:item'])]
    private ?string $text = null;

    #[ORM\ManyToOne(targetEntity: Question::class, inversedBy: 'questionOptions')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotNull]
    private ?Question $question;

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

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): void
    {
        $this->text = $text;
    }

    public function getQuestion(): ?Question
    {
        return $this->question;
    }

    public function setQuestion(Question $question): void
    {
        $this->question = $question;
    }
}
