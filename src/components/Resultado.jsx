import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    margin-top: 30px;
    align-items: center;
    gap: 1rem;
    
`;

const Imagen = styled.img`
    display: block;
    width: 150px;
`;

const Texto = styled.p`
    font-size: 18px;
    span {
      font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 26px;
    span {
      font-weight: 700;
    }
`;

const Resultado = ({resultado}) => {
  const {PRICE, LASTUPDATE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL} = resultado  

  return (
    <Contenedor>
      <Imagen 
        src={`http://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
        <div>
          <Precio><span>Precio actual: {PRICE}</span></Precio>
          <Texto><span>Variación durante el día: {CHANGE24HOUR}</span></Texto>
          <Texto><span>Precio más alto del día: {HIGHDAY}</span></Texto>
          <Texto><span>Precio más bajo del día: {LOWDAY}</span></Texto>
          <Texto><span>Última actualización: {LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado