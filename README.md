# PROJETO SolarCocaCola

Este projeto é um projeto feito em SpringBoot e React que inclui funcionalidades de CRUD para clientes, CRUD Para Produtos , CRUD Para Promoções e relacionamento das entidades Clientes e Produtos.

## Funcionalidades

Adicionar, atualizar, deletar, listar clientes , adicionar produtos , visuazliar produtos e remover produdos de  clientes.
Adicionar, atualizar, deletar, listar clientes de  Produtos.
Adicionar, atualizar, deletar, listar clientes de  Promoções.

## Requisitos

Java 17 ou superior

Maven

MySQL

Para executar a aplicação no Visual Studio Code, você precisa instalar a extensão "Debugger for Java"

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

https://cocacola-api-production.up.railway.app

Caso a hospedagem tenha terminado, utilize http://localhost:8080 para as requisições.

configure o banco de dados como explicado a cima 

e siga esses passos para integrar com front :

1.git clone https://github.com/DaviCalebe/solar-coca-cola

2. cd price-management-api
  Compile e execute a aplicação

4. abra o diretorio price-management-app

  ![image](https://github.com/HirokiAsano1/CocaCola-api/assets/78913393/d0d90b96-a1f9-4fab-be84-da1306593b61)
  
 nesses tres arquivos troque baseURl atual por http://localhost:8080
