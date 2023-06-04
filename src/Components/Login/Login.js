import React, { useReducer } from 'react'
import Container from '../Container/Container'
import { db } from '../../Firebase/Firebase'
import { Link, useNavigate } from 'react-router-dom'

function reducers(state, action) {
  return {
    ...state,
    [action.type]: action.value
  }
}

export default function Register() {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(reducers, {
    nickname: "",
    email: "",
    password: "",
    "password-conft": ""
  })

  const inputHandle = (e) => {
    dispatch({
      type: e.target.name,
      value: e.target.value
    })
  }

  const buttonHandle = () => {
    if (!state.email) return alert("E-Posta bölümü boş bırakılamaz.")
    if (!state.password) return alert("Parola bölümü boş bırakılamaz.")
    let { email } = state
    db.collection("users").doc(`${email}`).get().then((c) => {
      if (c.exists) {
        let { nickname, password } = c.data()
        if (password !== state.password) {
          alert("Parola yanlış.")
        } else {
          localStorage.setItem("userData", JSON.stringify({ nickname, email }))
          return navigate("/")
        }
      } else {
        alert("E-Posta yanlış.")
      }
    })
  }

  return (
    <Container>
      <div className='flex justify-center items-center h-full'>
        <div className='px-6 py-2 border-2 border-purple-700 rounded-xl text-white w-64'>
          <h1 className='text-xl font-semibold text-center'>Login</h1>
          <form className='flex flex-col'>
            <div className='flex flex-col my-2 gap-y-2'>
              <span className='text-start text-base font-semibold'>E-Posta</span>
              <input type="email" name='email' placeholder='E-Mail' className='p-1 outline-none bg-transparent border border-purple-700 rounded-xl' onChange={inputHandle} />
            </div>
            <div className='flex flex-col my-2 gap-y-2'>
              <span className='text-start text-base font-semibold'>Parola</span>
              <input type="password" name='password' placeholder='Password' className='p-1 outline-none bg-transparent border border-purple-700 rounded-xl' onChange={inputHandle} />
            </div>
          </form>
          <div className='flex flex-col items-center justify-center'>
            <button onClick={buttonHandle} className='my-2 py-1 px-2 bg-purple-700 font-semibold text-sm rounded-xl'>Gönder</button>
            <span className='mt-1 font-semibold text-sm'>Hesabın yok mu? <Link to="/register" className='text-blue-500'>Kayıt ol!</Link></span>
          </div>
        </div>
      </div>
    </Container>
  )
}
