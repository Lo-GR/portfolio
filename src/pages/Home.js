import React, {useState} from 'react'
import Background from '../components/Background/Background'
import HomePopup from '../components/HomePopup'
import HomepageLinks from '../components/HomepageLinks'
import "../styles/pages/Home.css"
import Footer from '../components/shared/Footer'
import browserCheck from '../functions/browserCheck'

export default function Home() {
  const [appear, setAppear] = useState(false);
  const browser = browserCheck();
  return (
    <div>
      <Background animatedBackground={browser === "Apple Safari" ? false : true}/>
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
