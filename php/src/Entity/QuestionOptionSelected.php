<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\QuestionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['questionOptionSelected:item']),
        new GetCollection(normalizationContext: ['questionOptionSelected:collection']),
    ],
)]


/*
 * @TODO remove this file
 */


class QuestionOptionSelected
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: QuestionAnswer::class, inversedBy: 'questionOptionsSelected')]
    #[Assert\NotNull]
    private ?QuestionAnswer $questionAnswer;

    #[ORM\ManyToOne(targetEntity: QuestionOption::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotNull]
    private ?QuestionOption $questionOption;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestionAnswer(): ?QuestionAnswer
    {
        return $this->questionAnswer;
    }

    public function setQuestionAnswer(QuestionAnswer $questionAnswer): void
    {
        $this->questionAnswer = $questionAnswer;
    }

    public function getQuestionOption(): ?QuestionOption
    {
        return $this->questionOption;
    }

    public function setQuestionOption(QuestionOption $questionOption): void
    {
        $this->questionOption = $questionOption;
    }
}
