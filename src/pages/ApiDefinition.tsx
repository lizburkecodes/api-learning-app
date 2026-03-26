import LessonLayout from '../components/LessonLayout'

function WhatIsApi() {
  return (
    <LessonLayout
      title="What is an API?"
      intro="An API lets one piece of software communicate with another. Before getting further into requests and responses, it helps to understand that basic idea first."
    >
      <h3>A simple definition</h3>
      <p>
        API stands for <strong>Application Programming Interface</strong>. In
        practice, an API is a way for one system to ask another system for data
        or actions.
      </p>
      <p>
        Instead of building everything from scratch, developers use APIs to
        connect apps to services that already exist.
      </p>

      <div className="api-flow">
        <div className="flow-box">Client (Your app)</div>
        <div className="flow-arrow">→</div>
        <div className="flow-box">API</div>
        <div className="flow-arrow">→</div>
        <div className="flow-box">Server / Data</div>
      </div>

      <h3>What problem does an API solve?</h3>
      <p>
        APIs allow different systems to work together. Your app can request
        something from another service, and that service can send back the
        result in a structured way.
      </p>
      <p>
        This makes it possible to add powerful features without having to build
        every piece yourself.
      </p>

      <h3>Examples you already use</h3>
      <div className="example-grid">
        <article className="example-card">
          <h4>Payments</h4>
          <p>
            An app sends payment information to a payment API and gets back a
            success or failure response.
          </p>
        </article>

        <article className="example-card">
          <h4>Weather</h4>
          <p>
            A weather app requests forecast data from a weather API and displays
            the result to the user.
          </p>
        </article>

        <article className="example-card">
          <h4>Login</h4>
          <p>
            “Sign in with Google” works by connecting your app to Google's API
            for authentication.
          </p>
        </article>

        <article className="example-card">
          <h4>Maps</h4>
          <p>
            A map or delivery app can request directions, locations, or travel
            time from a mapping API.
          </p>
        </article>
      </div>

      <h3>Why APIs matter</h3>
      <ul>
        <li>They let apps share data and functionality</li>
        <li>They save developers time</li>
        <li>They make integrations possible</li>
        <li>They power many of the features people use every day</li>
      </ul>

      <h3>The big takeaway..</h3>
      <p>
        The most important thing to remember is this: an API is a structured way
        for software systems to communicate with each other.
      </p>
    </LessonLayout>
  )
}

export default WhatIsApi