const mongoose =require('mongoose');

const membersSchema = new mongoose.Schema({years: String, member: String, instrument: String});
const awardsSchema = new mongoose.Schema({year: String, nominee: String, award: String});

mongoose.model('members', membersSchema, 'members');
mongoose.model('awards', awardsSchema, 'awards');