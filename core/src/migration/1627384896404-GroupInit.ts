import { MigrationInterface, QueryRunner } from 'typeorm'

export class GroupInit1627384896404 implements MigrationInterface {
    name = 'GroupInit1627384896404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "teacherId" uuid, CONSTRAINT "PK_659d1483316afb28afd3a90646e" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(`ALTER TABLE "users" ADD "groupId" uuid`)
        await queryRunner.query(
            `ALTER TABLE "groups" ADD CONSTRAINT "FK_e63173ac43b478c2fc0cc20ac39" FOREIGN KEY ("teacherId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await queryRunner.query(
            `ALTER TABLE "users" ADD CONSTRAINT "FK_b1d770f014b76f7cfb58089dafc" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "users" DROP CONSTRAINT "FK_b1d770f014b76f7cfb58089dafc"`
        )
        await queryRunner.query(
            `ALTER TABLE "groups" DROP CONSTRAINT "FK_e63173ac43b478c2fc0cc20ac39"`
        )
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "groupId"`)
        await queryRunner.query(`DROP TABLE "groups"`)
    }
}
