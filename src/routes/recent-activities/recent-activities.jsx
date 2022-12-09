import './recent-activities.css'

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

const Activities = () => {
  return (
    <section className="activity">
      <h2 className="activityHeader">Recent Activities</h2>

      <div className="activityWrapper">
        <div className="activityItem">
          <div className="activityImageWrapper">
            <img
              className="activityPhoto"
              src={images[0].url}
              alt="Jack Ben photo"
            />
          </div>
          <div className="activityProfiles">
            <p className="activityName">Jack Ben</p>
            <p className="activityDate">Sep 22, 2021</p>
          </div>
          <p className="activitySumm green">$ 236.55</p>
        </div>

        <div className="activityItem">
          <div className="activityImageWrapper">
            <img
              className="activityPhoto"
              src={images[1].url}
              alt="Kattie Parker photo"
            />
          </div>

          <div className="activityProfiles">
            <p className="activityName">Kattie Parker</p>
            <p className="activityDate">Jul 13, 2021</p>
          </div>
          <p className="activitySumm red">$ 315.00</p>
        </div>
        <div className="activityItem">
          <div className="activityImageWrapper">
            <img
              className="activityPhoto"
              src={images[2].url}
              alt="Joanna Petrova photo"
            />
          </div>
          <div className="activityProfiles">
            <p className="activityName">Joanna Petrova</p>
            <p className="activityDate">Jun 27, 2021</p>
          </div>
          <p className="activitySumm green">$ 181.37</p>
        </div>
      </div>
    </section>
  )
}

export default Activities
