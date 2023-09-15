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
class Question
{
    public const TYPE_SINGLE = 'single';
    public const TYPE_MULTIPLE = 'multiple';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private string $type = self::TYPE_SINGLE;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $title;

    #[ORM\ManyToOne(targetEntity: Questionnaire::class, inversedBy: 'questions')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotNull]
    private ?Questionnaire $questionnaire;

    #[ORM\OneToMany(mappedBy: 'question', targetEntity: QuestionOption::class, )]
    private Collection $questionOptions;

    public function __construct()
    {
        $this->questionOptions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): void
    {
        $this->type = $type;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getQuestionnaire(): ?Questionnaire
    {
        return $this->questionnaire;
    }

    public function setQuestionnaire(Questionnaire $questionnaire): void
    {
        $this->questionnaire = $questionnaire;
    }

    public function getQuestionOptions(): Collection
    {
        return $this->questionOptions;
    }

    public function addQuestionOption(QuestionOption $questionOption): void
    {
        if (!$this->questionOptions->contains($questionOption)) {
            $questionOption->setQuestion($this);
            $this->questionOptions->add($questionOption);
        }
    }
}
