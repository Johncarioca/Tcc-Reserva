import { con } from "./conection.js";


export async function CadastroEndereco(id, endereco) {
  const comando =
    `
      insert into tb_endereco( id_usuario, ds_rua, ds_complemento, nm_estado, ds_referencia, ds_bairro, ds_cep, ds_cidade )
				 values( ?, ?, ?, ?, ?, ?, ?, ?);
      `
  const [infos] = await con.query(comando, [id, endereco.rua, endereco.complemento, endereco.estado, endereco.referencia, endereco.bairro, endereco.cep, endereco.cidade]);
  return infos.insertId;
}

export async function ListarEnderecoId(id) {
  const comando =
    `   
        select id_endereco 		as id,
              ds_rua				as rua,
              ds_complemento 		as complemento,
              nm_estado 			as estado,
              ds_cidade 			as cidade,
              ds_referencia		as referencia,
              ds_bairro 			as bairro,
              ds_cep				as cep
          from tb_endereco
        where id_usuario = ?

  `
  const [registro] = await con.query(comando, [id])
  return registro;
}

export async function EnderecoId(idUser) {
  const comando =
    `   
        
      select id_endereco 		as idEnd,
             ds_rua				as rua          
        from tb_endereco
       where id_usuario = ?;

  `
  const [registro] = await con.query(comando, [idUser])
  return registro;
}


export async function ApagarEnderecoId(idEnd) {
  const comando =
    `   
    delete 
        from tb_endereco
      where id_endereco     = ?;

    `
  const [registro] = await con.query(comando, [idEnd])
  return registro;
}