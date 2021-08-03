import { Request, Response } from 'express'

import GroupsRepository from '@repository/database/groups'
import UsersRepository from '@repository/database/users'

import { IGroupController } from './interfaces'

import MessageGenerator from '@services/messageGenerator'
import { User } from '@models/dbm/User'

class GroupController implements IGroupController {
    getGroupList = async (req: Request, res: Response) => {
        const result = await GroupsRepository.getGroupList()

        res.json(result)
    }

    getGroupByID = async (req: Request, res: Response) => {
        if (!req.params.id) {
            res.json(
                MessageGenerator.createMessage(
                    404,
                    'error',
                    'Group with this ID not found'
                )
            )
            return
        }
        const result = await GroupsRepository.getGroupByID(
            req.params.id as string
        )

        res.json(result)
    }

    createGroup = async (req: Request, res: Response) => {
        if (!req.body.name) {
            res.json(
                MessageGenerator.createMessage(
                    500,
                    'error',
                    'Group must have a name'
                )
            )
            return
        }

        let students: User[] = []
        let teacher: User = {} as User

        if (req.body.studentsIds) {
            students = await UsersRepository.getUserListByIds(
                req.body.studentsIds
            )
        }

        if (req.body.teacherId) {
            const response = await UsersRepository.getUserByID(req.body.teacherId)
            if (response.type !== 'error') {
                teacher = response
            }
        }

        const result = await GroupsRepository.createGroup(
            req.body,
            students,
            teacher
        )

        res.json(result)
    }

    updateGroup = async (req: Request, res: Response) => {
        if (!req.body.id) {
            res.json(
                MessageGenerator.createMessage(
                    404,
                    'error',
                    'Group with this ID not found'
                )
            )
            return
        }

        let students: User[] = []
        let teacher: User = {} as User

        if (req.body.studentsIds) {
            students = await UsersRepository.getUserListByIds(
                req.body.studentsIds
            )
        }

        if (req.body.teacherId) {
            const resp = await UsersRepository.getUserByID(req.body.teacherId)
            if (resp.type !== 'error') {
                teacher = resp
            }
        }

        const updated = await GroupsRepository.updateGroup(
            req.body.id,
            req.body,
            students,
            teacher
        )
        res.json(updated)
        return
    }

    deleteGroup = async (req: Request, res: Response) => {
        if (!req.query.id) {
            res.json(
                MessageGenerator.createMessage(
                    404,
                    'error',
                    'Group with this ID not found'
                )
            )
            return
        }
        const wasDeleted = await GroupsRepository.deleteGroup(
            req.query.id as string
        )
        if (wasDeleted) {
            const result = req.query.id

            res.json(result)
            return
        }
        res.json(wasDeleted)
        return
    }
}

export default new GroupController()
