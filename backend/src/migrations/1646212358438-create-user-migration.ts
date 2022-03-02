import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserMigration1646212358438 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO user (userName, companyName, coldRoomName)
       VALUES ('Anyungu', 'Inspira Farms IoT Solutions', 'Shinyalu Cold Room')`
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM user where userName='Anyungu'`);
  }
}
