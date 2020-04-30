import {MessageService} from './message.service';

class MockLoggerService{
  log():void{}
}

describe('MessageService', () => {
  let service: MessageService;
  let logger: MockLoggerService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(MessageService);
    logger = new MockLoggerService();
    service = new MessageService(logger);
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
    it('should call loggerService', () => {
      spyOn(logger, 'log');
      const message = 'hello world';
      service.add(message);
      expect(logger.log).toHaveBeenCalled();
    });
  });

  describe('clear messages', () => {
    it('should empty the list of messages', () => {
      service.clear();
      expect(service.messages.length).toBe(0);
    });
    it('should call loggerService', () => {
      spyOn(logger, 'log');
      const message = 'hello world';
      service.add(message);
      expect(logger.log).toHaveBeenCalled();
    });
  });
});


