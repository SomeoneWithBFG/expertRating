import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  editedAt: Date;

  @Column()
  name: string;

  @Column({ default: "", select: false })
  login: string;

  @Column({ default: "", select: false })
  password: string;

  @Column({ default: 0 })
  role: number;
}
