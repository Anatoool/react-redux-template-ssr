import { API_URL } from 'common/consts';

export async function apiRequest({
  url,
  method = 'get',
  body = null,
  success,
  fail = null,
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}) {
  const requestUrl = `${API_URL}${url}`;

  const requestOptions = {};
  requestOptions.method = method;
  requestOptions.headers = headers;
  requestOptions.body = body;

  try {
    const res = await fetch(requestUrl, requestOptions);
    const response = await res.json();
    if (res.status >= 400) {
      return response;
    }

    if (success && typeof success === 'function') {
      success(response || {});
    }

    return response;
  } catch (e) {
    if (fail && typeof fail === 'function') {
      return fail(e);
    }
  }
}
