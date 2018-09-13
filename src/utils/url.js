import qs from 'qs';

export function getUrlQuery () {
  const {search, hash} = window.location;
  let searchStr = search || hash;
  searchStr = searchStr.replace(/^(.*?\?)/, '');

  return qs.parse(searchStr);
}

export function concatUrlAndQuery (baseUrl, query) {
  let search = '';
  let _url = baseUrl.indexOf('?') > -1 ? baseUrl : baseUrl + '?';
  search = _url.split('?')[1];
  const urlQ = qs.parse(search);
  if (typeof query === 'object') {
    query = qs.stringify(query);
  } else if (typeof query !== 'string' || !query) {
    return baseUrl;
  }

  if (/\?/.test(baseUrl)) {
    baseUrl += '&';
  } else {
    baseUrl += '?';
  }

  return baseUrl + query;
}
