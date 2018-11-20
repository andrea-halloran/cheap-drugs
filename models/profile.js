module.exports = function (sequelize, Sequelize) {
    const userProfile = sequelize.define("userProfile", {
        firstName: {
            type: Sequelize.STRING,
            required: true,
        },
        lastName: {
            type: Sequelize.STRING,
            required: true
        },
        email: {
            type: Sequelize.STRING,
            required: true,
        },
        userPassword: {
            type: Sequelize.STRING,
            required: true
        },
        zipcode: {
            type: Sequelize.INTEGER,
            required: true
        }

    });
    userProfile.associate = function (models) {
        userProfile.hasMany(models.Search, {
            onDelete: "cascade"
        });

        userProfile.associate = function (models) {
            userProfile.hasMany(models.Pharmacy, {
                onDelete: "cascade"
            });
        }
    };
    return userProfile;
};

// -- CREATE TABLE `userProfile` (
//     --     id int NOT NULL AUTO_INCREMENT, 
//     --     firstName varchar(250) NOT NULL, 
//     --     lastName varchar(250) NOT NULL, 
//     --     email varchar(320) NOT NULL, 
//     --     userPassword varchar (255) NOT NULL,
//     --     zipcode varchar(5) NOT NULL, 
//     --     time_created DATETIME NOT NULL, 
//     --     PRIMARY KEY (id)
//     -- );


// paranoid: true statement

// created_at - column needed?