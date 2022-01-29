import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1638380335598 implements MigrationInterface {
    name = 'CreateTables1638380335598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course_tags_tags" ("courseId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_a7c29a4af9cceefc055491575f2" PRIMARY KEY ("courseId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_55183c20e3bed87746c3b40b48" ON "course_tags_tags" ("courseId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9ef0026d61aac0eb465216e112" ON "course_tags_tags" ("tagsId") `);
        await queryRunner.query(`ALTER TABLE "course_tags_tags" ADD CONSTRAINT "FK_55183c20e3bed87746c3b40b484" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "course_tags_tags" ADD CONSTRAINT "FK_9ef0026d61aac0eb465216e112b" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course_tags_tags" DROP CONSTRAINT "FK_9ef0026d61aac0eb465216e112b"`);
        await queryRunner.query(`ALTER TABLE "course_tags_tags" DROP CONSTRAINT "FK_55183c20e3bed87746c3b40b484"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9ef0026d61aac0eb465216e112"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_55183c20e3bed87746c3b40b48"`);
        await queryRunner.query(`DROP TABLE "course_tags_tags"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
