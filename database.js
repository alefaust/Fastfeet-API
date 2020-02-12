module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "fastfeet",
  define: {
    // importante configurações abaixo
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
