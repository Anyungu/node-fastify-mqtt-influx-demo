import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  userName: string;

  @Column({
    nullable: true,
  })
  companyName: string;

  @Column({
    nullable: true,
  })
  coldRoomName: string;
}
