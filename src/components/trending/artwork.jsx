import './trending.css'

import { ReactComponent as Arrows } from '../../assets/svg/arrows.svg'
import { ReactComponent as Heart } from '../../assets/svg/heart.svg'

const Artwork = props => {
  return (
    <div className="trending-artworkBox">
      <div className="trending-picture">
        <img alt="artwork" src={props.image} />
        <Heart />
        <span style={{ display: props.isTimeLeft ? 'block' : 'none' }}>
          {props.timeLeft}
        </span>
      </div>

      <div className="trending-artDescription bgColorDarkMode">
        <div
          className="trending-auction"
          style={{ display: props.isAuction ? 'block' : 'none' }}
        >
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
          <h3 className="fontColorDarkMode">{props.artName}</h3>
        </div>
        <div className="trending-autor">
          <img src={props.avatar} alt="autor's avatar" />
          <span>{props.autor}</span>
          <div className="trending-raiting">
            <Arrows />
            <span>{props.raiting}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artwork
