import {MigrationInterface, QueryRunner} from "typeorm";

export class UserInit1625571040801 implements MigrationInterface {
    name = 'UserInit1625571040801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "login" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL DEFAULT '', "role" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
