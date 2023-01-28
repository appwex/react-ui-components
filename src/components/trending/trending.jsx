import './trending.css'
import { useState } from 'react'

import artwork1 from '../../assets/images/artwork1.png'
import artwork2 from '../../assets/images/artwork2.png'
import artwork3 from '../../assets/images/artwork3.png'
import artwork4 from '../../assets/images/artwork4.png'
import avatar1 from '../../assets/images/avatar-artwork1.png'
import avatar2 from '../../assets/images/avatar-artwork2.png'
import avatar3 from '../../assets/images/avatar-artwork3.png'
import avatar4 from '../../assets/images/avatar-artwork4.png'

import Artwork from './artwork'

const Trending = () => {
  const [dark, toggleMode] = useState(false)

  return (
    <div className={`trending-container ${dark ? 'DarkMode' : 'LightMode'} `}>
      {/* dark/light mode toggler */}
      <div className="toggle" onClick={() => toggleMode(!dark)}>
        <span className={`${dark ? 'slide' : ''}`} />
      </div>

      <nav className="trending-header">
        <h2 className="fontColorDarkMode">Trending NFTs</h2>
        <a href="#">See all</a>
      </nav>
      <div className="trending-filter">
        <a href="#" className="trending-filterItem bgColorDarkMode">
          <p className="trending-icon iconBgDarkMode">🔥</p>
          <p className="trending-iconDescription fontColorDarkMode">Trending</p>
        </a>
        <a href="#" className="trending-filterItem bgColorDarkMode">
          <p className="trending-icon iconBgDarkMode">🎨</p>
          <p className="trending-iconDescription fontColorDarkMode">Art</p>
        </a>
        <a href="#" className="trending-filterItem bgColorDarkMode">
          <p className="trending-icon iconBgDarkMode">🕹️</p>
          <p className="trending-iconDescription fontColorDarkMode">Game</p>
        </a>
        <a href="#" className="trending-filterItem bgColorDarkMode">
          <p className="trending-icon iconBgDarkMode">👗</p>
          <p className="trending-iconDescription fontColorDarkMode">Fashion</p>
        </a>
        <a href="#" className="trending-filterItem bgColorDarkMode">
          <p className="trending-icon iconBgDarkMode">🎸</p>
          <p className="trending-iconDescription fontColorDarkMode">Music</p>
        </a>
      </div>

      <div className="trending-artworks">
        {/* art 1 */}
        <Artwork
          image={artwork1}
          avatar={avatar1}
          timeLeft="20h Left"
          isTimeLeft={true}
          artName="Weary Artwork"
          autor="Darwin Shaffer"
          raiting="4.5 ETH"
          isAuction={true}
        />

        {/* art 2 */}
        <Artwork
          image={artwork2}
          avatar={avatar2}
          artName="Spectrum of Color"
          autor="Chace Rajas"
          raiting="6.5 ETH"
        />

        {/* art 3 */}
        <Artwork
          image={artwork3}
          avatar={avatar3}
          artName="Shape Artwork"
          autor="Sakaw_332"
          raiting="3.5 ETH"
        />

        {/* art 4 */}
        <Artwork
          image={artwork4}
          avatar={avatar4}
          timeLeft="15h Left"
          isTimeLeft={true}
          artName="Colorful Art"
          autor="Anna Sadboy"
          raiting="3.5 ETH"
        />
      </div>
    </div>
  )
}

export default Trending
