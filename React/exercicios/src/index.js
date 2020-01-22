import React from 'react'
import ReactDOM from 'react-dom'


import Saudacao from "./componentes/Saudações" /* Todos componentes personalizados devem começar 
com letra maiúscula */
ReactDOM.render(
<div>
<Saudacao tipo = 'Bom dia,' nome = "Joao"/>
<Saudacao tipo = 'Boa tarde,' nome = "Maria"/>
</div>
, document.getElementById('root'))

