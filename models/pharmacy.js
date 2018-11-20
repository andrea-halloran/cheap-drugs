module.exports = function (sequelize, Sequelize) {
    const Pharmacy = sequelize.define("Pharmacy", {
        pharmacy1: {
            type: Sequelize.STRING,
            required: true
        },
        pharmacy2: {
            type: Sequelize.STRING,
            required: false
        },
        pharmacy3: {
            type: Sequelize.STRING,
            required: false,
        }
    });
    Pharmacy.associate = function (models) {
        Pharmacy.belongsTo(models.userProfile, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Pharmacy;
};



// CREATE TABLE `pharmacy_prefrences` (
//     --     pharmacyID int NOT NULL AUTO_INCREMENT, 
//     --     pharmacy1 varchar(250) NOT NULL, 
//     --     pharmacy2 varchar(250) NULL, 
//     --     pharmacy3 varchar(250) NULL,
//     --     PRIMARY KEY (pharmacyID),
//     --     FOREIGN KEY (userProfile) 
//     --         REFERENCES userProfile(id) 
//     --             ON DELETE CASCADE 

//     -- );