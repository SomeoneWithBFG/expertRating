import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
} from 'typeorm'

import { Calculation } from './Calculation'
import { Group } from './Group'

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    editedAt: Date

    @Column()
    name: string

    @Column({ default: '', select: false })
    login: string

    @Column({ default: '', select: false })
    password: string

    @Column({ default: 0 })
    role: number

    @OneToMany(() => Calculation, (calculation) => calculation.user)
    calculations: Calculation[]

    @ManyToOne(() => Group, (group) => group.id)
    group: Group

    @OneToMany(() => Group, (group) => group.teacher)
    groupsAsTeacher: Group[]
}
