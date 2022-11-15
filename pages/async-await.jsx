import React, { useState } from 'react'

const AsyncAwait = () => {
    const [name, setName] = useState('Name')

    const callFirstName = () => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('Eky')
            }, 2000)
        })
    }
    const callLastName = () => {
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve('Zulianto')
            }, 2000)
        })
    }

    const setFullname = async () => {
        // let firstName = 'Eky'
        // let lastName = ' Zulianto'
        // setName(firstName+lastName)
        // callback
        // callFirstName((res)=>{
        //     callLastName(res2=> {
        //         let firstName = res
        //         let lastName = res2
        //         setName(firstName+lastName)

        //     })
        // })

        // callFirstName()
        // .then(res => {
        //     return callLastName(res)
        // })
        // .then(res2 => {
        //     setName(res2)
        // })
        // Promise.all([callFirstName(), callLastName()])
        // .then(([res, res2]) => setName(res+res2))
        let firstName = await callFirstName()
        let lastName = await callLastName()
        setName(firstName+lastName)
    }

    return (
        <div style={{ display:'flex', height:'100vh', alignItems: 'center', justifyContent:'center' }}>
            <div className='m-auto text-center'>
                <button onClick={setFullname}>Change</button>
                <div className='mt-4 text-decoration-underline'>{name}</div>
            </div>
        </div>
  )
}

export default AsyncAwait