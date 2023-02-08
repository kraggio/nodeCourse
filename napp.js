// const fs = require('fs')

// //fs.writeFileSync('notes.txt', 'Keily.')

// /**
//  * Challenge:Append a message to notes.txt
//  * 
//  * 1. use appendFileSync tp append to the file
//  * 2. Run the Script
//  * 3. Check your work by opening the file and viewing the apppended text
//  */

// fs.appendFileSync('notes.txt', 'Appended this')

// const add = require('./utils.js')

// const sum = add(1,2);
// console.log(sum);

/**
 * 1. create a new file called notes,js
 * 2. create a getNotes function that returns "Your notes..."
 * 3. export getNotes function 
 * 4. from app.js, load in and call the function 
 * printing message form console
 */

//const validator = require('./node_modules/validator')
// const str = getNotes();

// console.log(chalk.blue(str));

// console.log(chalk.green.inverse.bold("Working"));
// //isEmail test for boolean
// // console.log(validator.isEmail('andrew@example.com')-)

// // console.log(validator.isURL('https/mead.io'))

// console.log(process.argv[2])

const chalk =  require('./node_modules/chalk');
const yargs = require('./node_modules/yargs')
const notes = require('./notes.js');

//const command = process.argv[2];
//console.log(process.argv)
// if(command === 'add'){
//     console.log('Adding Note')
// }else if(command === 'remove'){
//     console.log('Removing note')
// }

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create Remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title)
    }
})

//Create Read command
yargs.command({
    command:'read',
    describe:'Reads a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.readNotes(argv.title)
    }
})
//Create List command
yargs.command({
    command:'list',
    describe:'List all notes',
    handler:function(argv){
        notes.listNotes(argv)
    }
})

yargs.parse();
//console.log(yargs.argv)
