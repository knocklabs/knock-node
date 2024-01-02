export interface FetchClientConfig {
  baseURL: string;
  headers: Record<string, string>;
}

export interface FetchRequestConfig<D = any> {
  params?: Record<string, string>;
  headers?: Record<string, string>;
  body?: D;
}

export interface FetchResponse<T = any> extends Response {
  data: T;
}

export default class FetchClient {
  config: FetchClientConfig;

  constructor(config: FetchClientConfig) {
    this.config = config;
  }

  async request(
    method: string,
    path: string,
    config: FetchRequestConfig = {},
  ): Promise<FetchResponse> {
    const url = this.buildUrl(path, config.params);

    const response = await fetch(url, {
      method,
      headers: {
        ...this.config.headers,
        ...(config.headers ?? {}),
      },
      body: config.body ? JSON.stringify(config.body) : undefined,
    });

    const data = await this.getResponseData(response);

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
}
