module.exports = function (sequelize, Sequelize) {
    const Search = sequelize.define("search", {
        drugName: {
            type: Sequelize.STRING,
            required: true
        }
    });
    Search.associate = function (models) {
        Search.belongsTo(models.userProfile, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Search;
};


// -- CREATE TABLE `search_history` ( 
//     --     drugID int NOT NULL AUTO_INCREMENT, 
//     --     drugName varchar(320) NOT NULL, 
//     --     PRIMARY KEY (drugID),
//     --     FOREIGN KEY (userProfile) 
//     --         REFERENCES userProfile(id)
//     --             ON DELETE CASCADE

//     -- );