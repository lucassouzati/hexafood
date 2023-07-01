import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { CpfInvalidoException } from '../../../../core/application/exceptions/cpf-invalido.exception';
import { NomeInvalidoException } from '../../../../core/application/exceptions/nome-invalido.exception';
import { CpfJaExistenteException } from '../../../../core/application/exceptions/cpf-ja-existente.exception';

@Catch(CpfInvalidoException, NomeInvalidoException, CpfJaExistenteException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(400).json({
      statusCode: 400,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: exception.message,
    });
  }
}
