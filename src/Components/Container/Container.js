import React from 'react'

export default function Container({ children }) {
    return (
        <div className='w-full h-screen max-w-7xl bg-black mx-auto'>
            {children}
        </div>
    )
}
