import { AUTOLOGIN_STORAGE_KEY_VALUE } from '@hooks/storage/useAutoLogin';
import { LOGIN_RESPONSE_STORAGE_KEY_VALUE } from '@hooks/storage/useLoginResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponseBody } from '@typedef/components/Login/login.types';
import axios, { AxiosError } from 'axios';

export const API_ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'http://ec2-13-124-170-69.ap-northeast-2.compute.amazonaws.com:8080'
    : 'http://ec2-13-124-170-69.ap-northeast-2.compute.amazonaws.com:8080';

axios.defaults.baseURL = `${API_ORIGIN}/api/v1`;

axios.defaults.validateStatus = function (status) {
  return status <= 500;
};

axios.interceptors.request.use(
  (req) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[AxiosRequest]', req);
    }

    return req;
  },
  (err) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('[AxiosError]', err);
    }

    return err.response;
  },
);

axios.interceptors.response.use(
  async (res) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[AxiosResponse]', res);
    }

    if (res.status === 401) {
      const loginResponse = await AsyncStorage.getItem(
        LOGIN_RESPONSE_STORAGE_KEY_VALUE,
      );

      const autologin = await AsyncStorage.getItem(AUTOLOGIN_STORAGE_KEY_VALUE);

      if (!loginResponse) {
        return res;
      }

      const { accessToken, refreshToken } = JSON.parse(
        loginResponse,
      ) as LoginResponseBody;

      const { data, config } = await requestPost<LoginResponseBody>(
        apiRoute.auth.refresh,
        {},
        {
          accessToken,
          refreshToken,
          autoLogin: JSON.parse(autologin ?? 'false'),
        },
      );

      if (config.status === 200) {
        await AsyncStorage.setItem(
          LOGIN_RESPONSE_STORAGE_KEY_VALUE,
          JSON.stringify(data),
        );
      } else {
        await AsyncStorage.clear();
      }
    }

    return res;
  },
  (err: AxiosError) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('[AxiosError]', err);
    }

    return err.response;
  },
  {
    synchronous: true,
  },
);

export const apiRoute = {
  health: '/health',
  auth: {
    checkEmail: '/auth/dup/email',
    checkId: '/auth/dup/loginId',
    authCodeSend: '/auth/emailAuth',
    checkCode: '/auth/emailAuth/code',
    login: '/auth/login',
    findId: '/auth/loginId',
    findPassword: 'auth/password',
    refresh: '/auth/reissue',
    signup: '/auth/signup',
    kakao: '/auth/kakao?',
  },
  member: {
    loadProfile: '/members',
  },
  memo: {
    loadMemo: '/memos',
    addMemo: '/memos',
  },
};

export type BasicResponse<T> = {
  data: T;
  config: {
    status: number;
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestSecurePut<T>(
  url: string,
  header: object,
  body: object,
  token: string,
): Promise<BasicResponse<T>> {
  return axios
    .put(url, body, {
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}

export function requestPut<T>(
  url: string,
  header: object,
  body: object,
): Promise<BasicResponse<T>> {
  return axios
    .put(url, body, {
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
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
          },
        } as BasicResponse<T>),
    )
    .catch((err: AxiosError) => {
      return {
        data: {} as T,
        config: {
          status: err.response?.status,
        },
      } as BasicResponse<T>;
    });
}
