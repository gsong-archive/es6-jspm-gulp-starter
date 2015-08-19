import path from 'path';


export let buildDir = '.build/';
export let distDir = 'dist/';
export let srcDir = 'app/';
export let tmpDir = '.tmp/';

export let buildAll = path.join(buildDir, '**/*');

export let srcAll = path.join(srcDir, '**/*');
export let srcHtml = path.join(srcDir, 'index.html');
export let srcScript = path.join(srcDir, '**/*.js');
export let srcStyle = path.join(srcDir, '**/*.scss');

export let tmpImage = path.join(tmpDir, '**/*.+(png|jpg|svg)');
export let tmpStyle = path.join(tmpDir, '**/*.scss');

export let sourceMapRelativePath = path.join('../', srcDir);
