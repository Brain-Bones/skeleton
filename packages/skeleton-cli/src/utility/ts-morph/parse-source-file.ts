import { Project } from 'ts-morph';
import { nanoid } from 'nanoid';

const project = new Project({
	useInMemoryFileSystem: true,
	skipAddingFilesFromTsConfig: true,
	skipFileDependencyResolution: true,
	skipLoadingLibFiles: true
});

function parseSourceFile(code: string) {
	return project.createSourceFile(`${nanoid()}.ts`, code);
}

export { parseSourceFile };
