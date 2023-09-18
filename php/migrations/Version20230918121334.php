<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230918121334 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE question_answer_question_option (question_answer_id INT NOT NULL, question_option_id INT NOT NULL, PRIMARY KEY(question_answer_id, question_option_id))');
        $this->addSql('CREATE INDEX IDX_227397E2A3E60C9C ON question_answer_question_option (question_answer_id)');
        $this->addSql('CREATE INDEX IDX_227397E2AE1159F4 ON question_answer_question_option (question_option_id)');
        $this->addSql('ALTER TABLE question_answer_question_option ADD CONSTRAINT FK_227397E2A3E60C9C FOREIGN KEY (question_answer_id) REFERENCES question_answer (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE question_answer_question_option ADD CONSTRAINT FK_227397E2AE1159F4 FOREIGN KEY (question_option_id) REFERENCES question_option (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE question_answer DROP CONSTRAINT fk_dd80652d620a36a7');
        $this->addSql('DROP INDEX idx_dd80652d620a36a7');
        $this->addSql('ALTER TABLE question_answer DROP selected_question_options_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE question_answer_question_option DROP CONSTRAINT FK_227397E2A3E60C9C');
        $this->addSql('ALTER TABLE question_answer_question_option DROP CONSTRAINT FK_227397E2AE1159F4');
        $this->addSql('DROP TABLE question_answer_question_option');
        $this->addSql('ALTER TABLE question_answer ADD selected_question_options_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE question_answer ADD CONSTRAINT fk_dd80652d620a36a7 FOREIGN KEY (selected_question_options_id) REFERENCES question_option (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_dd80652d620a36a7 ON question_answer (selected_question_options_id)');
    }
}
