# PROJETO SolarCocaCola

Este projeto é um projeto feito em SpringBoot e React que inclui funcionalidades como CRUD para Clientes, Produtos e Promoções, e também o relacionamento das entidades Clientes e Produtos.

## Funcionalidades

Adicionar, atualizar, deletar, listar Clientes, Produtos, Promoções, e também adicionar, deletar e listar os Produtos de cada cliente específico.

## Requisitos

Node.JS

Java 17 ou superior

Maven

MySQL

Para executar a aplicação no Visual Studio Code, você precisa instalar a extensão "Debugger for Java"

## Ligar o Servidor

<p>Para utilizar a aplicação, o usuário precisará baixar algumas dependências que não estão incluídas no arquivo do projeto. É possível baixá-las localmente apenas quando necessário, devido ao seu tamanho considerável. Você pode instalá-las rapidamente utilizando os seguintes comandos no terminal do VS Code:</p>

```
cd price-management-app
```
```
npm install
```

<p>Agora que você já baixou as dependências no arquivo, para retornar ao diretório inicial, basta executar o seguinte comando no terminal:</p>

```
npm run dev
```
<p>Pronto, o servidor local já está ativo. Para acessá-lo, basta clicar no link exibido no terminal.</p>

## Configuração do Banco de Dados
Obs : O banco está hospedado temporariamente , se a hospegagem terminar ou se optar usar seu propio banco de dados , utilize esses passo a passo :

Crie um banco de dados MySQL e configure as credenciais no arquivo application.propeties , localizado no diretorio resources:

spring.datasource.url=jdbc:mysql://localhost:3306/nome_do_seu_banco_de_dados

spring.datasource.username=seu_usuario

spring.datasource.password=sua_senha

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.show-sql=true

spring.jpa.properties.hibernate.format_sql=true

spring.jpa.open-in-view=true

spring.jpa.hibernate.ddl-auto=update

## Hospedagem 

O projeto Está hospedado nesse link:
https://gestaodepreco-solarcocacola.onrender.com/

A aplicação backend está hospedada temporariamente no seguinte link:

https://apicocacola.onrender.com

Caso a hospedagem tenha terminado, utilize http://localhost:8080 para as requisições.

configure o banco de dados como explicado a cima 

e siga esses passos para integrar com front :

1.git clone https://github.com/DaviCalebe/solar-coca-cola

2. cd price-management-api
  Compile e execute a aplicação

4. abra o diretorio price-management-app

  ![image](https://github.com/HirokiAsano1/CocaCola-api/assets/78913393/d0d90b96-a1f9-4fab-be84-da1306593b61)
  
 nesses tres arquivos troque baseURl atual por http://localhost:8080


## IMPORTANTE

É possível que a hospedagem tenha terminado pelo tempo grátis determinado pelos sites de deploy, então caso você não consiga acessar pelos links acima, da um pulinho no meu linkedin onde tem os detalhes da aplicação e um vídeo mostrando a experiência do usuário nela: https://www.linkedin.com/posts/davi-calebe-1a64681bb_react-springboot-mysql-activity-7208916626522460160-iL75?utm_source=share&utm_medium=member_desktop
