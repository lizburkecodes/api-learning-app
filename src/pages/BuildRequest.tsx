import { useState } from 'react'
import LessonLayout from '../components/LessonLayout'

function BuildRequest() {
  const [method, setMethod] = useState('GET')

  const requestExamples: Record<string, string> = {
    GET: `GET /users
Authorization: Bearer token_here`,
    POST: `POST /users
Content-Type: application/json
Authorization: Bearer token_here

{
  "name": "mock wahlberg",
  "email": "mock.wahlberg@example.com"
}`,
    PUT: `PUT /users/42
Content-Type: application/json
Authorization: Bearer token_here

{
  "name": "mock wahlberg",
  "email": "updated@example.com"
}`,
    DELETE: `DELETE /users/42
Authorization: Bearer token_here`,
  }

  return (
    <LessonLayout
      title="Build a Request"
      intro="Most APIs use HTTP, the same protocol your browser uses to load web pages. Every request you send follows a standard structure made up of a method, URL, headers, and sometimes a body."
    >
      <h3>APIs use HTTP</h3>
      <p>
        Most modern APIs use <strong>HTTP</strong> (Hypertext Transfer Protocol).
        It&apos;s the same system your browser uses when you visit a website.
      </p>
      <p>
        When you click a link or load a page, your browser sends an HTTP request.
        APIs work the same way — they just return data instead of full web pages.
      </p>

      <h3>Parts of an API request</h3>
      {/* TODO: you learn css in a barn? clean up */}
      <div className="request-builder">
        <div className="request-top-row">
          <select
            className="request-method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>

          <input
            className="request-url"
            type="text"
            defaultValue="https://api.example.com/users"
          />
        </div>

        <div className="request-panel-grid">
          <article className="request-panel">
            <h4>HTTP Method</h4>
            <p>
              The HTTP method tells the server what kind of action you want to take.
              It is the first part of every request.
            </p>
            <ul>
              <li><strong>GET</strong> retrieves data</li>
              <li><strong>POST</strong> creates data</li>
              <li><strong>PUT</strong> replaces data</li>
              <li><strong>DELETE</strong> removes data</li>
            </ul>
          </article>

          <article className="request-panel">
            <h4>URL / Endpoint</h4>
            <p>The URL tells the API where the request should go.</p>
            <p className="mini-code">/users</p>
          </article>

          <article className="request-panel">
            <h4>Headers</h4>
            <p>
              Headers send extra information, like the content type or an API
              key.
            </p>
            <div className="mini-code-block">
              <p>Content-Type: application/json</p>
              <p>Authorization: Bearer token_here</p>
            </div>
          </article>

          <article className={`request-panel ${method === 'GET' || method === 'DELETE' ? 'request-panel-muted' : ''}`}>
            <h4>Body</h4>
            <p>
              The body contains data being sent to the server, usually with
              POST or PUT requests.
            </p>
            <div className="mini-code-block">
              <p>{`{`}</p>
              <p>&nbsp;&nbsp;"name": "mock wahlberg",</p>
              <p>&nbsp;&nbsp;"email": "mock.wahlberg@example.com"</p>
              <p>{`}`}</p>
            </div>
          </article>
        </div>
      </div>

      <h3>A real example</h3>
      <div className="example-box">
        <pre>{requestExamples[method]}</pre>
      </div>

      <h3>The key idea</h3>
      <p>
        A request is just a structured message. It tells the server what you
        want, where to send it, and any data or context needed to process it.
      </p>
    </LessonLayout>
  )
}

export default BuildRequest