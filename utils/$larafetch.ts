import { $fetch } from 'ofetch';
import { parseCookies } from 'h3';

const CSRF_COOKIE = 'XSRF-TOKEN';
const CSRF_HEADER = 'X-XSRF-TOKEN';

export const larafetch = $fetch.create({
  credentials: 'include',
  async onRequest({ options }) {
    const { public: { apiUrl } } = useRuntimeConfig();
    const event = typeof useEvent === 'function' ? useEvent() : null;
    let token = event ? parseCookies(event)[CSRF_COOKIE] : useCookie(CSRF_COOKIE).value;

    if (
      import.meta.client &&
      ['post', 'delete', 'put', 'patch'].includes(options?.method?.toLowerCase() ?? '')
    ) {
      token = await initCsrf();
    }

    let headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      accept: 'application/json',
      ...options?.headers,
      ...(token && { [CSRF_HEADER]: token }),
    };

    if (import.meta.server) {
      const cookieString = event
        ? event.headers.get('cookie')
        : useRequestHeaders(['cookie']).cookie;

      headers = {
        ...headers,
        ...(cookieString && { cookie: cookieString }),
      };
    }

    options.headers = headers;
    options.baseURL = apiUrl;
  },
  async onResponseError({ response }) {
    const status = response.status;
    if ([500].includes(status)) {
      console.error('[Laravel Error]', response.statusText, response._data);
    }
  },
});

async function initCsrf() {
  const { apiUrl } = useRuntimeConfig().public;
  const existingToken = useCookie(CSRF_COOKIE).value;

  if (existingToken) return existingToken;

  await $fetch('/sanctum/csrf-cookie', {
    baseURL: apiUrl,
    credentials: 'include',
  });

  return useCookie(CSRF_COOKIE).value;
}
