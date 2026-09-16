import Icon from './Icon';

const photo =
  'https://images.pexels.com/photos/7534563/pexels-photo-7534563.jpeg?cs=srgb&dl=pexels-artbovich-7534563.jpg&fm=jpg';

export default function Dashboard() {
  return (
    <section id="dashboard" className="section dashboard-section">
      <div className="container dashboard-wrap">

        <div className="dashboard-copy">
          <span className="eyebrow">
            <i />
            For property owners
          </span>

          <h2>
            Your property.
            <br />
            <span>One intelligent view.</span>
          </h2>

          <p className="lead">
            A custom DroyalSuites dashboard brings bookings, earnings,
            occupancy and property performance into one polished workspace.
          </p>

          <div className="mini-checks">
            <span>
              <Icon name="check" />
              Real-time bookings
            </span>

            <span>
              <Icon name="check" />
              Earnings analytics
            </span>

            <span>
              <Icon name="check" />
              Property management
            </span>

            <span>
              <Icon name="check" />
              Guest messages
            </span>
          </div>

          <a className="btn btn-dark" href="#contact">
            See dashboard demo
            <Icon name="arrow" size={17} />
          </a>
        </div>

        <div className="dashboard-card">

          <div className="dash-top">
            <div className="dash-logo">
              <span>DS</span>

              <b>
                Droyal
                <span>Dashboard</span>
              </b>
            </div>

            <div className="dash-user">
              Daniel · Owner <span>⌄</span>
            </div>
          </div>

          <div className="dash-body">

            <aside>
              <b>Overview</b>
              <span>Bookings</span>
              <span>Properties</span>
              <span>Payments</span>
              <span>Messages</span>
              <span>Analytics</span>
              <span>Settings</span>
            </aside>

            <main>

              <div className="dash-title">
                <div>
                  <small>Good afternoon, Daniel</small>
                  <h3>Property overview</h3>
                </div>

                <button>+ Add property</button>
              </div>

              <div className="dash-stats">

                <div>
                  <small>Total earnings</small>
                  <b>₦2.45m</b>
                  <em>+18.4%</em>
                </div>

                <div>
                  <small>Bookings</small>
                  <b>128</b>
                  <em>+12%</em>
                </div>

                <div>
                  <small>Occupancy</small>
                  <b>78%</b>
                  <em>+6%</em>
                </div>

                <div>
                  <small>Properties</small>
                  <b>24</b>
                  <em>+3</em>
                </div>

              </div>

              <div className="dash-lower">

                <div className="chart">

                  <div className="chart-head">
                    <b>Revenue performance</b>
                    <span>Last 30 days</span>
                  </div>

                  <div className="bars">
                    {[35, 52, 42, 68, 55, 82, 64, 92, 70, 100, 78, 88].map(
                      (height, index) => (
                        <i
                          key={index}
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>

                </div>

                <div className="recent">

                  <b>Recent bookings</b>

                  <div>
                    <span
                      className="thumb"
                      style={{
                        backgroundImage: `url(${photo})`,
                      }}
                    />

                    <p>
                      Luxury 2 Bedroom
                      <small>Lekki · 3 guests</small>
                    </p>

                    <em>Confirmed</em>
                  </div>

                  <div>
                    <span className="thumb second" />

                    <p>
                      Executive Suite
                      <small>VI · 2 guests</small>
                    </p>

                    <em>Pending</em>
                  </div>

                </div>

              </div>

            </main>

          </div>

        </div>

      </div>
    </section>
  );
}