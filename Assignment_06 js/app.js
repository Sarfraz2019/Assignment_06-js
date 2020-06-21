
// document.write("<h1>CHAPTER #21-25 </h1>")
// document.write("<h1>Question #01 </h1>")
// var firstName = prompt("Enter first name ")
// var lastName = prompt("Enter last name ")
// var fullName = firstName + " " + lastName

// document.write("Welcome "+ fullName)

// document.write("<h1>Question #02 </h1>")


// var fav = prompt("Enter fav mobile model")
// document.write("My fav phone is: "+fav + " <br>")
// var len = fav.length
// document.write("Lenght:" + len)


// document.write("<h1>Question #03 </h1>")


// var string = "pakistani"

// for(var i=0; i<string.length; i++){
//     if(string[i] === "n"){
//         document.write("String: "+string + "<br>")
//         document.write("Index of 'n': "+i)
//     }
// }

// document.write("<h1>Question #04 </h1>")



// var string = "Hello world"

// for(var i=0; i<=string.length; i++){
//     if(i === 9){
//         document.write("String: "+string + "<br>")
//         document.write("Index of 'l': "+i)
//     }
// }

// document.write("<h1>Question #05 </h1>")
// var string = "Pakistani"

// for(var i=0; i<=string.length; i++){
//     if(i === 3){
//         document.write("String: "+string + "<br>")
//         document.write("character at index 3: "+string[i])
//     }
// }


// document.write("<h1>Question #06 </h1>")

// var firstName= prompt("Enter Your First Name")
// var lastName= prompt("Enter Your Last Name")
// var merg=  firstName.concat(lastName)
// alert("Welcome "+merg); 


// document.write("<h1>Question #07 </h1>")

// var city ="Hyderabad"
// document.write("City:"+city+"<br>")
// var city=city.replace("Hyder", "Islam");
// document.write("After Replacement : "+city) 

// document.write("<h1>Question #08 </h1>")

// var message = "Ali and Sami are best friends. They play cricket and football together.";


// var message = message.replace(/and/g,"&")
// document.write(message)

// document.write("<h1>Question #09</h1>")


// var num = "472";
// var type = typeof(num);
// document.write("Value: "+num + "<br>")
// document.write("Type: "+type + "<br>")

// var type2 = Number(num);
// document.write("Value: "+num + "<br>")
// document.write("Type: "+typeof(type2) + "<br>")


// document.write("<h1>Question #10</h1>")

// var alpha = prompt("Enter Any word?")

// document.write("User Input: "+alpha+"<br>")
// document.write("Upper case: "+ alpha.toUpperCase()+"<br>")


// document.write("<h1>Question #11</h1>")

// var alpha = prompt("Enter Any word?")
// var firstchar = alpha.slice(0,1);
// var otherchar = alpha.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();

// var title = firstchar + otherchar ;
// document.write("User Input: "+alpha+"<br>")
// document.write("Title case: "+ title +"<br>")


// document.write("<h1>Question #12</h1>")

// var num = 35.36 ; 
// var a = num.toString();
// var b = a.replace(".","");

// document.write("Number: "+num+"<br>")
// document.write("Result: "+b)

// document.write("<h1>Question #13</h1>")

// userinput();

// function userinput() {
//      username = prompt("Enter User name")

// for (var i = 0; i < username.length; i++) {
// var j = username.charCodeAt(i);
//     if (j >= 33 && j <= 64) {
//        alert("Please enter a valid username!")
//         userinput();
//     }
// }
// }


// document.write("<h1>Question #14</h1>")

// var A = ["cake", "apple pie", "cookie", "chips", "patties"] 

// var search = prompt("Welcome to ABC bakery! What do you want to order Sir/Ma'am ?")

// search = search.toLowerCase();
// for(var i=0; i<A.length; i++){
//     if(search === A[i]){
//         document.write(search + " is <b>available</b> at index "+ i + " in our bakery")
//         break;
//     }
// }

// if(search !== A[i]){
//     document.write("We are Sorry! " + search + " is <b>not available</b> in our bakery")
// }


// document.write("<h1>Question #15</h1>")
// passwordCheck();
// function passwordCheck(){
// var pass = prompt("Enter Password")

// if(pass.length >= 6){
// for (var i = 0; i < pass.length; i++) {
// var j = pass.charCodeAt(i);
// var k = pass.charCodeAt(i);
// if( (k >= 65 && k<= 90)|| (k>=97 && k<=122) ){
//     if( (j >= 48 && j <= 64)|| (j>= 65 && j<= 90)|| (j>=97 && j<=122)){

