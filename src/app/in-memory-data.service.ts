import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MyComponent } from './my-component';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const components = [{
        id: 0,
        componentLabel: 'Component 1',
        componentDesc: 'Component description',
        componentType: ' ',
        assessmentGroup: ' ',
        dataType: ' ',
        maxScore: ' ',
        passingScore: ' ',
        calcMethode: ' '        
    }];
    return {components};
  }
}