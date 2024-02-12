import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMoviesTable1707750532755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'movies',
                columns: [
                    {
                        name:'id',
                        type:'int',
                        isPrimary: true,
                        generationStrategy:'increment'

                    },
                    {
                        name:'name',
                        type: 'varchar',
                        length:'100',
                        isNullable:false, 
                    },
                    {
                        name:'director',
                        type: 'varchar',
                        length: '100',
                        isNullable: true
                    },
                    {
                        name: 'studio',
                        type:'varchar',
                        length:'100',
                        isNullable:true
                    },
                    {
                        name:'generous',
                        type:'varchar',
                        length:'100',
                        isNullable: false
                    },                
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Movies')
    }

}
