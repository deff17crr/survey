<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230914233228 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE question (id INT NOT NULL, questionnaire_id INT NOT NULL, type VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_B6F7494ECE07E8FF ON question (questionnaire_id)');
        $this->addSql('CREATE TABLE question_answer (id INT NOT NULL, questionnaire_result_id INT NOT NULL, question_id INT NOT NULL, correct BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_DD80652D943072D7 ON question_answer (questionnaire_result_id)');
        $this->addSql('CREATE INDEX IDX_DD80652D1E27F6BF ON question_answer (question_id)');
        $this->addSql('CREATE TABLE question_option (id INT NOT NULL, question_id INT NOT NULL, correct BOOLEAN NOT NULL, text VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_5DDB2FB81E27F6BF ON question_option (question_id)');
        $this->addSql('CREATE TABLE question_option_selected (id INT NOT NULL, question_answer_id INT DEFAULT NULL, question_option_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_7C57A40FA3E60C9C ON question_option_selected (question_answer_id)');
        $this->addSql('CREATE INDEX IDX_7C57A40FAE1159F4 ON question_option_selected (question_option_id)');
        $this->addSql('CREATE TABLE questionnaire (id INT NOT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE questionnaire_result (id INT NOT NULL, completed_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494ECE07E8FF FOREIGN KEY (questionnaire_id) REFERENCES questionnaire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE question_answer ADD CONSTRAINT FK_DD80652D943072D7 FOREIGN KEY (questionnaire_result_id) REFERENCES questionnaire_result (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE question_answer ADD CONSTRAINT FK_DD80652D1E27F6BF FOREIGN KEY (question_id) REFERENCES question (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE question_option ADD CONSTRAINT FK_5DDB2FB81E27F6BF FOREIGN KEY (question_id) REFERENCES question (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE question_option_selected ADD CONSTRAINT FK_7C57A40FA3E60C9C FOREIGN KEY (question_answer_id) REFERENCES question_answer (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE question_option_selected ADD CONSTRAINT FK_7C57A40FAE1159F4 FOREIGN KEY (question_option_id) REFERENCES question_option (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE question DROP CONSTRAINT FK_B6F7494ECE07E8FF');
        $this->addSql('ALTER TABLE question_answer DROP CONSTRAINT FK_DD80652D943072D7');
        $this->addSql('ALTER TABLE question_answer DROP CONSTRAINT FK_DD80652D1E27F6BF');
        $this->addSql('ALTER TABLE question_option DROP CONSTRAINT FK_5DDB2FB81E27F6BF');
        $this->addSql('ALTER TABLE question_option_selected DROP CONSTRAINT FK_7C57A40FA3E60C9C');
        $this->addSql('ALTER TABLE question_option_selected DROP CONSTRAINT FK_7C57A40FAE1159F4');
        $this->addSql('DROP TABLE question');
        $this->addSql('DROP TABLE question_answer');
        $this->addSql('DROP TABLE question_option');
        $this->addSql('DROP TABLE question_option_selected');
        $this->addSql('DROP TABLE questionnaire');
        $this->addSql('DROP TABLE questionnaire_result');
    }
}
