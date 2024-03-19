
const mongoose = require('mongoose') ;

const studentSchema = new mongoose.Schema({ 
    

name:String,
email:String,
password:String,
cpassword: String


// Name : {
//     type :String,
//     required:true
// }


 });

 // Or:
try {
     mongoose.connect('mongodb://127.0.0.1:27017/Student').then(()=>{
        console.log('Local Db Connected');
     });
  } catch (error) {
    handleError(error);

  }

  

module.exports = mongoose.model('SDetail', studentSchema);

