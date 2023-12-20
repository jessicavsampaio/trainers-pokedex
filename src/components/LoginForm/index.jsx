import React, { useState } from 'react'
import { FormDiv } from './styles'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormDiv>
      <div>
        <h2>Acesso</h2>

        <form>
          <label htmlFor='nome'>Nome de treinador</label>
          <input id='nome' onChange={(e) => setName(e.target.value)} required placeholder="Digite o seu nome" />

          <label htmlFor='senha'>Senha</label>
          <input id='senha' type='password' onChange={(e) => setPassword(e.target.value)} required placeholder='Digite uma senha' />
        </form>

        <p>Não possui cadastro? <Link to={`/register`}>Cadastrar</Link></p>

        <button>Entrar</button>

      </div>
    </FormDiv>
  )
}
