INSERT INTO tb_level(name) VALUES ('Bronze');
INSERT INTO tb_level(name) VALUES ('Prata');
INSERT INTO tb_level(name) VALUES ('Ouro');

INSERT INTO tb_region(name) VALUES ('Norte');
INSERT INTO tb_region(name) VALUES ('Nordeste');
INSERT INTO tb_region(name) VALUES ('Centro-Oeste');
INSERT INTO tb_region(name) VALUES ('Sudeste');
INSERT INTO tb_region(name) VALUES ('Sul');

INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('14.591.464/0001-20',3, 'Supermercado Bom Preço', 'contato@bompreco.com','(55) 5559-8719','Norte');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('23.875.321/0001-98',2, 'Distribuidora Mega Bebidas', 'contato@megabebidas.com','(22) 3456-7890','Sul');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('38.206.946/0001-14',1, 'Restaurante Sabor Caseiro', 'contato@saborcaseiro.com','(44) 5678-9012','Nordeste');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('41.739.582/0001-07',2, 'Lanchonete Top Lanches', 'contato@toplanches.com','(33) 4567-8901','Sudeste');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('55.820.376/0001-33',3, 'Hotel Estrela do Norte', 'contato@estreladonorte.com','(55) 6789-0123','Norte');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('69.153.284/0001-61',2, 'Padaria Delícia', 'contato@padariadelicia.com','(66) 7890-1234','Sul');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('73.499.205/0001-48',1, 'Farmácia Popular', 'contato@farmaciapopular.com','(77) 8901-2345','Centro-Oeste');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('84.762.931/0001-26',1, 'Loja de Conveniência Rápida', 'contato@convenienciarapida.com','(88) 9012-3456','Sudeste');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('98.240.173/0001-92',2, 'Mercado Econômico', 'contato@mercadoeconomico.com','(99) 0123-4567','Centro-Oeste');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('10.759.833/0001-65',1, 'Mercearia Familiar', 'contato@merceariafamiliar.com','(10) 1234-5678','Sul');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('12.658.194/0001-09',3, 'Supermercado Top', 'contato@supermercadotop.com','(20) 2345-6789','Centro-Oeste');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('27.914.603/0001-70',3, 'Quitanda Saudável', 'contato@quitandazsaudavel.com','(30) 3456-7890','Sul');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('32.685.917/0001-83',2, 'Loja de Orgânicos Natureza', 'contato@orgaonatureza.com','(40) 4567-8901','Sul');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('47.538.026/0001-41',1, 'Minimercado Veloz', 'contato@minimercadoveloz.com','(50) 5678-9012','Norte');
INSERT INTO tb_client(Cnpj,level_id, name, email,phone_number,region) VALUES ('58.201.735/0001-52',3, 'Empório da Economia', 'contato@emporiodaeconomia.com','(60) 6789-0123','Nordeste');


INSERT INTO tb_product(name,quantity_ml, stock_quantity,category)VALUES ('Coca-Cola', 2000, 90,'Refrigerantes');
INSERT INTO tb_product(name,quantity_ml, stock_quantity,category)VALUES ('Fanta Uva', 350, 120,'Refrigerantes');
INSERT INTO tb_product(name,quantity_ml, stock_quantity,category)VALUES ('Schweppes', 1000, 100,'Refrigerantes');
INSERT INTO tb_product(name,quantity_ml, stock_quantity,category)VALUES ('Água Mineral Bonafont', 2000, 100,'Águas');

