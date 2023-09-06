import Company from '@/components/Company'
import Gallery from '@/components/Gallery'
import Global from '@/components/Global'
import Home from '@/components/Home'
import Packages from '@/components/Packages'
import Serivces from '@/components/Serivces'
import React from 'react'

const page = () => {
  return (
    <div>
      <Home/>
      <Serivces/>
      <Company/>
      <Packages/>
      <Global/>
      <Gallery/>
    </div>
  )
}

export default page