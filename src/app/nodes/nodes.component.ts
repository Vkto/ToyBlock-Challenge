import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INode } from 'src/models/INode';
import { Node } from '../../models/node.model';
import { NodesBlocks } from '../services/nodeBlocks.service';
import { NodesStore } from '../services/nodesStore.service';


@Component({
  selector: 'app-node-list',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  expandedNodeURL: string = null;
  public store$: Observable<INode[]>

  constructor(public nodeService: NodesStore,
    private blockService:NodesBlocks ) {}

  ngOnInit() {
this.loadNodesAndBlocks();
  }

private loadNodesAndBlocks(){

  this.loadNodes(); 
  this.loadBlocks(); 

}

loadNodes() {
this.nodeService.getNodes(); 
this.nodeService.state$.subscribe ((nodes)=> {
  this.store$ = this.nodeService.state$; 
  this.blockService .getBlocksFromNodes(nodes);
})
}

  loadBlocks() {
    this.blockService.state$.subscribe(() =>{
      this.store$ = this.blockService.state$ 
    });
 }


  ToogleExpand(node: Node): void {
    this.expandedNodeURL = node.url === this.expandedNodeURL ? null : node.url;
  }

  isExpanded(node: Node): boolean {
    return this.expandedNodeURL === node.url;
  }

  setMessage(message: string): void {
    this.expandedNodeURL = message;
  }
}
