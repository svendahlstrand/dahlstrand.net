import fetch from 'node-fetch';

const handler = async (_event, _context) => {
  const params = new URLSearchParams();
  params.append('url', 'https://dahlstrand.net/notes/feed.xml')

  const response = await fetch('http://rpc.rsscloud.io:5337/ping', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: params,
  })
    .then(response => response.json());

  console.log(response);

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
}

module.exports = { handler }