//     }
//     else{

//         alert("Password must be contain alphabets and numbers only")
//         passwordCheck();

//     }

// }

// else{
//     k = 0
//     //   console.log(k)  

//         alert("Password can not begin with a number or symbol Please enter a valid password")
//         passwordCheck();
//     }

// }
//   document.write("Password Match")
// }
// else{
//        alert("Passwrod must be contain  at least 6 characters long ")
//        passwordCheck();

//     }
// }

// document.write("<h1>Question #16</h1>")

// var university = "University of Karachi"
// var array = university.split("");
// for (var i = 0; i < university.length; i++)
// document.write(array[i] + "<br>");




// document.write("<h1>Question #17</h1>")

// var country = "Pakistan";
// var b = country.length;
// document.write("User input: "+ country+ "<br>")
// document.write("Last character of input: "+ country[b -1]+ "<br>")


// document.write("<h1>Question #16</h1>")
// var count=0;

// var text =  "The quick brown fox jumps over the lazy dog"; 
// var array = text.split(" ");
// for (var i = 0; i < array.length; i++){
//     if( array[i]== "the" ||array[i]== "The"){

//         count++;
//     }
// }
// document.write("Text: "+text + "<br>");
// document.write("There are "+count +"occurence(s) of word 'the'"+ "<br>");


// document.write("<h1>CHAPTER #26-30 </h1>")

// document.write("<h1>Question #01</h1>")

// var num = +prompt("Enter positive integer number");
// var a = Number(num);
// var b = Math.round(num)
// var c = Math.floor(num)
// var d = Math.ceil(num)
// document.write("number: "+a+"<br>")
// document.write("round off value : "+b+"<br>")
// document.write("floor value:  "+c+"<br>")
// document.write("ceil value: "+d+"<br>")



// document.write("<h1>Question #02</h1>")

// var num = +prompt("Enter negative integer number");
// var a = Number(num);
// var b = Math.round(num)
// var c = Math.floor(num)
// var d = Math.ceil(num)
// document.write("number: "+a+"<br>")
// document.write("round off value : "+b+"<br>")
// document.write("floor value:  "+c+"<br>")
// document.write("ceil value: "+d+"<br>")

// document.write("<h1>Question #03</h1>")

// var num = +prompt("Enter Any number")
// var a = Math.abs(num)
// document.write("The absolute value of "+num+ " is "+a)


// document.write("<h1>Question #04</h1>")


// var b=Math.floor(Math.random()*6)
// var c=Math.floor(Math.random()*6)
// var diece1 = Number(b) +1
// var diece2 = Number(c) +1
// document.write("Random diece value : "+diece1 +"<br>")
// document.write("Random diece value : "+diece2 +"<br>")



// document.write("<h1>Question #05</h1>")

// var num =Math.floor(Math.random()*2)
// var coin = Number(num) +1

// if(coin == 1){
//     document.write(coin + "<br>")
//     document.write("random coin value: Tails")

// }
// else{
//     document.write(coin + "<br>")
//     document.write("random coin value: Heads")

// }


// document.write("<h1>Question #06</h1>")

// var b=Math.floor(Math.random()*100)
// var num = Number(b) + 1
// document.write("Random number between 1 and 100 is : "+num+"<br>")        


// document.write("<h1>Question #07</h1>")


// var a= parseFloat(prompt("Enter Your Weight in kgs "));
// document.write("The weight of user is "+a+" kilograms")



// document.write("<h2>QUESTION # 08 </h2>")
// document.write("<h2>Guess game </h2>")



//   // random value generated 
//   var y = Math.floor(Math.random() * 10 + 1); 

//   // counting the number of guesses 
//   // made for correct Guess 
// //   var guess = 1;
//   for (var guess=1 ; guess <=3 ; guess++){
//       var x = +prompt("Enter Guess number")

//   if(x === y) 
//    {     
//        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//                + guess + " GUESS "); 
//                break;
//    } 
//    else if(x > y) /* if guessed number is greater 
//                    than actual number*/ 
//    {     

//        alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
//    } 
//    else
//    { 

//        alert("OOPS SORRY!! TRY A GREATER NUMBER") 
//    }
//  }



// document.write("<h1>CHAPTER #31-34 </h1>")

