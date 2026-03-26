import { useState } from 'react'
import LessonLayout from '../components/LessonLayout'

type ScenarioKey = 'getUsers' | 'createUser' | 'unauthorized' | 'notFound'

type MockResponse = {
  status: string
  headers: string[]
  body: string
}

const mockResponses: Record<ScenarioKey, MockResponse> = {
  getUsers: {
    status: '200 OK',
    headers: [
      'Content-Type: application/json',
      'X-RateLimit-Limit: 100',
      'X-RateLimit-Remaining: 99',
    ],
    body: `{
  "users": [
    {
      "id": 1,
      "name": "Mock Wahlberg",
      "email": "mock.wahlberg@example.com"
    },
    {
      "id": 2,
      "name": "Taylor Bytes",
      "email": "taylor.bytes@example.com"
    }
  ]
}`,
  },
  createUser: {
    status: '201 Created',
    headers: [
      'Content-Type: application/json',
      'Location: /users/101',
    ],
    body: `{
  "id": 101,
  "name": "New User",
  "email": "new.user@example.com"
}`,
  },
  unauthorized: {
    status: '401 Unauthorized',
    headers: [
      'Content-Type: application/json',
      'WWW-Authenticate: Bearer',
    ],
    body: `{
  "error": "Invalid API key"
}`,
  },
  notFound: {
    status: '404 Not Found',
    headers: ['Content-Type: application/json'],
    body: `{
  "error": "Resource not found"
}`,
  },
}

function TryIt() {
  const [method, setMethod] = useState('GET')
  const [scenario, setScenario] = useState<ScenarioKey>('getUsers')
  const [response, setResponse] = useState<MockResponse | null>(null)

  const handleSendRequest = () => {
    setResponse(mockResponses[scenario])
  }

  return (
    <LessonLayout
      title="Try It"
      intro="Use this playground to simulate an API request and see what a response might look like. This is a safe way to practice reading results before working with a live API."
    >
      <h3>Choose a request to simulate</h3>

      <div className="try-it-builder">
        <div className="try-it-controls">
          <label className="form-group">
            <span>Method</span>
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              <option>GET</option>
              <option>POST</option>
              <option>DELETE</option>
            </select>
          </label>

          <label className="form-group">
            <span>Scenario</span>
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value as ScenarioKey)}
            >
              <option value="getUsers">Get users</option>
              <option value="createUser">Create user</option>
              <option value="unauthorized">Unauthorized request</option>
              <option value="notFound">Missing endpoint</option>
            </select>
          </label>

          <button className="send-button" onClick={handleSendRequest}>
            Send Request
          </button>
        </div>

        <div className="try-it-request-preview">
          <h4>Request Preview</h4>
          <div className="example-box">
            <pre>{`${method} ${
              scenario === 'getUsers'
                ? '/users'
                : scenario === 'createUser'
                  ? '/users'
                  : scenario === 'unauthorized'
                    ? '/users'
                    : '/missing-route'
            }`}</pre>
          </div>
        </div>
      </div>

      <h3>Response</h3>

      {response ? (
        <div className="try-it-response">
          <div
            className={`response-status ${
              response.status.startsWith('2') ? 'success' : 'error'
            }`}
          >
            {response.status}
          </div>

          <div className="response-output-grid">
            <div>
              <h4>Headers</h4>
              <div className="example-box">
                <pre>{response.headers.join('\n')}</pre>
              </div>
            </div>

            <div>
              <h4>Body</h4>
              <div className="example-box">
                <pre>{response.body}</pre>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-state">
          Click <strong>Send Request</strong> to see a simulated API response.
        </div>
      )}

      <h3>What to notice</h3>
      <ul>
        <li>The status code tells you whether the request succeeded</li>
        <li>Headers provide metadata about the response</li>
        <li>The body contains the returned data or error details</li>
      </ul>
    </LessonLayout>
  )
}

export default TryIt