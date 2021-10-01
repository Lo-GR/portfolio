import React, {useState} from 'react'
import Background from '../components/Background/Background'
import HomePopup from '../components/HomePopup'
import HomepageLinks from '../components/HomepageLinks'
import "../styles/pages/Home.css"
import Footer from '../components/shared/Footer'

export default function Home({}) {
  const [appear, setAppear] = useState(false);
  return (
    <div>
      <Background animatedBackground={true}/>
      <HomePopup setAppear={setAppear}/>
      {appear ? 
        <div>
          <HomepageLinks />
          <Footer />
        </div>
      : 
        null}
    </div>
  )
}
