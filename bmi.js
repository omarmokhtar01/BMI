const express = require('express');
const app = express();
const port = 3000;
const bodyParser=require("body-parser");/*define to work with input data
وبيسمح نوصل للروت
*/

app.use(bodyParser.urlencoded({extended:true}));/*allow post method object*/

app.get("/bmicalculator", (req, res) => {/*عنوان الي هكتبة فالمتصفح*/
  res.sendFile(__dirname+"/bmiCalculator.html");/*to call file html*/
});

app.post("/bmicalculator",function (req,res){/*للاستفادة من البيانات */
var n1=parseFloat(req.body.num1);/*عشان نخزن القيمة الي فالhtml الي اسمها num1*/
var n2=parseFloat(req.body.num2);
var result=(n1*n1)/n2;
res.send("Your BMI is "+result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
