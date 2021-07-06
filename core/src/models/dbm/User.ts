import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({default: () => "CURRENT_TIMESTAMP"})
  editedAt: Date;

  @Column()
  name: string;

  @Column({default: ""})
  login: string;

  @Column({default: ""})
  password: string;

  @Column({default: ""})
  role: string;
}
