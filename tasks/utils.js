import path from 'path';

import jspm from 'jspm';

import * as paths from './paths';


const SCRIPT = 'main';
const INFILE = path.join(paths.tmpScriptsDir, SCRIPT);
export const OUTFILE = path.join(paths.buildScriptsDir, SCRIPT + '.js');


export default (options) => {
  let builder = new jspm.Builder();

  return builder.buildSFX(INFILE, OUTFILE, options);
}
