import LessonLayout from '../components/LessonLayout'

function ReadResponse() {
  return (
    <LessonLayout
      title="Read the Response"
      intro="After you send a request, the server responds with a status code, headers, and usually some data. Learning to read this response is key to working with APIs."
    >
      <h3>The parts of a response</h3>

      <div className="response-panel-grid">
        <article className="response-panel">
          <h4>Status Code</h4>
          <p>
            The status code tells you whether the request was successful or not.
          </p>
          <ul>
            <li><strong>200</strong> OK — success</li>
            <li><strong>201</strong> Created — resource created</li>
            <li><strong>400</strong> Bad Request — something is wrong</li>
            <li><strong>401</strong> Unauthorized — missing or invalid API key</li>
            <li><strong>403</strong> Forbidden — you don't have permission</li>
            <li><strong>404</strong> Not Found — resource doesn't exist</li>
            <li><strong>500</strong> Server Error — something broke</li>
          </ul>
        </article>

        <article className="response-panel">
          <h4>Headers</h4>
          <p>
            Headers provide metadata about the response. They tell the client how to
            interpret the data and give additional context. APIs use
  different headers depending on their needs.
          </p>

          <div className="header-group">
            <p className="header-group-title">Content & Format</p>
            <div className="mini-code-block">
              <p>Content-Type: application/json</p>
              <p>Content-Length: 348</p>
            </div>
          </div>

          <div className="header-group">
            <p className="header-group-title">Authentication</p>
            <div className="mini-code-block">
              <p>Authorization: Bearer token_here</p>
            </div>
          </div>

          <div className="header-group">
            <p className="header-group-title">Caching</p>
            <div className="mini-code-block">
              <p>Cache-Control: no-cache</p>
              <p>ETag: "abc123"</p>
            </div>
          </div>

          <div className="header-group">
            <p className="header-group-title">Rate Limiting</p>
            <div className="mini-code-block">
              <p>X-RateLimit-Limit: 100</p>
              <p>X-RateLimit-Remaining: 42</p>
            </div>
          </div>
        </article>

        <article className="response-panel">
          <h4>Body</h4>
          <p>
            The response body contains the actual data returned by the server.
          </p>
          <div className="mini-code-block">
            <p>{`{`}</p>
            <p>&nbsp;&nbsp;"id": 42,</p>
            <p>&nbsp;&nbsp;"name": "mock wahlberg"</p>
            <p>{`}`}</p>
          </div>
        </article>
      </div>

      <h3>A successful response</h3>
      <div className="example-box success">
        <pre>{`200 OK
Content-Type: application/json

{
  "id": 42,
  "name": "mock wahlberg",
  "email": "mock.wahlberg@example.com"
}`}</pre>
      </div>

      <h3>An error response</h3>
      <div className="example-box error">
        <pre>{`401 Unauthorized
Content-Type: application/json

{
  "error": "Invalid API key"
}`}</pre>
      </div>

      <h3>The key idea</h3>
      <p>
        The response tells you what happened. The status code gives a quick
        summary, and the body gives you the details.
      </p>
    </LessonLayout>
  )
}

export default ReadResponse