document.addEventListener('DOMContentLoaded', function() {
    //String Length
    let str1 = "Welcome to JavaScript";
    document.getElementById("length1").innerHTML = str1.length;
    document.getElementById("length2").innerHTML = "String2 Length is".length;
    
    //String Slice
    let str2 = "Microsoft, Apple, Google";
    let str3 = "Microsoft, Apple, Google";
    document.getElementById('slice1').innerHTML=str2.slice(11,16);
    document.getElementById('slice2').innerHTML=str2.slice(-7);

    //Substring
    let str4 = "Venki, Venkatesh"
    document. getElementById('substring1').innerHTML=str4.substring(7,16);

    //Substr
    let str5 = "Rama, Krishna, Shiva";
    document.getElementById('substr1').innerHTML=str5.substr(6,14);
    document.getElementById('substr2').innerHTML=str5.substr(-5);

    //Replace
    let str6 = "Google, Facebook, Edward Jones";
    let str7 = "Google, Facebook, Google, Edward Jones, Google";
    let str8 = "Google, Facebook, Google, Edward Jones, Google";
    document.getElementById('replace1').innerHTML=str6.replace("Facebook","Twitter");
    document.getElementById('replace2').innerHTML=str7.replace(/Google/g, "Amazon");
    document.getElementById('replace3').innerHTML=str8.replaceAll(/Google/g, "Cisco");

    //Uppercase
    let str9 = "Venkatesh";
    document.getElementById('upper').innerHTML=str9.toUpperCase();

    //Uppercase
    let str10 = "Venkatesh";
    document.getElementById('lower').innerHTML=str10.toLowerCase();

    //Concatination
    let str11 = "Rama";
    let str12 = "Sita";
    document.getElementById('concat1').innerHTML=str11.concat(" "+ str12);

    //Trim
    let str13 = "       Venki       ";
    document.getElementById('trim1').innerHTML = str13.trim();

    //Trim Start
    let str14 = "       Venkatesh       ";
    document.getElementById('trim2').innerHTML = str14.trim();

    //Trim End
    let str15 = "       Venkat       ";
    document.getElementById('trim3').innerHTML = str15.trim();

    //Pad Start
    let str16 = 'V';
    document.getElementById('pad1').innerHTML = str16.padStart(4,"2");

    //Pad End
    let str17 = "V";
    document.getElementById('pad2').innerHTML = str17.padEnd(4,"2");

    //charAt
    let str18 = "Rama Sita";
    document.getElementById('charat1').innerHTML = str18.charAt(3);

    //charCodeAt
    let str19 = "Rama Sita";
    document.getElementById('charcodeat1').innerHTML = str19.charCodeAt(6);

    //Property Access
    let str20 = "Rama Sita";
    document.getElementById('prop1').innerHTML = str20[5];

    //Split method
    let str21 = "1|2|3";
    let array1 = str21.split("|");
    document.getElementById('split1').innerHTML = array1[2];
  });
  