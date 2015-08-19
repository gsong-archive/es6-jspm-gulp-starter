import path from 'path';


export let buildDir = '.build/';
export let distDir = 'dist/';
export let srcDir = 'app/';
export let tmpDir = '.tmp/';
let jspmDir = 'jspm_packages';

export let buildAll = path.join(buildDir, '**/*');
export let buildScriptsDir = path.join(buildDir, 'scripts/');

export let srcAll = path.join(srcDir, '**/*');
export let srcHtml = path.join(srcDir, 'index.html');
export let srcScript = path.join(srcDir, '**/*.js');
export let srcStyle = path.join(srcDir, '**/*.scss');

export let tmpImage = path.join(tmpDir, '**/*.+(png|jpg|svg)');
export let tmpScriptsDir = path.join(tmpDir, 'scripts/');

export let fontAwesomePath = path.join(jspmDir, 'npm/font-awesome@4.4.0/');
export let fontSrc = path.join(fontAwesomePath, 'fonts/*');
