import { Group } from '@models/dbm/Group'
import { User } from '@models/dbm/User'

import { IGroupService } from './interfaces'
import { IGroupDTM } from '@models/dtm/Group'

import DBConnector from './connector'

import MessageGenerator from '@services/messageGenerator'

class GroupService implements IGroupService {
    GroupRepository = () => {
        return DBConnector.connector?.getRepository(Group)
    }

    UserRepository = () => {
        return DBConnector.connector?.getRepository(User)
    }

    getGroupList = async () => {
        try {
            const response = await this.GroupRepository().find({
                relations: ['teacher', 'students'],
            })
            return response
        } catch (e) {
            return e
        }
    }

    getGroupByID = async (id: string) => {
        try {
            const response = await this.GroupRepository().findOne(id)
            if (!response)
                return MessageGenerator.createMessage(
                    404,
                    'error',
                    'Group with this ID not found'
                )
            return response
        } catch (e) {
            return e
        }
    }

    createGroup = async (data: IGroupDTM, students: User[], teacher: User) => {
        try {
            if (teacher.id) {
                const response = await this.GroupRepository().save({
                    ...data,
                    students,
                    teacher,
                })
                return response
            }
            const response = await this.GroupRepository().save({
                ...data,
                students,
            })
            return response
        } catch (e) {
            return e
        }
    }

    updateGroup = async (
        id: string,
        group: IGroupDTM,
        students: User[],
        teacher: User
    ) => {
        try {
            let groupToChange = await this.GroupRepository().findOne(id, {
                relations: ['teacher', 'students'],
            })
            if (groupToChange) {
                groupToChange.name = group.name
                groupToChange.students = groupToChange.students.concat(students)
                if (teacher.id) {
                    const response = await this.GroupRepository().save({
                        ...groupToChange,
                        teacher,
                    })
                    return response
                }
                const response = await this.GroupRepository().save(
                    groupToChange
                )
                return response
            }
            return MessageGenerator.createMessage(
                404,
                'error',
                'Group with this ID not found'
            )
        } catch (e) {
            return e
        }
    }

    addUsers = async (group: Group, students: User[], teacher: User) => {
        try {
            group.students = group.students.concat(students)
            if (teacher.id) {
                teacher.groupsAsTeacher.push(group)
                this.UserRepository().save(teacher)
            }
            return await this.GroupRepository().save(group)
        } catch (e) {
            return e
        }
    }

    deleteGroup = async (id: string) => {
        try {
            const response = await this.GroupRepository().delete(id)
            if (!response.affected) {
                return MessageGenerator.createMessage(
                    404,
                    'error',
                    'User with this ID not found'
                )
            }
            return !!response.affected
        } catch (e) {
            return e
        }
    }
}

export default new GroupService()
