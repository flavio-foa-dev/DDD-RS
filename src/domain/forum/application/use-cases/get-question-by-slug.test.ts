import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repositories';

import { GetQuestionBySlugUseCase } from './get-question-by-slug';

import { makeQuestion } from 'test/factories/make-question';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to get question by slug', async ()=> {
    const newQuestion = makeQuestion();

    inMemoryQuestionsRepository.create(newQuestion);

    const {question} = await sut.execute({
      slug: 'flavio-foa',
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id);

  });

});

