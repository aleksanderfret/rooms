import { Column, Entity } from 'typeorm';

import { BaseEntity } from './db';

@Entity('room')
export class Room extends BaseEntity {
  @Column({ length: 256, nullable: false, type: 'varchar' })
  name: string;

  @Column({ length: 1000, nullable: true, type: 'varchar' })
  description: string;

  @Column({ nullable: true, type: 'timestamptz' })
  year: Date;
}
