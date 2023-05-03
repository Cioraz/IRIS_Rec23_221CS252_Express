// Initialize Mongoose Schema and Model
const mongoose = require('mongoose');
// Main Student registration and Login Schema
const studentSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: true,
    },
    studentRollNum: {
        type: String,
        required: true,
    },
    studentEmail: {
        type: String,
        required: true,
    },
    studentBranch: {
        type: String,
        required: true,
    },
    studentPassword: {
        type: String,
        required: true,
    },
    isPOC: {
        type: Boolean,
        default: false,
    },
    companyThumbnail: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

// Company Schema
const companySchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    companyEmail: {
        type: String,
        required: true,
    },
    companyDescription: {
        type: String,
        required: true,

    },
    companySalary: {
        type: Number,
        required: true,
    },
    companyBranch: {
        type: String,
        required: true,
    },
    companyImage: {
        type: String,
    }
})

const Company = mongoose.model('company', companySchema);

const Student = mongoose.model('student', studentSchema);

// Exporting the models
module.exports = { Student, Company };