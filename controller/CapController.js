const Cap = require("../models/Cap");

module.exports = {
  async store(req, res) {
    const { name, registerNumber } = req.body;

    const cap = await Cap.create({ name, registerNumber });

    return res.json(cap);
  },
  async index(req, res) {
    const cap = await Cap.findAll();

    return res.json(cap);
  },

  async delete(req, res) {
    await Cap.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.send("Capitão excluido com sucesso!")
  },
};