import './trending.css'
import { useState } from 'react'

import { ReactComponent as Heart } from '../../assets/svg/heart.svg'
import { ReactComponent as Arrows } from '../../assets/svg/arrows.svg'
import Artwork1 from '../../assets/images/artwork1.png'
import Artwork2 from '../../assets/images/artwork2.png'
import Artwork3 from '../../assets/images/artwork3.png'
import Artwork4 from '../../assets/images/artwork4.png'
import Avatar1 from '../../assets/images/avatar-artwork1.png'
import Avatar2 from '../../assets/images/avatar-artwork2.png'
import Avatar3 from '../../assets/images/avatar-artwork3.png'
import Avatar4 from '../../assets/images/avatar-artwork4.png'

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
        <div className="trending-artworkBox">
          <div className="trending-picture">
            <img src={Artwork1} alt="artwork" />
            <Heart />
            <span>20h Left</span>
          </div>

          <div className="trending-artDescription bgColorDarkMode">
            <div className="trending-auction ">
              <div className="trending-auctionBox bgColorDarkMode">
                <p className="fontColorDarkMode ">Auction Ends</p>
                <p>
                  <span className="auctionBgDarkMode"> 19 </span> :
                  <span className="auctionBgDarkMode"> 58 </span> :
                  <span className="auctionBgDarkMode"> 26 </span>
                </p>
              </div>
            </div>
            <div className="trending-artName">
              <h3 className="fontColorDarkMode">Weary Artwork</h3>
            </div>
            <div className="trending-autor">
              <img src={Avatar1} alt="autor's avatar" />
              <span>Darwin Shaffer</span>
              <div className="trending-raiting">
                <Arrows />
                <span>4.5 ETH</span>
              </div>
            </div>
          </div>
        </div>

        {/* art 2 */}
        <div className="trending-artworkBox">
          <div className="trending-picture">
            <img src={Artwork2} alt="" />
            <Heart />
          </div>
          <div className="trending-artDescription bgColorDarkMode">
            <div className="trending-artName">
              <h3 className="fontColorDarkMode">Spectrum of Color</h3>
            </div>
            <div className="trending-autor">
              <img src={Avatar2} alt="" />
              <span>Chace Rajas</span>
              <div className="trending-raiting">
                <Arrows />
                <span>6.5 ETH</span>
              </div>
            </div>
          </div>
        </div>

        {/* art 3 */}
        <div className="trending-artworkBox">
          <div className="trending-picture">
            <img src={Artwork3} alt="" />
            <Heart />
          </div>
          <div className="trending-artDescription bgColorDarkMode">
            <div className="trending-artName">
              <h3 className="fontColorDarkMode">Shape Artwork</h3>
            </div>
            <div className="trending-autor">
              <img src={Avatar3} alt="" />
              <span>Sakaw_332</span>
              <div className="trending-raiting">
                <Arrows />
                <span>3.5 ETH</span>
              </div>
            </div>
          </div>
        </div>

        {/* art 4 */}
        <div className="trending-artworkBox">
          <div className="trending-picture">
            <img src={Artwork4} alt="" />
            <Heart />
            <span>15h Left</span>
          </div>
          <div className="trending-artDescription bgColorDarkMode">
            <div className="trending-auction unvisible bgColorDarkMode">
              <div className="trending-auctionBox">
                <p className="fontColorDarkMode ">Auction Ends</p>
                <p>
                  <span>19</span> : <span>58</span> : <span>26</span>
                </p>
              </div>
            </div>
            <div className="trending-artName">
              <h3 className="fontColorDarkMode">Colorful Art</h3>
            </div>
            <div className="trending-autor">
              <img src={Avatar4} alt="" />
              <span>Anna Sadboy</span>
              <div className="trending-raiting">
                <Arrows />
                <span>3.5 ETH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
