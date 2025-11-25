const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Komik = Sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        penulis: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deskripsi: {
        type: DataTypes.TEXT, 
        allowNull: false
        },
        imageType: DataTypes.STRING,
        imageName: DataTypes.STRING,
        imageData: DataTypes.BLOB('long'),
    }, {
        tableName: 'komik'
    });
    return Komik;
}