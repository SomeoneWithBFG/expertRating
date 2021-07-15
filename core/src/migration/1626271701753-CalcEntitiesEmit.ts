import { MigrationInterface, QueryRunner } from 'typeorm'

export class CalcEntitiesEmit1626271701753 implements MigrationInterface {
    name = 'CalcEntitiesEmit1626271701753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "pair-comparsion-result" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "values" character varying NOT NULL, "sumOfValues" integer NOT NULL, "weights" character varying NOT NULL, "order" character varying NOT NULL, CONSTRAINT "PK_298b6ed5a52c5913f02aea4e6dc" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "sequentially-comparison-result" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "causedCorrections" character varying NOT NULL, "correctedEvaluations" character varying NOT NULL, "sumOfWeights" integer NOT NULL, "weights" character varying NOT NULL, "order" character varying NOT NULL, CONSTRAINT "PK_f821cf1b1044b9ceff01bc365a9" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "weighing-result" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "sumOfMarks" integer NOT NULL, "relativeExpertsMarks" character varying NOT NULL, "weights" character varying NOT NULL, "order" character varying NOT NULL, CONSTRAINT "PK_eb066e7b6d992c469d80fca090c" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "preference-result" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "modMatrix" character varying NOT NULL, "sumMarks" character varying NOT NULL, "sumOfMarks" integer NOT NULL, "weights" character varying NOT NULL, "order" character varying NOT NULL, CONSTRAINT "PK_ecb94cd6d76131e7b3e2d5bf92d" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "kondorse-result" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "modMatrix" character varying NOT NULL, "best" integer NOT NULL, CONSTRAINT "PK_ec02070ca4be5d0d1bb3d446f6b" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "kemeni-snella-result" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "binaryMatrixArray" character varying NOT NULL, "looseMatrix" character varying NOT NULL, "order" character varying NOT NULL, CONSTRAINT "PK_3253b7e355d6b6baaecf248f750" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "calculations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "editedAt" TIMESTAMP NOT NULL DEFAULT now(), "method" character varying NOT NULL, "inputMatrix" character varying NOT NULL, "x" integer NOT NULL, "y" integer NOT NULL, "userId" uuid, "kemeniSnellaResultId" uuid, "kondorseResultId" uuid, "pairComparsionResultId" uuid, "preferenceResultId" uuid, "sequentiallyComparisonResultId" uuid, "weighingResultId" uuid, CONSTRAINT "REL_44a275edfb882f51dc9a219d04" UNIQUE ("kemeniSnellaResultId"), CONSTRAINT "REL_171f67d1957f0ce2f2a43b32ee" UNIQUE ("kondorseResultId"), CONSTRAINT "REL_7d2e1dddd375c5a9062bcb477e" UNIQUE ("pairComparsionResultId"), CONSTRAINT "REL_583cdbf6b058af8470074b1bad" UNIQUE ("preferenceResultId"), CONSTRAINT "REL_41b85aa3f120636d457fd645fc" UNIQUE ("sequentiallyComparisonResultId"), CONSTRAINT "REL_f1f55fde13fdc15a206a22acd1" UNIQUE ("weighingResultId"), CONSTRAINT "PK_a57a12855a44935db91c2533b71" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" ADD CONSTRAINT "FK_f9feb493b493b6694c16c048143" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" ADD CONSTRAINT "FK_44a275edfb882f51dc9a219d04b" FOREIGN KEY ("kemeniSnellaResultId") REFERENCES "kemeni-snella-result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" ADD CONSTRAINT "FK_171f67d1957f0ce2f2a43b32ee8" FOREIGN KEY ("kondorseResultId") REFERENCES "kondorse-result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" ADD CONSTRAINT "FK_7d2e1dddd375c5a9062bcb477ed" FOREIGN KEY ("pairComparsionResultId") REFERENCES "pair-comparsion-result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" ADD CONSTRAINT "FK_583cdbf6b058af8470074b1bad4" FOREIGN KEY ("preferenceResultId") REFERENCES "preference-result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" ADD CONSTRAINT "FK_41b85aa3f120636d457fd645fc4" FOREIGN KEY ("sequentiallyComparisonResultId") REFERENCES "sequentially-comparison-result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" ADD CONSTRAINT "FK_f1f55fde13fdc15a206a22acd1a" FOREIGN KEY ("weighingResultId") REFERENCES "weighing-result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "calculations" DROP CONSTRAINT "FK_f1f55fde13fdc15a206a22acd1a"`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" DROP CONSTRAINT "FK_41b85aa3f120636d457fd645fc4"`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" DROP CONSTRAINT "FK_583cdbf6b058af8470074b1bad4"`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" DROP CONSTRAINT "FK_7d2e1dddd375c5a9062bcb477ed"`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" DROP CONSTRAINT "FK_171f67d1957f0ce2f2a43b32ee8"`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" DROP CONSTRAINT "FK_44a275edfb882f51dc9a219d04b"`
        )
        await queryRunner.query(
            `ALTER TABLE "calculations" DROP CONSTRAINT "FK_f9feb493b493b6694c16c048143"`
        )
        await queryRunner.query(`DROP TABLE "calculations"`)
        await queryRunner.query(`DROP TABLE "kemeni-snella-result"`)
        await queryRunner.query(`DROP TABLE "kondorse-result"`)
        await queryRunner.query(`DROP TABLE "preference-result"`)
        await queryRunner.query(`DROP TABLE "weighing-result"`)
        await queryRunner.query(`DROP TABLE "sequentially-comparison-result"`)
        await queryRunner.query(`DROP TABLE "pair-comparsion-result"`)
    }
}
