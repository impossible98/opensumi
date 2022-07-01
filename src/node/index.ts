import { ExpressFileServerModule } from '@opensumi/ide-express-file-server/lib/node';
import { CommonNodeModules } from '../../src/node/common-modules';
import { startServer } from './start-server';

startServer({
  modules: [
    ...CommonNodeModules,
    ExpressFileServerModule,
  ],
});
