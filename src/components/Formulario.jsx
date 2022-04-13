import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from '../data/monedas.js'
import Error from './Error'

const InputSubmit = styled.input `
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Formulario = ({setMonedas}) => {

  const [ criptos, setCriptos ] = useState([])
  const [ error, setError ] = useState(false)

  const [ moneda, SelectMonedas ] = useSelectMonedas('Selecciona una Moneda', monedas)
  const [ criptomonedas, SelectCriptomonedas ] = useSelectMonedas('Selecciona una Criptomoneda', criptos)


  useEffect( () => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD'
      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      
      const arrayCripto = resultado.Data.map ( cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      setCriptos(arrayCripto)
    }
    consultarAPI();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  
    if([moneda, criptomonedas].includes('')) {
      setError(true)
      return
    }
    
    setError(false)
    setMonedas({
      moneda,
      criptomonedas
    })
  }

  return (
    <>
      {error && <Error>Ambos campos deben estar completos</Error> }
    
      <form 
        onSubmit={handleSubmit}
        >
          <SelectMonedas/>
          <SelectCriptomonedas/>

          <InputSubmit
              type="submit"
              value="cotizar"
              />
      </form>
    </>
  )
}

export default Formulario