// document.write("<h2>QUESTION # 01 </h2>")

// var date = new Date();
// document.write(date)


// document.write("<h2>QUESTION # 02 </h2>")

// var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

// var fullMonth = ["January","Febuary","March","April","May","June","July","Augest","September","October","November","December"]

// var date = new Date();
// var a = date.toString();
// var getMonth = a.slice(4,7)
// var j=0
// for(var i=0; i< month.length ; i++){
    
// if(getMonth == month[j]){
//     document.write("Current Month: "+fullMonth[j])
//     break;
// }
//  j++ ;
// }


// document.write("<h2>QUESTION # 03 </h2>")


// var date = new Date();
// var a = date.toString();
// var getday = a.slice(0,3)
// document.write("Today is "+getday)



// document.write("<h2>QUESTION # 04 </h2>")

// var date = new Date();
// var a = date.toString();
// var getday = a.slice(0,3)

// if(getday == "Sun" || getday == "Sat"){
//     document.write("It's Fun day")
// }
// else{
//     document.write("It's Working day")

// }


// document.write("<h2>QUESTION # 05 </h2>")


// var date = new Date();
// var a = date.toString();
// var getday = a.slice(8,10)
// if(getday <= 15){
//     document.write("First fifteen days of the month")
// }
// else{
// document.write("Last days of the month")
// }



// document.write("<h2>QUESTION # 06 </h2>")





// var cd= new Date();
// document.write("Current Date : "+cd+"<br>");
// var b=cd.getTime();
// document.write("Elapsed Millisecond since january 1 ,1970:   "+b+"<br>");
// var c= b/1000;
// document.write("Elapsed Minutes since january 1 ,1970:   "+c+"<br>");            //Question6



// document.write("<h2>QUESTION # 07 </h2>")


// var h= new Date();
// var b=h.getHours();
// document.write(b);
// if(b <=12){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }                 



// document.write("<h2>QUESTION # 08</h2>")


// var b=new Date();
// b.setFullYear(2020, 11, 31);
// b.setHours(00);
// b.setMinutes(00)
// b.setSeconds(00);
// document.write("Later Date : "+" "+b)    


// document.write("<h2>QUESTION # 09</h2>")


// var r= new Date( 2020,3,23);
// var rm=r.getTime();
// //document.write(rm+"<br>")
// var today= new Date();
// var todaym=today.getTime();
// //document.write(todaym+"<br>")
// var d=todaym-rm;
// var c=Math.floor(d/(1000*60*60*24));
// document.write(c+"  days have passed since 1st Ramadan, 2020")  


// document.write("<h2>QUESTION # 10</h2>")



// var d= new Date(2015,11,5);
// d.setHours(22,50,16)
// document.write("On refrence Date : "+" "+d+"<br>");
// var e=d.getTime();
// //document.write(e+"<br>")
// var f=new Date(2015,0,0);
// var g=f.getTime();
// //document.write(g+"<br>");
// var h=e-g;
// var i=Math.floor(h/(1000*60));
// document.write(i+"seconds had passed since begining of 2015"+"<br>")    


// document.write("<h2>QUESTION # 11</h2>")


// var e=new Date();
// document.write("Current date: "+" "+e+"<br>");
// var d=new Date();
// d.setHours(18)
// document.write("1 hour ago it was "+d+"<br>")    



// document.write("<h2>QUESTION # 12</h2>")

// var c=new Date();
// document.write("Current Date: "+" "+c+"<br>")
// var b= new Date(1920,5,18);
// document.write("Its "+b)  


// document.write("<h2>QUESTION # 13</h2>")


// var dob= new Date(prompt("Enter birth year"));

// var dobmili=dob.getTime();
// var j=dob.toString();
// var k=j.slice(11,15)

// //document.write(rm+"<br>")
// var today= new Date();
// var todaym=today.getTime();
// //document.write(todaym+"<br>")
// var d=todaym-dobmili;
// var c=Math.floor(d/(1000*60*60*24*30*12));
// document.write(" Your age is: "+" "+c+"<br>")
// document.write("your birth year is : "+" "+k)


// document.write("<h2>QUESTION # 14</h2>")





// document.write("<h2>K-ELECTRIC  BILL</h2>")

// var a=prompt("Enter Your name:");
// document.write("Customer Name: "+" "+a+"<br>");

// var b=prompt("Enter current month");
// document.write("Current Month : "+" "+b+"<br>")

