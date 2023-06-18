"use client"

import React, { useEffect, useState } from 'react'
import Styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {

  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(()=> {
  //   const getData = async () => {
  //     isLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //   cache: 'no-store',
  // })

  // if (!res.ok) {
  //   setErr(true)
  // }
  
  //  const data = await res.json()

  // setData(data)
  // isLoading(false)
  //   };

  // getData()

  // }, []);

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  return (
    <div className={Styles.container}>Dashboard</div>
  )
}

export default Dashboard