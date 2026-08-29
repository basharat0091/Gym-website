import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Herosection'
import Aboutsection from '@/components/Aboutsection'
import Programssection from '@/components/Programssection'
import Trainersection from '@/components/Trainersection'
import Membership from '@/components/Membership'
import Ctasection from '@/components/Ctasection'
export default function page() {
  return (
    <div>
      {/* <Navbar/>  */}
      <HeroSection/>
      <Aboutsection/>
      <Programssection/>
      <Trainersection/>
      <Membership/>
      <Ctasection/>
    </div>
  )
}
