import {
  Entity as TypeOrmEntity,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@TypeOrmEntity()
abstract class Entity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ nullable: false, type: 'timestamptz' })
  createdAt!: Date;

  @CreateDateColumn({ nullable: false, type: 'timestamptz' })
  updatedAt!: Date;
}

export default Entity;
