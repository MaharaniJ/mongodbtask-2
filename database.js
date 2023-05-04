//insert topics

     db.topics.insertMany([
        {
    topicid:1,
    topic:"HTML",
    topic_date:new Date("2020-10-15"),
    task:{
    task_date:new Date("2020-10-16")
    }
    },
    {
    topicid:2,
    topic:"CSS",
    topic_date:new Date("2020-10-25"),
    task:{task_date:new Date("2020-10-26")
    }
    },
    {
    topicid:3,
    topic:"Javasript",
    topic_date:new Date("2020-10-31"),
    task:{
    task_date:new Date("2020-10-31")
    }
    },
    {
    topicid:4,
    topic:"ReactJS",
    topic_date:new Date("2020-11-2"),
    task:{
    task_date:new Date("2022-11-3")
    }
    },
    {
    topicid:5,
    topic:"MongoDB",
    topic_date:new Date("2020-11-27"),
    task:{
    task_date:new Date("2020-11-27")
    }
    }
])
    
    //insert attendance
    db.attendance.insertMany([
        {
    username:"maha@98",
    fullname:"mahaj",
    date:2020-10-15
    },
    {
    username:"prema@20",
    fullname:"premap",
    date:2020-10-15
    },
    {
    username:"kumar@80",
    fullname:"rajkumar",
    date:2020-10-15
    },
    {
    username:"ram@71",
    fullname:"jeyaram",
    date:2020-10-15
    },
    {
    username:"tamil@22",
    fullname:"tamilselvi",
    date:2020-10-15
    },
    {
    username:"kabishnu@22",
    fullname:"kabishnumaran",
    date:2020-10-15
    },
    {
    username:"anusha@97",
    fullname:"anushas",
    date:2020-10-15
    },
    {
    username:"kalai@21",
    fullname:"kalaiselvan",
    date:2020-10-15
    },
    {
    username:"indhu@32",
    fullname:"indhumathi",
    date:2020-10-15
    },
    {
    username:"sri@10",
    fullname:"sriram",
    date:2020-10-15
    }
])
    
    
    //insert tasks
    
    db.tasks.insertMany([
 {
    task_id:1,
    topicid:1,
    name:"HTML Newspaper",
    date:new Date("2020-10-15")
    },
    {
    task_id:2,
    topicid:1,
    name:"HTML Social Media Page",
    date:new Date("2020-10-18")
    },
    {
    task_id:3,
    topicid:1,
    name:"HTML",
    date:new Date("2020-10-20")
    },
    {
    task_id:4,
    topicid:2,
    name:"Javascript",
    date:new Date("2020-10-27")
    },
    {
    task_id:5,
    topicid:3,
    name:"React UI",
    date:new Date("2020-10-29")
    }
])
    
    //insert company-drives
    
    db.company_drives.insertMany([
         {
    company_id:1,
    drive_date:new Date("2020-10-15"),
    company:"Meta"
    },
    {
    company_id:2,
    drive_date:new Date("2020-10-20"),
    company:"Apple"
    },
    {
    company_id:3,
    drive_date:new Date("2020-10-25"),
    company:"Amazon"
    },
    {
    compny_id:4,
    drive_date:new Date("2020-10-30"),
    company:"NetFlix"
    },
    {
    company_id:5,
    drive_date:new Date("2020-11-12"),
    company:"Google"
    }
])
    
    
    //insert codekata
    db.codekata.insertMany([
    {
    q_id:1,
    category:"HTML",
    level:"Easy",
    problems_statement:"Sampale problem statement"
    },
    {
    q_id:2,
    category:"HTML",
    level:"Easy",
    problem_statement:"Sample problem statement"
    },
    {
    q_id:3,
    category:"Javascript",
    level:"Hard",
    problem_statement:"Sample problem statement"
    },
    
    {
    q_id:4,
    category:"Javascript",
    level:"Easy",
    problem_statement:"Sample problem statement"
    },
    
    {
    q_id:5,
    category:"ReactJS",
    level:"Hard",
    problem_statement:"Sample problem statement"
    },
    
    {
    q_id:6,
    category:"ReactJS",
    level:"Easy",
    problem_statement:"Sample problem statement"
    },
    
    {
    q_id:7,
    category:"NodeJS",
    level:"Hard",
    problem_statement:"Sample problem statement"
    },
    
    {
    q_id:8,
    category:"NodeJS",
    level:"Easy",
    problem_statement:"Sample problem statement"
    },
    
    {
    q_id:9,
    category:"Express",
    level:"Hard",
    problem_statement:"Sample problem statement"
    },
    {
    q_id:10,
    category:"Express",
    level:"Easy",
    problem_statement:"Sample problem statement"
    },
    {
    q_id:11,
    category:"MongoDB",
    level:"Hard",
    problem_statement:"Sample problem statement"
    },
    {
    q_id:12,
    category:"MongoDB",
    level:"Easy",
    problem_statement:"Sample problem statement"
    }
])
    
    
    //insert mentors 
    db.mentors.insertMany([
 {
    id:1,
    mentor_name:"Vidhya",
    email:"vidhya@gmail.com",
    mentee_count:15
    },
    {
    id:2,
    mentor_name:"Sangeetha",
    email:"sangeetha@gmail.com",
    mentee_count:20
    },
    {
    id:3,
    mentor_name:"Manikandan",
    email:"mani@gmail.com",
    mentee_count:23
    },
    {
    id:4,
    mentor_name:"Raj",
    email:"raj@gmail.com",
    mentee_count:25
    },
    {
    id:5,
    mentor_name:"Vasanth",
    email:"vasanth@gmail.com",
    mentee_count:30
    }
])
    
    //insert user
    db.users.insertMany([
  {
    userid:1,
    name:"person1",
    email:"person1@gmail.com",
    absent_on:[new Date("15-oct-2020")
    ],
    company_drives:[],
    codekata_problems:[1,2,3,7,8],
    submitted_task:[
    {
    task_id:1,
    submitted_date:new Date("16-oct-2020")
    }
    ]},
    {
    userid:2,
    name:"person2",
    email:"person2@gmail.com",
    absent_on:[new Date("21-oct-2020")],
    company_drives:[1,2,3],
    codekata_problems:[1,3,4,5,7,8,9],
    submitted_task:[{
    task_id:3,
    submitted_date:new Date("20-oct-2020")
    }]},
    {
    userid:3,
    name:"person3",
    email:"person3@gmail.com",
    absent_on:[],
    company_drives:[2],
    codekata_problems:[6,7],
    submitted_task:[{
    task_id:6,
    submitted_date:new Date("22-oct-2020")
    }]}
])