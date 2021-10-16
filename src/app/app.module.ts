import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodesComponent } from './nodes/nodes.component';
import { StatusComponent } from './status/status.component';
import { BlockComponent } from './block/block.component';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { NodesBlocks } from './services/nodeBlocks.service';
import { NodesStore } from './services/nodesStore.service';

@NgModule({
  declarations: [AppComponent, NodeComponent, NodesComponent, StatusComponent, BlockComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  bootstrap: [AppComponent],
  providers: [ApiService, NodesBlocks, NodesStore],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
