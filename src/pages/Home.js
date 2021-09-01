import React, {useState} from 'react'
import Background from '../components/Background'
import HomePopup from '../components/HomePopup'
import HomepageLinks from '../components/HomepageLinks'
import "../styles/pages/Home.css"

export default function Home({}) {
  const [appear, setAppear] = useState(false);
  return (
    <div>
      <Background />
      <HomePopup setAppear={setAppear}/>
      {appear ? <HomepageLinks /> : null}
    </div>
  )
}
