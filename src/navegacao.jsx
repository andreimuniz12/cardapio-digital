import './App.css';
function Navegacao({ alterarPaginaSelecionada }){
    return(
        <div className="navegacao">
            <button onClick={()=>alterarPaginaSelecionada(0)} className='botao-navegacao'>Pratos Principais </button>
            <button onClick={()=>alterarPaginaSelecionada(1)}  className='botao-navegacao'>Sobremesas</button>
            <button onClick={()=>alterarPaginaSelecionada(2)}  className='botao-navegacao'>Bebidas</button>
        </div> 
    ); 
}

export default Navegacao;