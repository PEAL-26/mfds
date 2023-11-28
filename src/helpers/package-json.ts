let getVersionFromPackageJson: () => string | null = () => null;

if (typeof window === 'undefined') {
  // Este código será executado apenas no ambiente Node.js
  const fs = require('fs-extra');

  getVersionFromPackageJson = () => {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return packageJson.version as string;
    } catch (error) {
      console.error('Erro ao ler o arquivo package.json:', error);
      return null;
    }
  };
}

export { getVersionFromPackageJson };
