import { randomUUID } from "node:crypto";

export class Question {
  public id: string;
  public title: string;
  public slug: string;
  public content: string
  public authorId: string

  constructor(title: string, content: string, slug: string, authorId: string, id?: string, au) {
    this.title = title
    this.content = content
    this.slug = slug // value object tem regras de negocio associada a elas
    this.authorId = authorId
    this.id = id ?? randomUUID()
  }
}