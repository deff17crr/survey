<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230918112420 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question_answer ADD selected_question_options_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE question_answer ADD CONSTRAINT FK_DD80652D620A36A7 FOREIGN KEY (selected_question_options_id) REFERENCES question_option (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_DD80652D620A36A7 ON question_answer (selected_question_options_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE question_answer DROP CONSTRAINT FK_DD80652D620A36A7');
        $this->addSql('DROP INDEX IDX_DD80652D620A36A7');
        $this->addSql('ALTER TABLE question_answer DROP selected_question_options_id');
    }
}
