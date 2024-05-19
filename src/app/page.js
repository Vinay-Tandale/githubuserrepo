'use client'
import React, { Suspense, useEffect, useState } from 'react'
import octokit from './Octakit'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  const [data, setdata] = useState([])
  useEffect(() => { getrpos() }, [])
  async function getrpos() {
    let d = await octokit.request('GET /repositories', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    setdata(d.data)
    console.log(d)
  }
 
 
  return (

    <>
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Profile Photo
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    UserName
                </th>
                <th scope="col" class="px-6 py-3">
                    Personal Profile
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          <Suspense>
        {data.length>0? data.map((x,index)=>{
          return(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img  src={x.owner.avatar_url} height={100} width={100} style={{borderRadius:'5rem'}} ></img>
            </th>
            <td class="px-6 py-4">
            {x.full_name}
            </td>
            <td class="px-6 py-4">
                {x.owner.login}
            </td>
            <td class="px-6 py-4">
            <Link href={'/Profile/'+x.owner.login} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> {x.full_name} </Link>
              </td>
            <td class="px-6 py-4">
                <Link href={'/Repo/'+x.owner.login} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">My repositories</Link>
            </td>
        </tr>

            // <div key={index}>
            //   <div className=''>
            //   <img  src={x.owner.avatar_url} height={100} width={100} ></img>
            //   <button className='bg-purple-500' onClick={(c)=>{getuser(x.owner.login)}}> get data</button>
            //   Profile <Link href={'/Profile/'+x.owner.login}> {x.full_name} </Link>
            //   </div>
            //   {x.full_name}
            //   <Link href={'/Repo/'+x.owner.login} >Click</Link>
            //   </div>
          )
        }):<h1>loading....</h1>}
</Suspense>
        </tbody>
    </table>
</div>

</>
  )
}

export default page