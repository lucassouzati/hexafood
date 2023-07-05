#!/bin/sh
# start.sh

# Execute as migrações do Prisma
yarn prisma migrate dev

yarn prisma db seed

# Inicie a aplicação
exec yarn start:dev
