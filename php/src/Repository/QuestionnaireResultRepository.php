<?php

namespace App\Repository;

use App\Entity\QuestionnaireResult;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class QuestionnaireResultRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireResult::class);
    }

    public function hasNotCompletedQuestionnairesResults(): bool
    {
        $quantity = $this->createQueryBuilder('cr')
            ->select('COUNT(cr)')
            ->where('cr.completedAt IS NULL')
            ->getQuery()
            ->getSingleScalarResult();

        return $quantity > 0;
    }
}
