<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Repository\QuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['question:item', 'questionAnswer:item']),
        new GetCollection(normalizationContext: ['question:collection', 'questionAnswer:collection']),
        new Post(
            normalizationContext: ['question:collection', 'questionAnswer:item'],
            denormalizationContext: ['groups' => ['questionAnswer:create']],
            securityPostDenormalize: 'is_granted("CREATE_QUESTION_ANSWER", object)',
        )
    ],
)]
class QuestionAnswer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['questionAnswer:collection', 'questionnaireResult:item'])]
    private ?int $id = null;

    #[ORM\Column(type: 'boolean')]
    private bool $correct = true;

    #[ORM\ManyToOne(targetEntity: QuestionnaireResult::class, inversedBy: "questionAnswers")]
    #[Assert\NotNull]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['questionAnswer:create', 'questionAnswer:item'])]
    private ?QuestionnaireResult $questionnaireResult = null;

    #[ORM\ManyToOne(targetEntity: Question::class)]
    #[Assert\NotNull]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['questionAnswer:item', 'questionAnswer:create', 'questionnaireResult:item'])]
    private ?Question $question;

    #[ORM\ManyToMany(targetEntity: QuestionOption::class)]
    #[Groups(['questionAnswer:item', 'questionAnswer:create', 'questionnaireResult:item'])]
    #[Assert\Count(min: 1)]
    private Collection $selectedQuestionOptions;

    public function __construct()
    {
        $this->selectedQuestionOptions = new ArrayCollection();
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

    public function getSelectedQuestionOptions(): Collection
    {
        return $this->selectedQuestionOptions;
    }

    public function setSelectedQuestionOptions(array $selectedQuestionOptions): void
    {
        $this->selectedQuestionOptions = new ArrayCollection();
        foreach ($selectedQuestionOptions as $questionOption) {
            $this->addSelectedQuestionOption($questionOption);
        }
    }

    public function addSelectedQuestionOption(QuestionOption $questionOption): void
    {
        if (!$this->selectedQuestionOptions->contains($questionOption)) {
            $this->selectedQuestionOptions->add($questionOption);
        }
    }
}
