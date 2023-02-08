const fs = require('fs')
const chalk = require('chalk')

const getNotes = function (){
    return "Your Notes..."
}

const addNote = function(title, body){
    const notes = loadNotes();
    //const duplicateNotes = notes.filter((note)=>note.title == title)
    const duplicateNote = notes.find((note)=> note.title === title)
    //console.log(duplicateNote.title)

        debugger

    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green("Adding passed"))
    }else{
        console.log(chalk.inverse.red("Adding failed"))
    }
}

const removeNote = function (title){
    const notes = loadNotes();
    //this filters the array by keeping everything not equal to the argument
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })
    saveNotes(notesToKeep);
    if(notes.length>notesToKeep.length){
        console.log(chalk.inverse.green('Removed Note'))
    }else{
        console.log(chalk.inverse.red('No note found'))
    }
}
const listNotes =()=>{
    const notes = loadNotes()

    console.log(chalk.inverse.blue('Your Notes'))

    notes.forEach((note)=> console.log(note.title))
}

const readNotes = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
    //console.log(note)
    if(note){
        console.log(chalk.blue.bold(note.title))
        console.log(note.body)
    }else{
        console.log(note)
        console.log(chalk.inverse.red('No Title Found!'))
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (){
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}