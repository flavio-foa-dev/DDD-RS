import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

interface StudentProps {
  name: string;
}
export class Student  extends Entity<StudentProps> {

  static create(props: StudentProps, id?: UniqueEntityID){
    const estudent = new Student(props, id);
    return estudent;
  }
}