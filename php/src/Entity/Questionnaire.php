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
        new Get(normalizationContext: ['questionnaire:item']),
        new GetCollection(normalizationContext: ['questionnaire:collection']),
    ],
)]
class Questionnaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $title = null;

    #[ORM\OneToMany(mappedBy: 'questionnaire', targetEntity: Question::class)]
    private Collection $questions;

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

    /**
     * @return Collection
     */
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
