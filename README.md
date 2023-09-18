To start this project, need to run just two commands:

1:``docker compose up -d`` it can take 5-8 minutes

2: load test data: ``docker compose exec php bin/console doctrine:migrations:migrate --no-interaction && docker compose exec php bin/console load-test-data``

Backend Stack: Symfony 6.3.4, PostgreSQL, ApiPlatform

Frontend Stack: TypeScript, React, Redux, React Hook Form, TailwindCSS


Sceenshots:


![alt text](https://sun9-29.userapi.com/impg/nrHV9tzCg5ZPRr69OWtW_DMaJyuXHFKo6k7WHw/YP39pETKV1o.jpg?size=874x588&quality=95&sign=598e299f8098c5af49e34330c5173b6b&type=album)
![alt text](https://sun9-49.userapi.com/impg/tG0qZF25pU0p4tBMJDyeBuTf2em_rEIhPGq-aw/ieSEkqGoUEc.jpg?size=966x759&quality=95&sign=6160b35a05a972856d0f9297bf7c3f7a&type=album)
![alt text](https://sun9-66.userapi.com/impg/f7BivMv75AZeCANw36uJvZaWMsYEX0H3PjKJzg/hDZxMeRAvpM.jpg?size=391x436&quality=95&sign=ae9b3e1029c6afb4ab7b5b3354ea4617&type=album)