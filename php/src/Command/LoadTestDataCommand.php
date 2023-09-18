<?php
namespace App\Command;

use App\Entity\Question;
use App\Entity\Questionnaire;
use App\Entity\QuestionOption;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(name: 'load-test-data')]
class LoadTestDataCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $questionnaire = new Questionnaire();
        $questionnaire->setTitle('Testing Questionnaire Name');
        $this->entityManager->persist($questionnaire);


        /* question 1 */
        $question1 = new Question();
        $question1->setQuestionnaire($questionnaire);
        $question1->setTitle('1 + 1 = ');
        $question1->setOrder(1);
        $this->entityManager->persist($question1);

        $question1Option1 = new QuestionOption();
        $question1Option1->setQuestion($question1);
        $question1Option1->setText('0');
        $question1Option1->setCorrect(false);
        $this->entityManager->persist($question1Option1);

        $question1Option2 = new QuestionOption();
        $question1Option2->setQuestion($question1);
        $question1Option2->setText('2');
        $question1Option2->setCorrect(true);
        $this->entityManager->persist($question1Option2);

        $question1Option3 = new QuestionOption();
        $question1Option3->setQuestion($question1);
        $question1Option3->setText('3');
        $question1Option3->setCorrect(false);
        $this->entityManager->persist($question1Option3);

        /* question 2 */
        $question2 = new Question();
        $question2->setQuestionnaire($questionnaire);
        $question2->setTitle('2 + 2 = ');
        $question2->setOrder(2);
        $this->entityManager->persist($question2);

        $question2Option1 = new QuestionOption();
        $question2Option1->setQuestion($question2);
        $question2Option1->setText('4');
        $question2Option1->setCorrect(true);
        $this->entityManager->persist($question2Option1);

        $question2Option2 = new QuestionOption();
        $question2Option2->setQuestion($question2);
        $question2Option2->setText('3 + 1');
        $question2Option2->setCorrect(true);
        $this->entityManager->persist($question2Option2);

        $question2Option3 = new QuestionOption();
        $question2Option3->setQuestion($question2);
        $question2Option3->setText('10');
        $question2Option3->setCorrect(false);
        $this->entityManager->persist($question2Option3);

        /* question 3 */
        $question3 = new Question();
        $question3->setQuestionnaire($questionnaire);
        $question3->setTitle('3 + 3 = ');
        $question3->setOrder(3);
        $this->entityManager->persist($question3);

        $question3Option1 = new QuestionOption();
        $question3Option1->setQuestion($question3);
        $question3Option1->setText('1 + 5');
        $question3Option1->setCorrect(true);
        $this->entityManager->persist($question3Option1);

        $question3Option2 = new QuestionOption();
        $question3Option2->setQuestion($question3);
        $question3Option2->setText('1');
        $question3Option2->setCorrect(false);
        $this->entityManager->persist($question3Option2);

        $question3Option3 = new QuestionOption();
        $question3Option3->setQuestion($question3);
        $question3Option3->setText('6');
        $question3Option3->setCorrect(true);
        $this->entityManager->persist($question3Option3);

        $question3option4 = new QuestionOption();
        $question3option4->setQuestion($question3);
        $question3option4->setText('2 + 4');
        $question3option4->setCorrect(true);
        $this->entityManager->persist($question3option4);

        /* question 4 */
        $question4 = new Question();
        $question4->setQuestionnaire($questionnaire);
        $question4->setTitle('4 + 4 = ');
        $question4->setOrder(4);
        $this->entityManager->persist($question4);

        $question4option1 = new QuestionOption();
        $question4option1->setQuestion($question4);
        $question4option1->setText('8');
        $question4option1->setCorrect(true);
        $this->entityManager->persist($question4option1);

        $question4option2 = new QuestionOption();
        $question4option2->setQuestion($question4);
        $question4option2->setText('4');
        $question4option2->setCorrect(false);
        $this->entityManager->persist($question4option2);

        $question4option3 = new QuestionOption();
        $question4option3->setQuestion($question4);
        $question4option3->setText('0');
        $question4option3->setCorrect(false);
        $this->entityManager->persist($question4option3);

        $question4option4 = new QuestionOption();
        $question4option4->setQuestion($question4);
        $question4option4->setText('0 + 8');
        $question4option4->setCorrect(true);
        $this->entityManager->persist($question4option4);

        /* question 5 */
        $question5 = new Question();
        $question5->setQuestionnaire($questionnaire);
        $question5->setTitle('5 + 5 = ');
        $question5->setOrder(5);
        $this->entityManager->persist($question5);

        $question5option1 = new QuestionOption();
        $question5option1->setQuestion($question5);
        $question5option1->setText('6');
        $question5option1->setCorrect(false);
        $this->entityManager->persist($question5option1);

        $question5option2 = new QuestionOption();
        $question5option2->setQuestion($question5);
        $question5option2->setText('18');
        $question5option2->setCorrect(false);
        $this->entityManager->persist($question5option2);

        $question5option3 = new QuestionOption();
        $question5option3->setQuestion($question5);
        $question5option3->setText('10');
        $question5option3->setCorrect(true);
        $this->entityManager->persist($question5option3);

        $question5option4 = new QuestionOption();
        $question5option4->setQuestion($question5);
        $question5option4->setText('9');
        $question5option4->setCorrect(false);
        $this->entityManager->persist($question5option4);

        /* question 6 */
        $question6 = new Question();
        $question6->setQuestionnaire($questionnaire);
        $question6->setTitle('6 + 6 = ');
        $question6->setOrder(6);
        $this->entityManager->persist($question6);
        foreach (['3' => false, '9' => false, '0' => false, '12' => true, '5 + 7' => true] as $key => $value) {
            $question6option = new QuestionOption();
            $question6option->setQuestion($question6);
            $question6option->setText($key);
            $question6option->setCorrect($value);
            $this->entityManager->persist($question6option);
        }

        /* question 7 */
        $question7 = new Question();
        $question7->setQuestionnaire($questionnaire);
        $question7->setTitle('7 + 7 = ');
        $question7->setOrder(7);
        $this->entityManager->persist($question7);
        foreach (['5' => false, '14' => true] as $key => $value) {
            $question7option = new QuestionOption();
            $question7option->setQuestion($question7);
            $question7option->setText($key);
            $question7option->setCorrect($value);
            $this->entityManager->persist($question7option);
        }

        /* question */
        $question8 = new Question();
        $question8->setQuestionnaire($questionnaire);
        $question8->setTitle('8 + 8 = ');
        $question8->setOrder(8);
        $this->entityManager->persist($question8);
        foreach (['16' => true, '12' => false, '9' => false, '5' => false] as $key => $value) {
            $question8option = new QuestionOption();
            $question8option->setQuestion($question8);
            $question8option->setText($key);
            $question8option->setCorrect($value);
            $this->entityManager->persist($question8option);
        }

        /* question 9 */
        $question9 = new Question();
        $question9->setQuestionnaire($questionnaire);
        $question9->setTitle('9 + 9 = ');
        $question9->setOrder(9);
        $this->entityManager->persist($question9);
        foreach (['18' => true, '9' => false, '17 + 1' => true, '2 + 16' => true] as $key => $value) {
            $question9option = new QuestionOption();
            $question9option->setQuestion($question9);
            $question9option->setText($key);
            $question9option->setCorrect($value);
            $this->entityManager->persist($question9option);
        }

        /* question 10 */
        $question10 = new Question();
        $question10->setQuestionnaire($questionnaire);
        $question10->setTitle('10 + 10 = ');
        $question10->setOrder(10);
        $this->entityManager->persist($question10);
        foreach (['0' => false, '2' => false, '8' => false, '20' => true] as $key => $value) {
            $question10option = new QuestionOption();
            $question10option->setQuestion($question10);
            $question10option->setText($key);
            $question10option->setCorrect($value);
            $this->entityManager->persist($question10option);
        }

        $this->entityManager->flush();

        $questionnaire2 = new Questionnaire();
        $questionnaire2->setTitle('Second Questionnaire for Test');
        $this->entityManager->persist($questionnaire2);

        $question11 = new Question();
        $question11->setQuestionnaire($questionnaire2);
        $question11->setTitle('11 +11 = ');
        $question11->setOrder(1);
        $this->entityManager->persist($question11);

        foreach (['22' => true, '33' => false, '44 - 22' => true, '20' => false] as $key => $value) {
            $question11option = new QuestionOption();
            $question11option->setQuestion($question11);
            $question11option->setText($key);
            $question11option->setCorrect($value);
            $this->entityManager->persist($question11option);
        }
        $this->entityManager->flush();

        return Command::SUCCESS;
    }
}
