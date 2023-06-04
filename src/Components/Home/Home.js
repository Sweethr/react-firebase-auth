import React from 'react'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'

export default function Home() {
    const auth = JSON.parse(localStorage.getItem("userData"))

    const quitHandle = () => {
        localStorage.removeItem("userData")
        window.location.reload()
    }

    return (
        <Container>
            <div className='flex flex-col justify-center items-center h-full text-white'>
                {auth ?
                    <div className='flex flex-col items-center w-96'>
                        <span className='text-xl'>Hoş geldin, {auth.nickname}.</span>
                        <span className='text-sm font-semibold text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit distinctio quod provident, dolore qui modi unde rem iure. Necessitatibus vero expedita natus unde nihil eum provident dolorem. Quaerat fuga vero quod aliquid, perspiciatis dolores, illo nisi velit rerum ad optio aperiam magnam officiis nihil odit animi eos quos itaque accusamus?</span>
                        <button className='mt-5 outline-none p-1 rounded-xl bg-purple-700 text-sm font-semibold' onClick={quitHandle}>Çıkış Yap</button>
                    </div>
                    :
                    <>
                        <h1 className='text-xl'>Hoş geldiniz, lütfen giriş yapın.</h1>
                        <span>Giriş yapmak için <Link to="/login" className='text-blue-500'>buraya</Link> tıklayın.</span>
                    </>
                }
            </div>
        </Container>
    )
}
