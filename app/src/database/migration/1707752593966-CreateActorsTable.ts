import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateActorsTable1707752593966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.createTable(
            new Table({
                name:'actors',
                columns:[
                    {
                        name:'id',
                        type:'int',
                        isPrimary:true,
                        generationStrategy:'increment'
                    },
                    {
                        name:'moviesId',
                        type: 'int',  
                        // Criar ligação com o filmes relacionado.                      
                    },
                    {
                        name:'name',
                        type:'varchar',
                        length:'100',
                        isNullable:false
                    },
                    { 
                        name:'generous',
                        type: 'varchar',
                        length:'100',
                        isNullable: true
                    },
                    {
                        name:'age',
                        type: 'date',
                    },
                    {
                        name: 'cratedAt',
                        type: 'date'
                    },
                    {
                        name: 'updateAt',
                        type: 'date'
                    } 
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('actors')
    }

}
