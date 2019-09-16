    import React from "react";
import Formacaoacademica from "./components/Formacaoacademica";
import Informacoespessoais from "./components/Informacoespessoais";
import Linguas from "./components/Linguas";
import Skills from "./components/Skills";
import "./styles.css";
import Experienciasprofissionais from "./components/Experienciasprofissionais";
function App() {
return (
    <>
     <h1> Tudo sobre </h1> 

         <Informacoespessoais/> 
         <Skills/> 
         <Formacaoacademica/> 
         <Experienciasprofissionais/> 
         <Linguas/>         
        

        
    </>
)
}

export default App;