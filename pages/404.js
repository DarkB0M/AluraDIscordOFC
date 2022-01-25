import Astronauta from "../RetirarFundoAstronalta.png"
import appConfig from "../config.json";
function GlobalStyle() {
  return (
    <style global jsx>{`
        * {
          box-sizing: border-box;
          list-style: none;
          color:white;
        }
        body {
          font-family: "Open Sans", sans-serif;
          background-image:url(https://img.wallpapic-br.com/i8959-323-227/medium/galaxia-roxos-espaco-sideral-nebulosa-imagem-de-fundo.jpg);
          background-repeat:no-repeat;
          background-size:cover;
          overflow: hidden;
        }
        /* App fit Height */
        html,
        body,
        #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */
        .Titulo{
            margin-top:120px;
        }
        .image{
            position: absolute;
            left: 50%;
            top:20%;
            margin-left:190px
        }
      `}</style>
  );
}
setTimeout(function(){
    window.location.href = '/chat'
},10000);
const Page404 = () => {
  return (
    <>
      <div>
        <GlobalStyle />
        <h1 className="Titulo" style={{
            color:appConfig.theme.colors.neutrals[1200]
        }}>Ops... Pagina Não encontrada</h1>
        <h2 style={{
            color:appConfig.theme.colors.neutrals[1200]
        }}>O astronauta James ja esta ficando sem oxigênio ,Voltando em 10 Segundos</h2>
        <div>
        <img src="https://o.remove.bg/downloads/f6522596-c734-4c5c-8aff-6b534e280857/RetirarFundoAstronalta-removebg-preview.png" className="image"/>

        </div>
      </div>
    </>
  );
};
export default Page404;
