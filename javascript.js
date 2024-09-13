// Assignment No 5

// Question No 1

// var StudentNames = [ ]

// Question No 2

// var StudentNames = [];
// console.log(StudentNames["student1"] = "Ahsan") ;
// console.log(StudentNames["student2"] = "Azeem") ;

// Question No 3

// var StringArray = ["Ahsan" , "Azeem" , "Rohan"]
// console.log(StringArray);

// Question No 4

// var NumbersArray = [1 , 2 , 3 , 4 , 5]
// console.log(NumbersArray);


// Question No 5

// var BooleanArray = [true, false, true]
// console.log(BooleanArray);


// Question No 6

// var MixedArray = ["Ahsan" , 1, true]
// console.log(MixedArray);

// Question No 7

// var Qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
// document.write ("<h1> Qualifications </h1> <br>")
// document.write ("1)" + " " + Qualifications[0]  + "<br>")
// document.write ("2)" + " " + Qualifications[1] + "<br>")
// document.write ("3)" + " " + Qualifications[2] + "<br>")
// document.write ("4)" + " " + Qualifications[3] + "<br>")
// document.write ("5)" + " " + Qualifications[4] + "<br>")
// document.write ("6)" + " " + Qualifications[5] + "<br>")
// document.write ("7)" + " " + Qualifications[6] + "<br>")
// document.write ("8)" + " " + Qualifications[7] + "<br>")

// Question No 8

// var StudentNames = [ ]
// StudentNames.push ("Michael", "John", "Tony");
// var Scores = [230, 320, 480];
// var TotalMarks = 500;

// for (let i = 0; i < StudentNames.length; i++) {
//     let Percentage = (Scores[i] / TotalMarks) * 100;
//     document.write("Score of " + StudentNames[i] + " is " + Scores[i] + ". Percentage: " + Percentage + "%<br>");
// }

// Question No 9

// var colors = [  "Red", "Green", "Blue", "Yellow" ];
// document.write(" <b> Original Array: </b> " +  colors  + "<br><br>");

    // (a)
    // var ColorAddBeginning = prompt("What Color Do You Want To Add To The Beginning?");
    // colors.unshift(ColorAddBeginning);
    // document.write(" <b> After Adding Color To The Beginning: </b> " +  colors  + "<br><br>");

    // (b)
    // var colorAddEnd = prompt("What Color Do You Want To Add To The End?");
    // colors.push(  colorAddEnd);
    // document.write(" <b> After Adding Color To The End: </b> " + colors + " <br><br>");

    // (c)
    // colors.unshift("Purple", "Orange");
    // document.write(" <b> After Adding Two Colors To The Beginning: </b> " + colors + "<br><br>");

    // (d)
    // colors.shift();
    // document.write(" <b> After Deleting The First Color: </b> " + colors + "<br><br>");

    // (e)
    // colors.pop();
    // document.write(" <b> After Deleting The Last Color:  </b> " + colors + "<br><br>");

    // (f)
    // var indexToAdd = prompt("At Which Index Do You Want To Add a Color?");
    // var colorToAddAtIndex = prompt("What Color Do You Want To Add At Index " + indexToAdd + "?");
    // colors.splice(indexToAdd, 0, colorToAddAtIndex);
    // document.write(" <b> After Adding Color At Index   " + indexToAdd + ": </b> " + colors + "<br><br>");

    // (g)
    // var indexToDelete = prompt("At Which Index Do You Want To Delete Color?");
    // var numberOfColorsToDelete = prompt("How Many Colors Do You Want To Delete?");
    // colors.splice(indexToDelete, numberOfColorsToDelete);
    // document.write(" <b> After Deleting " + numberOfColorsToDelete + " color from index " + indexToDelete + ": </b> " + colors + "<br><br>");


    // Question No 10

    // var scores = [320, 230, 480, 120];
    // document.write(" <b> Original Scores: </b> " + scores + "<br><br>");
    // scores.sort();
    // document.write(" <b> Sorted Scores: </b> " + scores + "<br><br>");

    // Question No 11

    // var Cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    // document.write(" <b> Cities List: </b> " + "<br>" + Cities + "<br><br>");
    // let selectedCities = [Cities[2], Cities[3]];
    // document.write(" <b> Selected Cities List: </b> " + "<br>" + selectedCities + "<br><br>");

    // Question No 12

    // var arr = ["This", " is", " my", " cat"];
    // document.write(" <b> Array: </b> "  + "<br>" + arr + "<br><br>");    
    // var sentence = arr.join("");
    // document.write(" <b> String: </b> " + "<br>" + sentence);

    // Question No 13

    // var devices = [];
    
    // devices.push("keyboard");
    // devices.push("mouse");
    // devices.push("printer");
    // devices.push("monitor");

    // document.write(" <b> Devices: </b> "  + "<br>" + devices + "<br><br>");

    // document.write("Out: " + "<br>" + devices[0] + "<br>");
    // document.write("Out: " + "<br>" + devices[1] + "<br>");
    // document.write("Out: " + "<br>" + devices[2] + "<br>");
    // document.write("Out: " + "<br>" + devices[3] + "<br>");

    // Question No 14

    // var devices = [];

    // devices.push("keyboard");
    // devices.push("mouse");
    // devices.push("printer");
    // devices.push("monitor");

    // document.write(" <b> Devices: </b> "  + "<br>" + devices + "<br><br>");

    // document.write("Out: " + "<br>" + devices[3] + "<br>");
    // document.write("Out: " + "<br>" + devices[2] + "<br>");
    // document.write("Out: " + "<br>" + devices[1] + "<br>");
    // document.write("Out: " + "<br>" + devices[0] + "<br>");

    // Question No 15
     
    // var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    
    // document.write('<select>');
    
    // for (var i = 0; i < manufacturers.length; i++) {
    //     document.write('<option>' + manufacturers[i] + '</option>');
    // }
    
    // document.write('</select>');