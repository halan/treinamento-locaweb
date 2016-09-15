import axios from 'axios';

/*const podcastSearchUrl = (term) => (
  `https://crossorigin.me/https://itunes.apple.com/search?entity=podcast&country=BR&term=${term}`
);

axios.get(podcastSearchUrl('NerdCast'));
*/

const rssUrl = (rssOriginalUrl) => `http://rss2json.com/api.json?rss_url=${rssOriginalUrl}`

const validateResponse = (response) => {
  if(response.data.status === 'error' ) throw 'errorr!';
  return response;
}

export const getPodcast = (url) => axios.get(rssUrl(url)).then(validateResponse);
