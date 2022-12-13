import './referral.css'
import codeBarre from '../../assets/images/code-barre.png'

const Referral = () => {
  return (
    <section className="referral">
      <div className="referralCodeWrapper">
        <img src={codeBarre} alt="code barre" className="referralCodeBarre" />
        <p className="referralNum">2AAK 25I9</p>
      </div>
      <div className="referralPersonal">
        <span className="referralBar"></span>
        <p className="referralPersonalText">YOUR REFERRAL CODE</p>
        <p className="referralPersonalNum">2AAK25I9</p>
        <span className="referralBar"></span>
      </div>
      <div className="referralBtnWrapper">
        <button className="btn btnShare">Share</button>
        <button className="btn btnCopy">Copy</button>
      </div>
    </section>
  )
}

export default Referral
