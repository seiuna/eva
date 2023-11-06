// tbl_yearterm
export interface Semester{
    id:number;
    yeartermname:string;
    yeartermcode:string;
    year:number;
    iscurrent:string;
    startdate:Date;
    enddate:Date;
    creator:number;
    create_time:Date;
    last_operator:string;
    last_operate_time:Date;
}

// tbl_teachertest
export interface TeacherTest{
    id:number;
    jobnumber:number;
    coursecode:number;
    userid:number;
    score:number;
    termid:number;
    week:string;
    weekday:string;
    section:string;
}
// tbl_teacher
export interface Teacher{
    id:number;
    name:string;
    jobnumber:number;
    sex:string;
    //....
}
// tbl_student
export interface Student{
    id:number;
    studentId:number;
    studentName:string;
    sex:string;
    classesname:string;
    majorname:string;
    schoolsystem:string;
    orgname:string;
    //....
}

// tbl_scheduling
export interface Scheduling{
    id:number;
    termid:number;
    orgname:string;
    weeks:string[];
    weekdays:string[];
    section:string[];
    building:string;

}