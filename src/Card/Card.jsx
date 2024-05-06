import Opcao from '../Opcao/Opcao'

const Card = ({text,icon,title,button}) =>{

    return(
        <div className="card">
        <img src={icon} alt="" />
        <h1>{title}</h1>
        <p>{text}</p>
         <button>{button}</button>
         <Opcao 
         numero="1"/>
          <Opcao 
         numero="2"/>
          <Opcao 
         numero="3"/>
          <Opcao 
         numero="4"/>
          <Opcao 
         numero="5"/>
        </div>
    )
}
export default Card


