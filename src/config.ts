import { workspace } from 'vscode';
import { homedir } from 'os';
import { join } from 'path';

const configuration = () => workspace.getConfiguration('wiki');

export const indexFile = 'index.md';

export const getBasePath = () =>
  configuration().get<string>('basePath')
  || join(homedir(), 'vscode_wiki');

export const getRootFile = () => join(getBasePath(), indexFile);

export const getTargetRootFile = () =>
  configuration().get<string>('targetRootFile');

export const getTargetPath = () => configuration().get<string>('targetPath');
