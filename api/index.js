export default async function handler(req, res) {
  const target = req.query.url;
  if (!target) {
    return res.status(200).send(`
      <html>
        <body>
          <h2>Proxy</h2>
          <form method="GET">
            <input name="url" placeholder="https://example.com" style="width:300px"/>
            <button type="submit">Go</button>
          </form>
        </body>
      </html>
    `);
  }

  try {
    const response = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    const contentType = response.headers.get('content-type') || '';
    const body = await response.text();

    res.setHeader('Content-Type', contentType);
    res.status(200).send(body);
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
}
