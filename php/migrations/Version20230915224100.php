<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230915224100 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE questionnaire_result ADD questionnaire_id INT NOT NULL');
        $this->addSql('ALTER TABLE questionnaire_result ADD CONSTRAINT FK_8ACCCE2ACE07E8FF FOREIGN KEY (questionnaire_id) REFERENCES questionnaire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_8ACCCE2ACE07E8FF ON questionnaire_result (questionnaire_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE questionnaire_result DROP CONSTRAINT FK_8ACCCE2ACE07E8FF');
        $this->addSql('DROP INDEX IDX_8ACCCE2ACE07E8FF');
        $this->addSql('ALTER TABLE questionnaire_result DROP questionnaire_id');
    }
}
