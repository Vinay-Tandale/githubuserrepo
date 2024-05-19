'use client'
import octokit from '@/app/Octakit'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const [data, setdata] = useState([])
    useEffect(()=>{getuserepos(params.id)},[])
    
    async function getuserepos(usernameac) {
        let userepo=await octokit.request(`GET /users/${usernameac}/repos`, {
          username: usernameac,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
        setdata(userepo.data)
        console.log(userepo)
      }
  return (
    <div>
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
                    url
                </th>
                
            </tr>
        </thead>
        <tbody>
        {data.map((x,index)=>{
          return(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img  src={x.owner.avatar_url} height={100} width={100} style={{borderRadius:'5rem'}} ></img>
            </th>
            <td class="px-6 py-4">
            {x.full_name}
            </td>
            <td class="px-6 py-4">
            <Link href={x.html_url} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> {x.full_name} </Link>
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
        })}

        </tbody>
    </table>
</div>
        {/* <h1 className='font-sans text-5xl text-center'> This Repo is of <i className='text-blue-600'>{params.id}</i></h1>
        {data.map((x)=>{
            return(
                <>
                {x.full_name}<br/>
                </>
            )
        })} */}
    </div>
  )
}

export default page