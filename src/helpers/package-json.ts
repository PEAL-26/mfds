import fs from 'fs-extra'

export function getVersionFromPackageJson() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.version;
  } catch (error) {
    console.error('Erro ao ler o arquivo package.json:', error);
    return null;
  }
}

