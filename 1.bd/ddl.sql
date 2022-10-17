create database paticeri ;
use paticeri;

create table tb_usuario(
id_usuario           int primary key auto_increment,
nm_usuario           varchar(500),
img_usuario          varchar(500),
ds_cpf               varchar(14),
dt_nascimento        date,
ds_telefone          varchar(40),
ds_ConfirSenha       varchar(500)
);


create table tb_login_usuario(
id_login_usuario  			 int primary key auto_increment,
id_usuario					 int,
ds_email					 varchar(800),
ds_senha					 varchar(800),
bt_trocar					 boolean,
cod_reset					 varchar(20),
cod_expiracao_cod 			 datetime,
foreign key (id_usuario)  references tb_usuario(id_usuario)
);

/*tabela de login do adm*/
create table tb_admin_login (
id_admin             int primary key auto_increment,
ds_email             varchar(200),
ds_senha             varchar(100)
);

/*tabela da categoria*/
create table tb_categoria(
id_categoria         int primary key auto_increment,
nm_categoria         varchar(100)
);

/*tabala de produto*/
create table tb_produto(
    id_produto           int primary key auto_increment,
    id_categoria         int,
    nm_produto           varchar(300),
    img_produto          varchar(500),
    nr_peso              decimal(5,3),
    nr_preco             decimal(5,2),
    ds_sinopse           varchar(300),
    ds_ingredientes      varchar(300),
    nr_estoque           int,
    bt_destaque          boolean,   
foreign key (id_categoria) references tb_categoria(id_categoria)
);

/*tabela de clientes */
create table tb_cliente(
id_cliente           int primary key auto_increment,
nm_cliente           varchar(500),
ds_email             varchar(500),
ds_senha             varchar(100),
img_cliente          varchar(500),
ds_cpf               varchar(14),
dt_nascimento        date,
nr_telefone          varchar(30)
);


/*tabela de pedidos de cada cliente */
create table tb_pedido(
id_pedido            int primary key auto_increment,
id_cliente           int,
ds_contato           varchar(100),
qtd_produtos         int,
vl_total             decimal(6,2),
dt_entrega           date,
bt_aprovado          boolean,
ds_status            varchar(100),
foreign key (id_cliente) references tb_cliente(id_cliente)
);

/*tabela intermediaria entre os produtos e pedidos*/
create table tb_produto_pedido(
id_produto_pedido   int primary key auto_increment,
id_produto          int,
id_pedido           int,
foreign key (id_produto) references tb_produto(id_produto),
foreign key (id_pedido) references tb_pedido(id_pedido)
);