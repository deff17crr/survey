<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\QuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['questionnaire:item']),
        new GetCollection(normalizationContext: ['questionnaire:collection']),
    ],
)]
class Questionnaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(groups: ['questionnaire:item', 'questionnaire:collection'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(groups: ['questionnaire:item', 'questionnaire:collection', 'questionnaireResult:collection', 'questionnaireResult:item'])]
    private ?string $title = null;

    /** @var Collection|Question[] */
    #[ORM\OneToMany(mappedBy: 'questionnaire', targetEntity: Question::class)]
    #[Groups(groups: ['questionnaire:item', 'questionnaireResult:item'])]
    #[ORM\OrderBy(['order' => 'ASC'])]
    private Collection $questions;

    #[Groups(groups: ['questionnaire:item', 'questionnaire:collection'])]
    public function getQuestionsQuantity(): int
    {
        return $this->questions->count();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function __construct()
    {
        $this->questions = new ArrayCollection();
    }

    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): void
    {
        if (!$this->questions->contains($question)) {
            $question->setQuestionnaire($this);
            $this->questions->add($question);
        }
    }
}
