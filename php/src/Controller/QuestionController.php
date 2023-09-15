<?php

namespace App\Controller;

use App\Entity\Question;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class QuestionController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
    ) {
    }

    #[Route('/question', name: 'app_question')]
    public function index(): JsonResponse
    {
        $question = new Question();
        $question->setTitle('Hello World 7');

        $this->entityManager->persist($question);
        $this->entityManager->flush();

        return new JsonResponse(['status' => 'ok']);
    }
}
