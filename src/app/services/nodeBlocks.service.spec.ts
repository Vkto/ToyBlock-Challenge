import { inject, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { NodesStore } from './nodesStore.service';
import { NodesBlocks } from './nodeBlocks.service';

describe('NodesBlocks', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: NodesBlocks = TestBed.get(NodesBlocks);
    expect(service).toBeTruthy();
  });
  it ("must return the values of the correct endpoint model", inject(
      [NodesBlocks],
      (nodesBlocks:NodesBlocks) => {
expect(nodesBlocks).toBeTruthy();
      }
  ))
});
