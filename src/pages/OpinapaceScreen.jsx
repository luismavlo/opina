import React from 'react'
import FooterLanding from '../components/shared/FooterLanding'
import HeaderLanding from '../components/shared/HeaderLanding'
import OpinaInterview from '../components/Lading/news-insights/OpinaInterview'
import NewsInsights from '../components/Lading/news-insights/NewsInsights'
import WebinarsLanding from '../components/Lading/news-insights/WebinarsLanding'
import '../components/Lading/news-insights/style/opinapace.css'

const OpinapaceScreen = () => {

  
  
  return (
    <>
      <HeaderLanding />
      <main className='opinapace'>
        <OpinaInterview />
        <NewsInsights />
        <WebinarsLanding />
      </main>
      <FooterLanding />
    </>
  )
}

export default OpinapaceScreen