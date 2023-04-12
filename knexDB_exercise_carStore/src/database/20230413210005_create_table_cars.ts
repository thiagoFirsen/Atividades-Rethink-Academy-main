import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("cars", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.integer("brand_id").notNullable;
    table.foreign("brand_id").references("brands.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("cars");
}

