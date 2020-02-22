const sqlite =require ('sqlite');
createDB()
async function createDB(){
    const db = await sqlite.open('./database.sqlite');
    try {
        await db.exec(`CREATE TABLE Persons (
        PersonID int,
        LastName varchar(255),
        FirstName varchar(255),
        Address varchar(255),
        City varchar(255)
    ); `)
    } catch (error) {
        console.log('table exist already')
    }

    console.log('check me ')
    
}


