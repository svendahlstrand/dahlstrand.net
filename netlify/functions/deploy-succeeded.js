import fetch from 'node-fetch';

const pingCloud = async (url) => {
  const params = new URLSearchParams();
  params.append('url', url);

  await fetch('http://rpc.rsscloud.io:5337/ping', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: params,
  })
    .then(response => response.json())
    .then(json => {
      json.url = url;
      console.log(json);
    });
};

const handler = async (_event, _context) => {
  await pingCloud('https://dahlstrand.net/notes/feed.xml');
  await pingCloud('https://dahlstrand.net/microblog.xml');

  return {
    statusCode: 200
  };
}

module.exports = { handler }