// var c= parseInt(prompt("Enter Units"));
//  document.write("Number of units: "+" "+c)

//  var d= 16;
//  document.write("Charges per units: "+" "+d+"<br>");

//  var e=c*d;
//  document.write("Net Amount payable (within due date)"+"<br>");

//  var f=350;
//  document.write("Late payment surchage :"+f+"<br>");

//  var g=e+f;
//  document.write("Gross amount payable(after due date)"+" "+g+"<br>")


// document.write("<h1>CHAPTER #35-38 </h1>")

// document.write("<h2>QUESTION # 01 </h2>")

// function time(a){
//     var a= new Date();
//     document.write(a)
// }
// time();                      


// document.write("<h2>QUESTION # 02</h2>")


// function name(a,b){

//     var a=prompt("Enter your first name:");
//     var b=prompt("Enter your last name")
//     alert("Welcome "+a+" "+b)
// }
// name();  


// document.write("<h2>QUESTION # 03</h2>")


// function add(c){

//     var a=+prompt("Enter your first number:");
//     var b=+prompt("Enter your second number")
//     var c= a+b;
//     alert(c)
// }
// add();       


// document.write("<h2>QUESTION # 04</h2>")



// function calc(num1,operat,num2){

    

//     if(operat==="+"){
//           return num1+num2
//     }else if(operat==="-"){

//         return num1-num2
//     }
//     else if( operat==="/"){
//         return num1/num2

//     }else {

//         return num1*num2
//     }

// }
// var result=calc(6,"*",6);
// var result1=calc(6,"+",6);
// var result2=calc(6,"-",66);
// var result3=calc(6,"/",66);
// var result4=calc(6,"%",6);
// document.write(result) 
// document.write(result1+"<br>") 
// document.write(result2+"<br>") 
// document.write(result3+"<br>") 
// document.write(result4+"<br>") 



// document.write("<h2>QUESTION # 05</h2>")


// function sq(c){

//     var a=+prompt("Enter your first number:");
//     if (a === 0) {  
//         return 1;  
//         document.write(a)
//     } 
//     else {  
//         return a * sq( a - 1 );
//         document.write(a)  
//     } 
// }
// sq();    



// document.write("<h2>QUESTION # 06</h2>")



// function user(){
//      var a=parseInt(prompt("Enter Starting number:"))
//      var b=parseInt(prompt("Enter Ending number:"));
    
// for (i = a; i < b; i++) {
//     document.write(  i + "<br>");
//   }
// }
// user();     


// document.write("<h2>QUESTION # 08</h2>")



// function nest(){

//     var a=parseInt(prompt("Enter Base number:"))
//      var b=parseInt(prompt("Enter Perpendicular number:"));
//      var c= (a*a)+(b*b);
//      document.write("The value of Hypotenius is"+" "+c+"<br>")


// function square(){

//     var c= a*4;
//     document.write("The value of Square is"+" "+c)
// }
// square();
// }
// nest();  



// document.write("<h2>QUESTION # 09</h2>")


// function rect(){
// var a=parseInt(prompt("Enter width of a triangle"));
// var b= parseInt(prompt("Enter height of a triangle"));
// var c=a*b;
// document.write("The Area Of a Triangle is : "+" "+c)

// }
// rect();


// document.write("<h2>QUESTION # 10</h2>")


// function pal(){



// var word=prompt("Enter your word");
// var check="";
// for(var i=word.length - 1; i>=0; i--){
// check += word[i];
// }
// //document.write(word,check)
// if(word===check){
//     document.write(word+" "+ "is palandrome word")
// }else{
//     document.write(word+" "+ "is not  palandrome word")
// }

// }
// pal();  



// document.write("<h2>QUESTION # 11</h2>")


// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));   


// document.write("<h2>QUESTION # 12</h2>")


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));  


// document.write("<h2>QUESTION # 13</h2>")

// function str_count(str1)
// {
//   var str_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (str_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(str_count("The quick brown fox"));



// document.write("<h2>QUESTION # 14</h2>")



function calcCircumference(){
    var c=parseFloat( prompt("Enter circle radius"))
    var d=(2*(3.14)*c);
    document.write("The Circumference of the circle is :"+" "+d+"<br>")

    function calcArea(){
        var e=(3.14*c)
        document.write("The area of circle is : "+" "+e+"<br>")
    }
    calcArea();
}
calcCircumference();

