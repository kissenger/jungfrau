import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import * as express from 'express';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import AppServerModule from './src/main.server';
import { createWindow } from 'domino';

// **** API setup - added gst
import mongoose from 'mongoose';
import ContactsModel from './schema/contact';

const dotenv = require('dotenv').config();
if (dotenv.error) {
  console.log(`ERROR from app.js: ${dotenv.error}`);
  process.exit(0);
}

const pwd = process.env['MONGODB_PASSWORD'];
const db = process.env['MONGODB_DBNAME'];
mongoose.connect(`mongodb+srv://root:${pwd}@cluster0-5h6di.gcp.mongodb.net/${db}?retryWrites=true&w=majority`);
mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .on('close', () => console.log('MongoDB disconnected'))
  .once('open', () => console.log('MongoDB connected') );
// **** End of API setup


// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {

  const server = express();
  const distFolder = join(process.cwd(), 'dist/beta/browser');
  const indexHtml =  join(distFolder, 'index.html');

  const template = readFileSync(indexHtml).toString();
  const window = createWindow(template);
  (global.window as any) = window;
  global.document = window.document;

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', distFolder);


  // *** API Endpoints
  server.use(express.json());
  server.get('/api/ping/', (req, res) => {
    res.status(201).json({hello: 'world'});
  })

  server.post('/api/store-email', async (req, res) => {
    try {
      const newDocument = await ContactsModel.create( {email: req.body.email} );
      res.status(201).json({_id: newDocument});
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  });

  // *** End of API Endpoints

  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export default AppServerModule;
