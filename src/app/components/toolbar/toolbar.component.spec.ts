import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { By } from '@angular/platform-browser';

fdescribe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    const expectedTtitle = '100 Angular Challenges';
    component.title = expectedTtitle;
    expect(component.title).toBe(expectedTtitle) 
  });

  // it('should contain a navigation with 5 links', () => {
  //   const links = fixture.debugElement.query(By.css('li'));
  //   console.log(links)
  //   No access to <ng-content> ?
  // })
});
