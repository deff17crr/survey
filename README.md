To start this project, need to run just two commands:

1:``docker compose up -d`` it can take 5-8 minutes

2: ``docker compose exec php bin/console doctrine:migrations:migrate --no-interaction && docker compose exec php bin/console load-test-data``