import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optionalDate";

interface QuestionProps {
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  title: string;
  content: string;
  slug: Slug  // value object tem regras de negocio associada a elas
  createdAt: Date;
  updatedAt: Date;
}
export class Question extends Entity<QuestionProps> {
  static create(props: Optional<QuestionProps, "createdAt">, id: UniqueEntityID) {
    const question = new Question({
      ...props,
      createdAt: new Date()
    }, id)
    return question
  }
}