import { promises as fs } from 'fs';
import path from 'path';

import { Project } from '~types/project';

const getProjects = async (): Promise<Project[]> => {
  const projectsPath = path.join(process.cwd(), './data/projects.json');
  const projects = await fs.readFile(projectsPath, 'utf8');
  return JSON.parse(projects).projects;
};

export default getProjects;
