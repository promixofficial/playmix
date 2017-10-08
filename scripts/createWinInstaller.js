var electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './release-builds/playmix-win32-ia32',
    outputDirectory: './release-builds/wininstaller64',
    authors: 'Akira Hanashiro',
    exe: 'playmix.exe'
  });
resultPromise.then(() => console.log("Success"), (e) => console.log(`Error: ${e.message}`));

if (handleSquirrelEvent()) {
  return;
}

function handleSquirrelEvent() {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function(args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // opcionalmente faz coisas como:
      // - adicionar o executavel ao PATH
      // - inserir registros de coisas como arquivos associados

      // instala atalhos no menu e na area de trabalho
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // desfaz qualquer coisa feita no --squirrel-install e no
      // --squirrel-updated

      // remove atalhos do menu e da area de trabalho
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // executado quando uma versao antiga esta saindo antes de
      // atualizar para a nova versao
      app.quit();
      return true;
  }
};
