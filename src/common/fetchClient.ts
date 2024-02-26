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

export class FetchResponseError extends Error {
  readonly response: FetchResponse;

  constructor(response: FetchResponse) {
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

  private async request(
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
      body: config.body ? this.prepareRequestBody(config.body) : undefined,
    });
    const data = await this.getResponseData(response);

    // Assign data to the response as other methods of returning the response
    // like return { ...response, data } drop the response methods
    const fetchResponse: FetchResponse = Object.assign(response, {
      data,
    });

    if (!response.ok) {
      throw new FetchResponseError(fetchResponse);
    }

    return fetchResponse;
  }

  private buildUrl(path: string, params?: FetchRequestConfig["params"]): URL {
    const url = new URL(this.config.baseURL + path);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        // Send array values as URL-encoded arrays rather than the default comma-separated list
        // e.g. key=[1,2,3] instead of key=1,2,3
        const paramValue = Array.isArray(value) ? JSON.stringify(value) : value;
        url.searchParams.append(key, paramValue);
      });
    }

    return url;
  }

  private prepareRequestBody(data: any): string | FormData {
    if (typeof data === "string" || data instanceof FormData) {
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
}
