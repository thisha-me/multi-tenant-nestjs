import { InternalServerErrorException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { PROVIDER } from 'src/constants/providers';

export const TenantConnectionProvider = {
  provide: PROVIDER.TENANT_CONNECTION,
  useFactory: async (request, connection: Connection) => {
    if (!request.tenant_id) {
      throw new InternalServerErrorException(
        'Make sure to use the TenantsMiddleware',
      );
    }
    return connection.useDb(`tenant_${request.tenant_id}`);
  },
  inject: [REQUEST, getConnectionToken()],
};
