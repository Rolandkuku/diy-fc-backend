import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class Init1734798359361 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'players',
        columns: [
          new TableColumn({
            name: 'Id',
            type: 'varchar',
            isUnique: true,
            isPrimary: true,
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('players');
  }
}
