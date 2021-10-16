import { INode } from 'src/models/INode';
import { Node } from 'src/models/node.model';

export class State {
  list: INode[] = [
    {
      url: 'https://thawing-springs-53971.herokuapp.com',
      online: false,
      name: 'Node 1',
      loading: true,
      blocks:null,
    },
    {
      url: 'https://secret-lowlands-62331.herokuapp.com',
      online: false,
      name: 'Node 2',
      loading: true,
      blocks:null,
    },
    {
      url: 'https://calm-anchorage-82141.herokuapp.com',
      online: false,
      name: 'Node 3',
      loading: true,
      blocks:null,
    },
    {
      url: 'http://localhost:3002',
      online: false,
      name: 'Node 4',
      loading: true,
      blocks:null,
    }
  ];
}
