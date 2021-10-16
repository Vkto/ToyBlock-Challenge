import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { async, ComponentFixture } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { NodeComponent } from "./node.component";
import { StatusComponent } from "../status/status.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BlockComponent } from "../block/block.component";

describe("NodeComponent ", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    //testando o modulo 
    TestBed.configureTestingModule({
      declarations: [NodeComponent, StatusComponent, BlockComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

//test component creation
    const fixture = TestBed.createComponent(NodeComponent);
    const componentInstance = fixture.debugElement.componentInstance;
//component class mock
    componentInstance.node = {
      url: "string",
      online: false,
      name: "string",
      loading: true,
      status: "string",
      blocks: [],
    };

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture.detectChanges();
  }));

  it("should create", () => {
   
//test service return
    const service: NodeComponent = TestBed.get(NodeComponent);
    expect(service).toBeTruthy();
  });
});
