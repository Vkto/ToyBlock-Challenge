import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from './store';
import { Node } from 'src/models/node.model';
import { State } from './state';
import { INode } from 'src/models/INode';
import { IBlock } from 'src/models/IBlock';

@Injectable({
  providedIn: 'root'
})
 class NodesBlocks extends Store<Node[]> {
  constructor(private api: ApiService) {
    super(new State().list);
  }

  public getBlocksFromNodes(nodeState: INode[]) {

    const filteredNode = nodeState.filter((itemNode)=> itemNode.online)

    this._getBlocksFromNodes(filteredNode).subscribe((data)=> {
        const newNodes = nodeState.map((itemNode) => {

          const newNodeBlocks = data.find( 
            (itemData)=> itemNode.name === itemData.name);
       
            if(newNodeBlocks && newNodeBlocks.blocks){
                return {
                    ...itemNode,
                blocks: newNodeBlocks.blocks,
                loading:false,
                };
            }
            return {...itemNode, loading:false}
    });
         this.setState(newNodes);
     });
  }

  private _getBlocksFromNodes(states: INode[]) {
    const block = states.map((node) => 
       this.api.get(`${node.url}/api/v1/blocks`).pipe(
        catchError(() =>
          of({
            block: false
          })
        ),

        map<{data: IBlock[]}, INode>((response) => ({
            ...node,
             blocks : response.data,
          })
        )
      )
    );

    return forkJoin(block);
  }
}
export {NodesBlocks}