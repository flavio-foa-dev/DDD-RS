import { AnswerRepository } from '@/domain/forum/application/repositories/answer-repository';
import { Answer } from '@/domain/forum/enterprise/entities/answer';

export class InMemoryAnswerRepository implements AnswerRepository {
  public items: Answer[] = [];

  async create(answer: Answer): Promise<void> {
    this.items.push(answer);
    console.log('create', this.items);
  }
}