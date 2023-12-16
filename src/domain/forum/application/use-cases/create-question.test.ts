import { QuestionRepository } from '../repositories/questions-repository';
import { Question } from '../../enterprise/entities/question';
import { CreateQuestionUseCase } from './create-question';

const fakeQuestionRepository: QuestionRepository = {
  create: async (question: Question) => {
    console.log(question);
  }
};


test('should create an question', async ()=> {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository);

  const {question} = await createQuestion.execute({
    authorId: '1',
    title: 'New Question',
    content: 'New Question content',
  });

  expect(question.id).toBeTruthy();
});