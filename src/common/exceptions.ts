import { HttpException, UnprocessableEntityError } from "./interfaces";

export class NoApiKeyProvidedException extends Error {
  readonly status: number = 500;
  readonly name: string = "NoApiKeyProvidedException";
  readonly message: string =
    `Missing API key. Pass it to the constructor (new Knock({apiKey: "sk_test_Sz3IQjepeSWaI4cMS4ms4sMuU", signingKey: "VGhpcyBpcyB..."})) ` +
    `or define it in the KNOCK_API_KEY environment variable.`;
}

export class NoSigningKeyProvidedException extends Error {
  readonly status: number = 500;
  readonly name: string = "NoSigningKeyProvidedException";
  readonly message: string =
    `Missing signing key key. Pass it to the constructor (new Knock({apiKey: "sk_test_Sz3IQjepeSWaI4cMS4ms4sMuU", signingKey: "VGhpcyBpcyB..."})) ` +
    `or define it in the KNOCK_SIGNING_KEY environment variable.`;
}

export class GenericServerException implements HttpException {
  readonly name: string = "GenericServerException";
  readonly message: string = "The request could not be completed.";

  constructor(
    readonly status: number,
    message: string | undefined,
    readonly requestID: string,
  ) {
    if (message) {
      this.message = message;
    }
  }
}

export class UnauthorizedException implements HttpException {
  readonly status: number = 401;
  readonly name: string = "UnauthorizedException";

  constructor(
    readonly code: string,
    readonly message: string,
    readonly requestID: string,
  ) { }
}

export class NotFoundException implements HttpException {
  readonly status: number = 404;
  readonly name: string = "NotFoundException";
  readonly message: string;

  constructor(path: string, readonly requestID: string) {
    this.message = `The requested path '${path}' could not be found.`;
  }
}

export class UnprocessableEntityException implements HttpException {
  readonly status: number = 422;
  readonly name: string = "UnprocessableEntityException";
  readonly message: string;

  constructor(errors: UnprocessableEntityError[], readonly requestID: string) {
    this.message = `The following errors occurred:\n`;

    for (const { type, field, message } of errors) {
      this.message = this.message.concat(`\t${field}(${type}): ${message}\n`);
    }
  }
}

export class BadRequestException implements HttpException {
  readonly status: number = 400;
  readonly name: string = "BadRequestException";

  constructor(
    readonly code: string,
    readonly message: string,
    readonly requestID: string,
  ) {
    this.message = `A ${code} error occurred: ${message}`;
  }
}
