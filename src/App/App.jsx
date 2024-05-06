import React from 'react'
import Card from '../Card/Card'
import Opcao from '../Opcao/Opcao'
import "./App.css"
import icon from '../../interactive-rating-component-main/images/icon-star.svg'


const App = ()=>{
    const [ativo, setAtivo] = React.useState('')
  return(
    <>
   <Card
   icon={icon}
   title="How did we do?"
   text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"

   button="Submit"
   />
   
</> 
    
  )
}
export default App;
