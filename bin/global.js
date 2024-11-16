#!/usr/bin/env node

const { generateName } = require('../src/index'); // Importa la función desde el módulo principal
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Configuración del CLI utilizando yargs
const argv = yargs(hideBin(process.argv))
  .usage('Usage: 40k-namegen [options]')
  .option('faction', {
    alias: 'f',
    type: 'string',
    description: 'Specify the faction for name generation (e.g., "space-marines", "chaos")',
    default: 'space-marines',
  })
  .option('official', {
    alias: 'o',
    type: 'boolean',
    description: 'Generate an official name (default: false)',
    default: false,
  })
  .help('h')
  .alias('h', 'help')
  .version('1.0.0')
  .alias('v', 'version')
  .epilog('For more information, visit https://github.com/Hinga2019/40k-namegen')
  .argv;

// Lógica principal para la generación de nombres
try {
  const name = generateName(argv.faction, argv.official);
  console.log(`Generated Name: ${name}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
