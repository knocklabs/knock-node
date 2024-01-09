export interface FetchClientConfig {
  baseURL?: string;
  headers?: Record<string, string>;
}

export interface FetchRequestConfig<D = any> {
  params?: Record<string, string>;
  headers?: Record<string, string>;
  body?: D;
}

export interface FetchResponse<T = any> extends Response {
  data: T;
}

export interface FetchResponseErrorData<T = any> {
  status: number;
  headers: Record<string, string>;
  data: T;
}

export class FetchResponseError extends Error {
  readonly response: FetchResponseErrorData;

  constructor(response: FetchResponseErrorData) {
    super();
    this.response = response;
  }
}

const defaultConfig: FetchClientConfig = {
  baseURL: "",
  headers: {},
};

export default class FetchClient {
  config: FetchClientConfig;

  constructor(config?: FetchClientConfig) {
    this.config = {
      ...defaultConfig,
      ...config,
    };
  }

  async request(
    method: string,
    path: string,
    config: FetchRequestConfig = {},
  ): Promise<FetchResponse> {
    const url = this.buildUrl(path, config.params);
    const headers = {
      ...this.config.headers,
      ...(config.headers ?? {}),
    };

    const response = await fetch(url, {
      method,
      headers,
      body: config.body
        ? this.prepareRequestBody(config.body, headers)
        : undefined,
    });
    const data = await this.getResponseData(response);

    if (!response.ok) {
      throw new FetchResponseError({
        status: response.status,
        data,
        headers: this.headersToObject(response.headers),
      });
    }

    return {
      ...response,
      data,
    };
  }

  async get(path: string, config: FetchRequestConfig): Promise<FetchResponse> {
    return this.request("GET", path, config);
  }

  async post(path: string, config: FetchRequestConfig): Promise<FetchResponse> {
    return this.request("POST", path, config);
  }

  async put(path: string, config: FetchRequestConfig): Promise<FetchResponse> {
    return this.request("PUT", path, config);
  }

  async delete(
    path: string,
    config: FetchRequestConfig,
  ): Promise<FetchResponse> {
    return this.request("DELETE", path, config);
  }

  private buildUrl(path: string, params?: FetchRequestConfig["params"]): URL {
    const url = new URL(this.config.baseURL + path);

    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value),
      );
    }

    return url;
  }

  private prepareRequestBody(
    data: any,
    headers: Record<string, string>,
  ): string | FormData {
    if (headers?.["Content-Type"]?.includes("application/json")) {
      if (typeof data === "string") {
        return data;
      }
      return JSON.stringify(data);
    }

    if (data instanceof FormData) {
      return data;
    }

    return JSON.stringify(data);
  }

  private async getResponseData(response: Response) {
    if (!response.body) {
      return undefined;
    }

    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else if (contentType && contentType.includes("text")) {
      data = await response.text();
    } else {
      data = await response.blob();
    }

    return data;
  }

  private headersToObject(headers: Headers): Record<string, string> {
    let result: Record<string, string> = {};
    for (let [key, value] of headers) {
      result[key] = value;
    }
    return result;
  }
}
