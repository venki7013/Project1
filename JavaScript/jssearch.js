document.addEventListener('DOMContentLoaded', function() {
    //String Length
    let str1 = "Welcome to JavaScript. I am a JavaScript developer.";
    let str2 = "Welcome to Python. I am a Python developer.";
    document.getElementById("indexof1").innerHTML = str1.indexOf("JavaScript");
    document.getElementById("indexof2").innerHTML = str2.indexOf("Python", 20);
    document.getElementById("indexof3").innerHTML = str2.indexOf("JavaScript", 20);
    
    //last indexOf()
    let str3 = "Welcome to JavaScript. I am a JavaScript developer.";
    let str4 = "Welcome to React. I am a React developer.";
    document.getElementById("lastindexof1").innerHTML = str3.lastIndexOf("JavaScript");
    document.getElementById("lastindexof2").innerHTML = str4.lastIndexOf("React", 15);
    document.getElementById("lastindexof3").innerHTML = str4.lastIndexOf("Java", 25);

    //search()
    let str5 = "Welcome to Nellore. Nellore is a famous.";
    document.getElementById("search1").innerHTML = str5.search(/Nellore/);

    //Match()
    let str6 = "Welcome to Nellore city. Nellore City is a famous city. City with beautiful places";
    arr = str6.match(/city/gi);
    document.getElementById("match1").innerHTML = arr.length + " " + arr;

    //MatchAll()
    let str7 = "Welcome to Nellore city. nellore City is a famous city. Nellore City with beautiful places";
    arr1 = str7.matchAll(/nellore/gi)
    document.getElementById("matchall1").innerHTML = Array.from(arr1);

    //Includes()
    let str8 = "Welcome to Nellore. Nellore is a famous City.";
    let str9 = "Welcome to Nellore. Nellore is a famous City.";
    document.getElementById("includes1").innerHTML = str8.includes("Nellore");
    document.getElementById("includes2").innerHTML = str9.includes("nellore", 10);
   

    //startsWith()
    let str10 = "Welcome to Nellore. Nellore is a famous City.";
    let str11 = "Welcome to Nellore. Nellore is a famous City.";
    document.getElementById("start1").innerHTML = str10.startsWith("Welcome");
    document.getElementById("start2").innerHTML = str11.includes("nellore", 10);
    
    //EndsWith()
    let str12 = "Welcome to Nellore. Nellore is a famous City.";
    let str13 = "Welcome to Nellore. Nellore is a famous City.";
    document.getElementById("end1").innerHTML = str12.startsWith("Nellore");
    document.getElementById("end2").innerHTML = str13.includes("Nellore", 11);

    //String Templates
    let str14 = `I'm venki and `;
    let str15 = `I am a "FullStack Developer"`
    str16 = str14 + str15;
    document.getElementById("demo1").innerHTML=str16;

  });
  