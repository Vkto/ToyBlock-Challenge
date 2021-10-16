import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from './store';
import { Node } from 'src/models/node.model';
import { State } from './state';
import { INode } from 'src/models/INode';

interface IStatusNodeResponse{
  node_name: string
}
@Injectable({
  providedIn: 'root'
})
 class NodesStore extends Store<Node[]> {
  constructor(private api: ApiService) {
    super(new State().list);
  }

  public getNodes() {
    this._getNodes().subscribe((item) => {
      this.setState(item);
    });
  }

  public _getNodes() {
    const status = this.state.map(node => {
      return this.api.get<IStatusNodeResponse>(`${node.url}/api/v1/status`).pipe(
        catchError(() =>
          of({
            node_name: false
          })
        ),

        map<IStatusNodeResponse,INode >(({ node_name }) => {
          return {
            ...node,
            name: node_name,
            online: !!node_name,
            loading: false
          };
        })
      );
    });

    return forkJoin(status);
  }
}
export {NodesStore}