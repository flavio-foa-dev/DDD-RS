import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repositories';
import { CreateQuestionUseCase } from './create-question';
import { GetQuestionBySlugUseCase } from './get-question-by-slug';
import { Question } from '../../enterprise/entities/question';
import { Slug } from '../../enterprise/entities/value-objects/slug';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to get question by slug', async ()=> {
    const newQuestion = Question.create({
      title: 'Exemple question',
      slug: Slug.create('flavio-foa'),
      authorId: new UniqueEntityID(),
      content:'Flavio content'
    });

    inMemoryQuestionsRepository.create(newQuestion);

    const {question} = await sut.execute({
      slug: 'flavio-foa',
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id);

  });

});

