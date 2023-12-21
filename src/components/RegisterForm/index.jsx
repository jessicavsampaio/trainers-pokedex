import React, { useState } from 'react'
import { FormDiv } from './styles'
import { Link } from 'react-router-dom'

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormDiv>
      <div>
        <h2>Cadastro</h2>

        <form>
          <label htmlFor='nome'>Nome de treinador</label>
          <input id='nome' onChange={(e) => setName(e.target.value)} required placeholder="Digite o seu nome" />

          <label htmlFor='senha'>Senha</label>
          <input id='senha' type='password' onChange={(e) => setPassword(e.target.value)} required placeholder='Digite uma senha' />

          <label htmlFor='confirmarSenha'>Confirme sua senha</label>
          <input id='confirmarSenha' type='password' onChange={(e) => setPassword(e.target.value)} required placeholder='Digite novamente sua senha' />
        </form>

        <p>Já possui cadastro? <Link to={`/login`}>Entrar</Link></p>

        <button>Cadastrar</button>

      </div>
    </FormDiv>
  )
}
