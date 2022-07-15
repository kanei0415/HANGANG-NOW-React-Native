import axios from 'axios';

export const API_ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'https://backend.wim.kro.kr:6006'
    : 'https://backend.wim.kro.kr:6006';

axios.defaults.baseURL = `${API_ORIGIN}/api/v1`;

axios.interceptors.request.use((req) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(req);
  }

  return req;
});

axios.interceptors.response.use((res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(res);
  }

  return res;
});

export const apiRoute = {
  health: '/health',
  auth: {
    checkEmail: '',
    checkId: '',
    authCodeSend: '',
    login: '/auth/login',
    findId: '/auth/loginId',
    findPassword: 'auth/password',
    refresh: '/auth/reissue',
    signup: '/signup',
  },
};

export type BasicResponse<T> = {
  data: T;
  config: {
    status: number;
  };
};

export type BasicListApiResponse<T> = {
  data: T;
  meta: {
    total: number;
    page: number;
    maxPage: number;
    count: number;
  };
};

export function requestGet<T>(
  url: string,
  header: object,
): Promise<BasicResponse<T>> {
  return axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
            ...res.data?.meta,
          },
        } as BasicResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecureGet<T>(
  url: string,
  header: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
            ...res.data?.meta,
          },
        } as BasicResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicResponse<T>;
    });
}

export function requestDelete<T>(
  url: string,
  header: object,
): Promise<BasicResponse<T>> {
  return axios
    .delete(url, {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
            ...res.data?.meta,
          },
        } as BasicResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecureDelete<T>(
  url: string,
  header: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
            ...res.data?.meta,
          },
        } as BasicResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecurePost<T>(
  url: string,
  header: object,
  body: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
            ...res.data?.meta,
          },
        } as BasicResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicResponse<T>;
    });
}

export function requestPost<T>(
  url: string,
  header: object,
  body: object,
): Promise<BasicResponse<T>> {
  return axios
    .post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
            ...res.data?.meta,
          },
        } as BasicResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecurePatch<T>(
  url: string,
  header: object,
  body: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .patch(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
            ...res.data?.meta,
          },
        } as BasicResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicResponse<T>;
    });
}

export function requestMultipart<T>(
  url: string,
  header: object,
  body: FormData,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .post(url, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
        ...header,
      },
    })
    .then(
      (res) =>
        ({
          data: res.data as T,
          config: {
            status: res.status,
            ...res.data?.meta,
          },
        } as BasicResponse<T>),
    )
    .catch((err) => {
      console.error('[Axios Error]', err);

      return {
        data: {} as T,
        config: {
          status: -1,
        },
      } as BasicResponse<T>;
    });
}
