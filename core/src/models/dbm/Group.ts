import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from 'typeorm'

import { User } from './User'

@Entity({ name: 'groups' })
export class Group {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    editedAt: Date

    @Column()
    name: string

    @ManyToOne(() => User, (user) => user.id)
    teacher: Group

    @OneToMany(() => User, (user) => user.group)
    students: User[]
}
