import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { MenuBar } from '../../components/header/MenuBar'
import { Slider } from '../../components/slider/Slider'
import { ColecoesDestaque } from '../../components/colecoesDestaque/ColecoesDestaque'

export const Home = () => {
  return (
    <div>
      {/* <MenuBar /> */}
      <Slider />
      <ColecoesDestaque />
      {/* <Footer /> */}
    </div>
  )
}


