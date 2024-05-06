
import React from 'react';
import "./Opcao.css";

const Opcao = ({value}) => {
  const [ativo, setAtivo] = React.useState(false)
  const Color = ativo === true? 'var(--blue)' : 'hsl(216, 12%, 20%)'
  const font = ativo === true? 'var(--brown)' : 'var(--medium-grey)'

  return (
    <>
      <button
        className='modal'
        style={{ 
          backgroundColor: Color,
          color: font
        }}
        onClick={() => setAtivo(!ativo)}
      >
        {value}
      </button>
    </>
  );
  
}

export default Opcao;