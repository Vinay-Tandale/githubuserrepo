'use client'
import octokit from '@/app/Octakit'
import UserCard from '@/components/card'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        getuser(params.id)
    },[])
async function getuser(id) {
    let d=await octokit.request(`GET /users/${id}`, {
      username: id,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    setdata([d.data])
    console.log(d)
  }
    return (
    <div>
        {data.map((x)=>{
             return(
                <UserCard data={x} />
            )
        })}
        {/* <img src={data.avatar_url} height={100} width={100}></img>
         {Object.keys(data).map((x)=>{
            return(
                <>
                {x} ={ data[x]} <br/>
                </>
            )
         })} */}
    </div>
  )
}

export default page