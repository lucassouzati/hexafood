#!/bin/sh
# start.sh

# Execute as migrações do Prisma
yarn prisma migrate dev

# Inicie a aplicação
exec yarn start:dev