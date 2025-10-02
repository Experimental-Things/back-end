import { Injectable, Res, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

type ResponseData =
  | Record<string, any>
  | Record<string, unknown>
  | Array<any>
  | number
  | string
  | Buffer
  | Blob
  | null;

@Injectable()
export class ResponseService {
  constructor() {}

  // ************** For json response handling
  /**
   *
   * @param response
   * @param data
   * @param code
   * @param status
   * @param message
   * @param statusCode
   * @returns
   * failed response
   */
  failed(
    @Res() response: Response,
    data: ResponseData = {},
    code: number | null = null,
    status: boolean = false,
    message: string = '',
    statusCode: number = 500,
  ): Response {
    return response.status(statusCode).json({
      code: code || statusCode,
      message: message || 'failed',
      data,
      status,
    });
  }

  /**
   *
   * @param response
   * @param data
   * @param code
   * @param status
   * @param message
   * @param statusCode
   * @returns
   * success
   */
  success(
    response: Response,
    data: ResponseData = {},
    code: number | null = null,
    status: boolean = true,
    message: string,
    statusCode: number = HttpStatus.OK,
  ): Response {
    return response.status(statusCode).json({
      code: code || statusCode,
      message: message || 'success',
      data: data,
      status,
    });
  }

  // *************** direct resposne handling
  /**
   *
   * @param response
   * @param data
   * @param statusCode
   * @returns
   */
  send(
    @Res() response: Response,
    data: ResponseData = {},
    statusCode: number = HttpStatus.OK,
  ) {
    try {
      return response.status(statusCode || HttpStatus.OK).send(data);
    } catch (error) {
      return this.failed(response, data);
    }
  }

  /**
   *
   * @param error error object
   * @param statusCode [number]
   */
  handleException(
    error: Error,
    statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR,
  ) {
    throw new HttpException(
      { message: error.message, error: JSON.stringify(error) },
      statusCode,
    );
  }
}
