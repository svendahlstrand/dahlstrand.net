const DEFAULT_REDIRECT_URL = 'https://micro.blog/sod';

export default async (request) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const postURLEncoded = encodeURIComponent(params.get('for'));

  const conversationURL = await fetch(`https://micro.blog/conversation.js?format=jsonfeed&url=${postURLEncoded}`)
    .then(response => response.json())
    .then(conversation => conversation.home_page_url)
    .catch(error => DEFAULT_REDIRECT_URL);

  return Response.redirect(conversationURL);
}
