import './coinValue.css'
import { ReactComponent as BitcoinIcon } from '../../assets/svg/bitcoin.svg'
import { ReactComponent as EtheriumIcon } from '../../assets/svg/etherium.svg'
import { ReactComponent as BnbIcon } from '../../assets/svg/bnb.svg'

const dataList = [
  {
    img: <BitcoinIcon />,
    name: 'Bitcoin',
    abb: 'BTC',
    price: '$58,092.10',
    interest: '+5.21%',
    id: 1,
  },
  {
    img: <EtheriumIcon />,
    name: 'Etherium',
    abb: 'ETH',
    price: '$3,512.10',
    interest: '+4.77%',
    id: 2,
  },
  {
    img: <BnbIcon />,
    name: 'BNB',
    abb: 'BNB',
    price: '$58,092.10',
    interest: '+0.60%',
    id: 3,
  },
]

const CoinValue = () => {
  const children = {
    name: 'Ade',
  }
  //class of dark toggle the dark mode
  return (
    <section className="">
      <div className="coins-container">
        <Card />
      </div>
    </section>
  )
}

const Card = () => {
  return (
    <div className="coins-wrapper">
      {dataList.map(list => {
        const { id, name, price, img, abb, interest } = list
        return (
          <div key={id} className="coin-card">
            <div className="logo">{img}</div>
            <div className="names">
              <h3 className="coin-name">{name}</h3>
              <p className="coin-abb">{abb}</p>
            </div>
            <div className="price">
              <p className="current-price">{price}</p>
              <p className="interest">{interest}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CoinValue
