import {TestBed} from '@angular/core/testing';

import {MessageService} from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add a message', () => {
    it('should save the message', () => {
        const message = 'hello world';
        service.add(message);
        expect(service.messages).toContain(message);
      }
    );
  });

  describe('clear messages', () => {
    it('should empty the list of messages', () => {
      service.clear();
      expect(service.messages.length).toBe(0);
    });
  });
});


