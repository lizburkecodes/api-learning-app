import LessonLayout from '../components/LessonLayout'

function HowApisWork() {
  return (
    <LessonLayout
      title="How APIs Work"
      intro="Every API interaction follows the same pattern: a request is sent, the server processes it, and a response comes back."
    >
      <h3>The basic flow</h3>

      <div className="request-flow">
        <div className="flow-step">
          <span className="step-num">1</span>
          <p>Client sends a request</p>
        </div>

        <div className="flow-arrow">→</div>

        <div className="flow-step">
          <span className="step-num">2</span>
          <p>Server processes it</p>
        </div>

        <div className="flow-arrow">→</div>

        <div className="flow-step">
          <span className="step-num">3</span>
          <p>Server sends a response</p>
        </div>
      </div>

      <h3>Step-by-step breakdown</h3>

      <div className="step-card">
        <h4>1. The client sends a request</h4>
        <p>
          This could be a frontend app, mobile app, or backend service. It sends
          a request to a specific API endpoint.
        </p>
      </div>

      <div className="step-card">
        <h4>2. The server receives and processes it</h4>
        <p>
          The server checks the request, runs any logic, and may interact with a
          database or other services.
        </p>
      </div>

      <div className="step-card">
        <h4>3. The server returns a response</h4>
        <p>
          The response usually includes a status code and data (often in JSON
          format).
        </p>
      </div>

      <h3>What this looks like in practice</h3>
      <div className="example-box">
        <p><strong>Request:</strong> GET /users</p>
        <p><strong>Response:</strong> 200 OK</p>
        <p>{`{ "users": [...] }`}</p>
      </div>

      <h3>The key idea</h3>
      <p>
        Every API call is just a conversation. The client asks for something,
        and the server answers.
      </p>
    </LessonLayout>
  )
}

export default HowApisWork