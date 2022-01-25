import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { route } from "next/dist/server/router";
import { Router, useRouter } from "next/router";
import react from "react";
import appConfig from "../config.json";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
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
    `}</style>
  );
}

/*function fazerTitulo(){ //Ignora tudo que esta dentro da tag componente 
    return  (
    <h1>Isso é um componente react </h1> 
        )
}

function HomePage() {
    return(
        <div>
            <GlobalStyle/>
        <fazerTitulo>Oi mundo</fazerTitulo> 
        <style jsx>{`
          h1 {
            color: blue;
          }
          fazerTitulo{
              color:${appConfig.theme.colors.neutrals['900']};
          }
        `}</style>
      </div>
    )
  }
  
  export default HomePage*/

export default function PaginaInicial() {
  // const username = 'DarkB0M'; O state com 2 itens um vazio e uma função
  const [username, setUsername] = react.useState("DarkB0M");
  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[1000],
          backgroundImage:
            "url(https://cdn.wallpapersafari.com/59/76/kjnZVG.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function Submit (infosDoEvento){
            infosDoEvento.preventDefault()
              console.log('Oi envio o formulario')
              const roteamento = useRouter()
            }}
            
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              value={username}
              onChange={function handler(event) {
                console.log("Usuario digitou", event.target.value);
                // Trocar valor da variável
                const valor = event.target.value;
                setUsername(valor) //Atraves do react

              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[1100],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["1000"],
                mainColor: appConfig.theme.colors.primary[1000],
                mainColorLight: appConfig.theme.colors.primary[1000],
                mainColorStrong: appConfig.theme.colors.primary[1100],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
