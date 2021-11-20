const mysql = require('mysql'); 

let conn = mysql.createConnection({
        host:'34.130.148.203',
        user: 'root',
        password:'password',
        database:'doodle'
});

conn.connect();

conn.query(`INSERT INTO Availability values ("Admin",CURRENT_TIME(),'["08:00","09:00","10:00","11:00","12:00","13:00", "14:00", "15:00", "16:00", "17:00"]')`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Availability inserted');
            });     
       
//Updating Table to add times
conn.query(`UPDATE Availability 
            SET LastUpdate = CURRENT_TIME(),
                TimesAvailable = '{"08:00":true, "09:00":true, "10:00":true, "11:00":false, "12:00":true, "13:00":true, "14:00":true, "15:00":true, "16:00":true, "17:00":true}' where Name = "Admin"
        `
            ,(err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('row inserted');
            }
            );

//Selecting information needed from availability
conn.query(`SELECT * from Availability`
            ,(err,rows,fields) => {
                let avail = [];
                if (err)
                    console.log(err);
                else
                    console.log('row selected');

                console.log("Current admin posted admin availability")
                console.log(rows);
            });
            