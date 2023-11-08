const { DataTypes } = require('sequelize');

import {Sequelize} from "sequelize";


export const sequelize = new Sequelize('eva_db', 'root', 'wsk2586562158./', {
    host: 'localhost',
    dialect: "mysql"
});
try {
    sequelize.authenticate();
    console.log("数据库链接成功!")
}catch (e){
    console.log(e)
}
export const Teacher = sequelize.define('Teacher', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    jobnumber: {
        type: DataTypes.STRING,
    },
    sex: {
        type: DataTypes.STRING,
    },
    // 其他字段...
}, {
    timestamps: false,
    tableName: 'tbl_teacher',
});
export const CourseScheduling = sequelize.define('CourseScheduling', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    termid: {
        type: DataTypes.INTEGER,
    },
    coursecode: {
        type: DataTypes.STRING,
    },
    coursename: {
        type: DataTypes.STRING,
    },
    jobnumber: {
        type: DataTypes.STRING,
        references: {
            model: Teacher,
            key: 'jobnumber',
        },
    },
    teachername: {
        type: DataTypes.STRING,
    },
    classno: {
        type: DataTypes.STRING,
    },
    // 其他字段...
}, {
    timestamps: false,
    tableName: 'tbl_coursescheduling',
});


export const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    studentid: {
        type: DataTypes.STRING, // 可能需要适当的类型
    },
    studentname: {
        type: DataTypes.STRING, // 可能需要适当的类型
    },
    sex: {
        type: DataTypes.STRING, // 可能需要适当的类型
    },
    // 其他字段...
}, {
    timestamps: false,
    tableName: 'tbl_student',
});



// models/Teacher.js




// models/TeacherTest.js

export const TeacherTest = sequelize.define('TeacherTest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    jobnumber: {
        type: DataTypes.STRING,
        references: {
            model: Teacher,
            key: 'jobnumber',
        },
    },
    coursecode: {
        type: DataTypes.STRING,
        references: {
            model: CourseScheduling,
            key: 'jobnumber',
        },
    },
    userid: {
        type: DataTypes.INTEGER,
    },
    score: {
        type: DataTypes.DECIMAL(7, 2),
    },
    termid: {
        type: DataTypes.INTEGER,
    },
    week: {
        type: DataTypes.STRING,
    },
    weekday: {
        type: DataTypes.STRING,
    },
    section:  {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
    tableName: 'tbl_teachertest',
});

// 设置外键关联
Teacher.hasMany(CourseScheduling, { foreignKey: 'jobnumber', sourceKey: 'jobnumber' });
CourseScheduling.belongsTo(Teacher, { foreignKey: 'jobnumber', targetKey: 'jobnumber' });

Teacher.hasMany(TeacherTest, { foreignKey: 'jobnumber', sourceKey: 'jobnumber' });
TeacherTest.belongsTo(Teacher, { foreignKey: 'jobnumber', targetKey: 'jobnumber' });

TeacherTest.belongsTo(CourseScheduling, { foreignKey: 'coursecode', targetKey: 'coursecode' });
CourseScheduling.hasMany(TeacherTest, { foreignKey: 'coursecode', sourceKey: 'coursecode' });






export const searchTeacherByid=async (teacherid:string|number)=>{
   try {
    return  await  Teacher.findOne({
           where: {
               jobnumber: teacherid,
           }
       })
   }catch (e){
       return Promise.reject("不存在")
   }
}





















