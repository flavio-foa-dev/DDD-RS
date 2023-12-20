import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Question } from '@/domain/forum/enterprise/entities/question';
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug';

export function makeQuestion() {
  const newQuestion = Question.create({
    title: 'Exemple question',
    slug: Slug.create('flavio-foa'),
    authorId: new UniqueEntityID(),
    content:'Flavio content'
  });

  return newQuestion;
}