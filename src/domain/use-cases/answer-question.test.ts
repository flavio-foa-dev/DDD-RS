import { AnswerQuestionUseCase } from './answer-question';
import { AnswerRepository } from '../repositories/answer-repository';
import { Answer } from '../entities/answer';

const fakeAnswerRepository: AnswerRepository = {
  create: async function (answer: Answer): Promise<void> {
    console.log(answer);
    return;
  }
};

test('should create an answer', async ()=> {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '2',
    content: 'New answer'
  });

  expect(answer.content).toEqual('New answer');
});