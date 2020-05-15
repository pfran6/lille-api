import { Test, TestingModule } from '@nestjs/testing';
import { ParcsController } from './parcs.controller';

describe('Parcs Controller', () => {
  let controller: ParcsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcsController],
    }).compile();

    controller = module.get<ParcsController>(ParcsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
