exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("ideas", {
        id: {
            type: "varchar(255)",
            primaryKey: true,
        },
        userId: {
            type: "integer",
            references: "users(id)",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            notNull: true,
        },
        title: {
            type: "varchar(255)",
            unique: true,
            notNull: true,
        },
        description: {
            type: "text",
            unique: false,
            notNull: false,
        },
        publishDate: {
            type: "timestamp",
            notNull: false,
        },
        createdAt: {
            type: "timestamp",
            default: pgm.func("current_timestamp"),
        },
        updatedAt: {
            type: "timestamp",
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("ideas");
};
