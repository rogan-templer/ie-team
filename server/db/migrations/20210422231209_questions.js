
exports.up = function (knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id')
        table.string('question')
        table.string('a')
        table.string('b')
        table.string('c')
        table.string('d')
        table.string('answer')
    })
}


exports.down = function (knex) {
    return knex.schema.dropTable('questions')

};
