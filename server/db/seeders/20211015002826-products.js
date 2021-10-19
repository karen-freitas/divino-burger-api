/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Hambúrguer simples',
        price: 11,
        flavor: 'frango',
        complement: 'queijo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer simples',
        price: 11,
        flavor: 'vegetariano',
        complement: 'queijo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer simples',
        price: 11,
        flavor: 'carne',
        complement: 'ovo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer simples',
        price: 11,
        flavor: 'frango',
        complement: 'ovo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer simples',
        price: 11,
        flavor: 'vegetariano',
        complement: 'ovo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer duplo',
        price: 15,
        flavor: 'carne',
        complement: null,
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer duplo',
        price: 15,
        flavor: 'frango',
        complement: null,
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer duplo',
        price: 15,
        flavor: 'vegetariano',
        complement: null,
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer duplo',
        price: 16,
        flavor: 'carne',
        complement: 'ovo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer duplo',
        price: 16,
        flavor: 'frango',
        complement: 'ovo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer duplo',
        price: 16,
        flavor: 'vegetariano',
        complement: 'ovo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer duplo',
        price: 16,
        flavor: 'carne',
        complement: 'queijo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer duplo',
        price: 16,
        flavor: 'frango',
        complement: 'queijo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Hambúrguer duplo',
        price: 16,
        flavor: 'vegetariano',
        complement: 'queijo',
        image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
        type: 'all-day',
        subtype: 'hamburguer',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Batata frita',
        price: 5,
        flavor: null,
        complement: null,
        image: 'https://s2.glbimg.com/6TYFXwek9ZpNXFeOzas09KizMKk=/0x0:1280x853/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/T/K/Hh8h2GR96v392DAkAqyA/912c9713-321e-4dfd-bca9-888c05c5ce50.jpeg',
        type: 'all-day',
        subtype: 'side',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Anéis de cebola',
        price: 5,
        flavor: null,
        complement: null,
        image: 'https://www.delonghi.com/Global/recipes/multifry/103.jpg',
        type: 'all-day',
        subtype: 'side',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Água 500mL',
        price: 5,
        flavor: null,
        complement: null,
        image: 'https://i2.wp.com/maprint.com.br/wp-content/uploads/2017/08/garrafa-de-agua-mineral-500ml.png?fit=400%2C400&ssl=1',
        type: 'all-day',
        subtype: 'drinks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água 750mL',
        price: 7,
        flavor: null,
        complement: null,
        image: 'https://i2.wp.com/maprint.com.br/wp-content/uploads/2017/08/garrafa-de-agua-mineral-500ml.png?fit=400%2C400&ssl=1',
        type: 'all-day',
        subtype: 'drinks',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Refrigerante 500mL',
        price: 5,
        flavor: null,
        complement: null,
        image: 'https://www.abcdacomunicacao.com.br/wp-content/uploads/refri.png',
        type: 'all-day',
        subtype: 'drinks',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Refrigerante 750mL',
        price: 7,
        flavor: null,
        complement: null,
        image: 'https://www.abcdacomunicacao.com.br/wp-content/uploads/refri.png',
        type: 'all-day',
        subtype: 'drinks',
        createdAt: new Date(),
        updatedAt: new Date()

      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, bulkDeleteOptions);
  }
};
