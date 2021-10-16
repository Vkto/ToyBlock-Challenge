import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { NodeComponent } from "../node/node.component";
import { StatusComponent } from "../status/status.component";
import { NodesComponent } from "./nodes.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("NodesComponent", () => {
  let httpTestingController: HttpTestingController;

  let component: NodesComponent;
  let fixture: ComponentFixture<NodesComponent>;

  beforeEach(async(() => {
    
//testing the module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NodesComponent, NodeComponent, StatusComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    //test component creation
    fixture = TestBed.createComponent(NodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test service return
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
