import './recent-activite.css'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
]

const Activites = () => {
  return (
    <section className="activite">
      <h2 className="activiteHeader">Recent Activities</h2>

      <div className="activiteWrapper">
        <div className="activiteItem">
          <div className="activeImageWrapper">
            <img
              className="activitePhoto"
              src={images[0].url}
              alt="Jack Ben photo"
            />
          </div>
          <div className="activiteProfiles">
            <p className="activiteName">Jack Ben</p>
            <p className="activiteDate">Sep 22, 2021</p>
          </div>
          <p className="activiteSumm green">$ 236.55</p>
        </div>

        <div className="activiteItem">
          <div className="activeImageWrapper">
            <img
              className="activitePhoto"
              src={images[1].url}
              alt="Kattie Parker photo"
            />
          </div>

          <div className="activiteProfiles">
            <p className="activiteName">Kattie Parker</p>
            <p className="activiteDate">Jul 13, 2021</p>
          </div>
          <p className="activiteSumm red">$ 315.00</p>
        </div>
        <div className="activiteItem">
          <div className="activeImageWrapper">
            <img
              className="activitePhoto"
              src={images[2].url}
              alt="Joanna Petrova photo"
            />
          </div>
          <div className="activiteProfiles">
            <p className="activiteName">Joanna Petrova</p>
            <p className="activiteDate">Jun 27, 2021</p>
          </div>
          <p className="activiteSumm green">$ 181.37</p>
        </div>
      </div>
    </section>
  )
}

export default Activites
