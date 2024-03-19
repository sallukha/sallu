const express = require("express");
const app = express();
const studentSchema = require("./model");



app.use(express.json());

const port = 5000;

// get Student Profile 
app.get("/students", async(req, res) => {
 const getStudent =   await  studentSchema.find();
 console.log('Student Detail:', getStudent);
 return res.status(200).json(getStudent);

});

// Create Student Profile 
app.post("/create", async (req, res) => {

  const {name , email , password , cpassword} = req.body;

  if( !name || !email || !password || !cpassword){
    return res.status(400).json("Please fill Blank field First")
  }

  if(password !== cpassword){
return res.status(404).json('password not matched');
  }

  try {
const newStudent = await studentSchema.create(req.body);
console.log("Student created:", newStudent);
res.status(201).json(newStudent);
} catch (err) {
console.error("Error creating student:", err);
res.status(500).json({ error: "Error creating student" });
}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
