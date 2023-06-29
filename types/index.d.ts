import type { Plugin } from 'rollup';

/**
 * Converts the output file to an executable node script by adding shebang and changing the file permission.
 */
export default function executableScript(): Plugin;
