//Task 1
console.log("HELLO WORLD")

//Task 2
var http =require('http')
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(  '<h1>Hello Node!!!!</h1>');


}).listen(3000,() => console.log("server running on port 3000"));

//Task 3

let fs =require('fs')
 fs.writeFile("welcome.txt", "Hello Node", err => {
      if (err) {
       console.log("error");
     }
 console.log("file Welcome created");
 });

 //2
 fs.readFile("welcome.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
       }
       console.log(data);
    });


    //Task 4
    fs.writeFile("password-generator","" ,err => {
        if (err) {
         console.log("error");
       }
   console.log("file password-generator created");
   });
   var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});


console.log(password);
console.log('password created')

   // Task 5
   fs.writeFile("email-sender  ","" ,err => {
    if (err) {
     console.log("error");
   }
console.log("file email-sender   created");
});
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: '',
  to: '',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});