/*eslint-disable no-console */
import requireDir from 'require-dir';

// Load custom tasks from the `tasks` directory
try { requireDir('build/tasks'); } catch (err) { console.error(err); }
