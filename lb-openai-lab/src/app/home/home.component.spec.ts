import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AiLabService } from '../data/ai-lab.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let aiLabService: jasmine.SpyObj<AiLabService>;

  beforeEach(async () => {
    aiLabService = jasmine.createSpyObj('AiLabService', ['ask']);
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: AiLabService, useValue: aiLabService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ask method on button click', () => {
    const question = 'What is AI?';
    component.question = question;
    aiLabService.ask.and.returnValue(of({ message: 'backend not connected yet' }));

    component.onAsk();

    expect(aiLabService.ask).toHaveBeenCalledWith(question);
    component.result.subscribe((res) => {
      expect(res).toEqual({ message: 'backend not connected yet' });
    });
  });
});