import { enroladinhoMignon } from "./cardapio";
import './App.css';
function ItemCardapio({nome, descricao, preco, imagem}){
    return(
            <div>
                    <div className="container-item-cardapio">
                        <div className="informacoes-item-cardapio">
                            <h2>{nome}</h2>
                            <p>{descricao}</p>
                            <p>{preco}</p>
                        </div>
                        <img src={imagem} className="imagem-item-cardapio"></img>
                    </div>
            </div>

)
 

}
export default ItemCardapio;