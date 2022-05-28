import { sync } from 'del';
import { copySync } from 'fs-extra';

sync([
    'dist/**',
    'lib/**',
    'docs/**',
]);

copySync('public', 'docs');
