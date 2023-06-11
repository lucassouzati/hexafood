FROM node:18

USER root

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app

RUN chown -R node:node /home/node/app

USER node

RUN yarn install 

# # Execute o comando para gerar os arquivos do Prisma
RUN yarn prisma generate

# # Comando para executar o ORM Prisma
CMD ["yarn", "prisma", "migrate", "dev"]

# Comando para iniciar a aplicação NestJS
# Descomente a linha abaixo e comente o comando acima caso queira iniciar a aplicação ao invés de executar apenas o ORM Prisma
# CMD ["yarn", "start"]

EXPOSE 3000
