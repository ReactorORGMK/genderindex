var fs = require("fs");
console.log("Test");
var fileText = fs.readFileSync("RodovIndeks2021code2-1.csv").toString();
var lines = fileText.split("\n");
var firstLine = lines[0];
var count = 0;
var titles = firstLine.split(";");
var firstPart = [];
var secondPart = [];
var titleCount = 0;
for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
    var title = titles_1[_i];
    // console.log(title)
    if (titleCount < 17) {
        firstPart.push(title.trim());
    }
    else {
        break;
    }
    titleCount++;
}
titles = titles.slice(firstPart.length);
console.log(firstPart);
console.log("-----------");
titleCount = 0;
var tempTitles = [];
for (var _a = 0, titles_2 = titles; _a < titles_2.length; _a++) {
    var title = titles_2[_a];
    if (titleCount == 21) {
        secondPart.push(tempTitles);
        titleCount = 0;
        tempTitles = [];
        tempTitles.push(title.trim());
    }
    else {
        tempTitles.push(title.trim());
    }
    titleCount++;
}
// secondPart.push(tempTitles)
console.log(secondPart);
var result = {};
for (var _b = 0, lines_1 = lines; _b < lines_1.length; _b++) {
    var line = lines_1[_b];
    // console.log(line)
    var opstina = {};
    var domenSubdomen = {};
    var parts = line.split(";");
    var partsCount = 0;
    if (count > 0) {
        for (var _c = 0, firstPart_1 = firstPart; _c < firstPart_1.length; _c++) {
            var title = firstPart_1[_c];
            var value = parts[partsCount];
            if (title == "scoreMun") {
                opstina[title] = new Number(value);
            }
            else {
                opstina[title] = value;
            }
            partsCount++;
        }
        for (var _d = 0, secondPart_1 = secondPart; _d < secondPart_1.length; _d++) {
            var group = secondPart_1[_d];
            var groupKey = "";
            var groupResult = {};
            var groupCount = 0;
            var columns = {};
            for (var _e = 0, group_1 = group; _e < group_1.length; _e++) {
                var title = group_1[_e];
                var value = parts[partsCount].trim();
                if (groupCount < 3) {
                    if (groupCount == 0) {
                        groupKey = title;
                    }
                    else {
                        groupResult[title] = value;
                    }
                }
                else {
                    if (groupCount % 3 == 0) {
                        var tempValue = parts[partsCount + 2].trim();
                        if (tempValue.endsWith("%")) {
                            tempValue = tempValue.substring(0, tempValue.length - 1);
                        }
                        if (tempValue == "0,0") {
                            tempValue = "0";
                        }
                        var key1 = parts[partsCount].trim();
                        var key2 = parts[partsCount + 1].trim();
                        columns[key1] = {
                            columnName: key2,
                            columnValue: tempValue
                        };
                    }
                }
                groupCount++;
                partsCount++;
            }
            groupResult["columns"] = columns;
            domenSubdomen[groupKey] = groupResult;
        }
        opstina["domenSubdomen"] = domenSubdomen;
        result[parts[0]] = opstina;
    }
    count++;
}
console.log(result);
for (var opstinaKey in result) {
    var opstina = result[opstinaKey];
    var domeni = opstina.domenSubdomen;
    var resultDomen = {};
    for (var domenKey in domeni) {
        console.log(domenKey);
        var domenValue = domeni[domenKey];
        if (domenKey == "-LQsYG2Wf30xOMNPuxeJ" || domenKey == "-LQsYSYceSCpupl-VqtH" || domenKey == "-LQsYg0m0Dl0JR_oXeKa") {
            resultDomen[domenKey] = domenValue;
        }
    }
    //--domen 1
    var subdomeni = {};
    var subdomenKeys = [
        "-NV_7vVveBstebbli0i3",
        "-LQcpctWd50cBgXtHR6o",
        "-NVdhoAbkVxs105-VQmL",
        "-LQcpt9XPEk-0RcqIjlx",
        "-LQcpveXXtKfPdoc7fmx",
        "-LQcq2lOO8wzElQwGoQj",
        "-LQcq5C8PrRhsSSVp6Ra"
    ];
    for (var domenKey in domeni) {
        var domenValue = domeni[domenKey];
        var found = false;
        for (var _f = 0, subdomenKeys_1 = subdomenKeys; _f < subdomenKeys_1.length; _f++) {
            var subdomeKey = subdomenKeys_1[_f];
            if (domenKey == subdomeKey) {
                found = true;
            }
        }
        if (found) {
            subdomeni[domenKey] = domenValue;
        }
    }
    resultDomen["-LQsYG2Wf30xOMNPuxeJ"]["subdomens"] = subdomeni;
    //--domen 2
    subdomeni = {};
    subdomenKeys = [
        "-LQcqXGWLicpW3G1Rs0B",
        "-LQcqaVOx_gPcpZrVuRm",
        "-LQcqg5lDGu9x9Jh2wGi",
        "-LQcqlE8VDHya5afZ1ju",
        "-LQcqoPNffntTjFMsO13",
        "-LQcqrr1lbdjzL-BjBQk",
        "-LQcqur8fQHJmB6xufaU",
        "-LQcqyivWzA8ocoxOjhE"
    ];
    for (var domenKey in domeni) {
        var domenValue = domeni[domenKey];
        var found = false;
        for (var _g = 0, subdomenKeys_2 = subdomenKeys; _g < subdomenKeys_2.length; _g++) {
            var subdomeKey = subdomenKeys_2[_g];
            if (domenKey == subdomeKey) {
                found = true;
            }
        }
        if (found) {
            subdomeni[domenKey] = domenValue;
        }
    }
    resultDomen["-LQsYSYceSCpupl-VqtH"]["subdomens"] = subdomeni;
    //--domen 3
    subdomeni = {};
    subdomenKeys = [
        "-LQdfBx153RxqRS6ouoZ",
        "-LQdfYldy29EgZbmBaJA",
        "-LQdfaxV6Rf3hY4ed8X3",
        "-LQdga_WWjW473kitYNf",
        "-LQdgh_sBO0MzJUHAVeS",
        "-LQdgpmkbb06RkjVP1Cb",
        "-LQdgsj6dK1iRwGjuvNU"
    ];
    for (var domenKey in domeni) {
        var domenValue = domeni[domenKey];
        var found = false;
        for (var _h = 0, subdomenKeys_3 = subdomenKeys; _h < subdomenKeys_3.length; _h++) {
            var subdomeKey = subdomenKeys_3[_h];
            if (domenKey == subdomeKey) {
                found = true;
            }
        }
        if (found) {
            subdomeni[domenKey] = domenValue;
        }
    }
    resultDomen["-LQsYg0m0Dl0JR_oXeKa"]["subdomens"] = subdomeni;
    // console.log(resultDomen)
    result[opstinaKey]["domenSubdomen"] = resultDomen;
    // break
}
fs.writeFileSync("opstini2.json", JSON.stringify(result, null, 4));
// let data1 = [
//     ["mk-ad",37],
//     ["mk-ar",14],
//     ["mk-br",40],
//     ["mk-tl",34],
//     ["mk-bg",38],
//     ["mk-vj",15],
//     ["mk-bs",17],
//     ["mk-bn",27],
//     ["mk-bu",26],
//     ["mk-va",26],
//     ["mk-vl",20],
//     ["mk-vv",57],
//     ["mk-ve",38],
//     ["mk-ni",28],
//     ["mk-vh",17],
//     ["mk-gb",33],
//     ["mk-gv",30],
//     ["mk-gt",29],
//     ["mk-gr",26],
//     ["mk-db",23],
//     ["mk-di",16],
//     ["mk-dl",29],
//     ["mk-dr",29],
//     ["mk-dm",27],
//     ["mk-sd",35],
//     ["mk-de",15],
//     ["mk-gp",41],
//     ["mk-ze",15],
//     ["mk-zk",15],
//     ["mk-zr",16],
//     ["mk-il",21],
//     ["mk-jg",17],
//     ["mk-av",26],
//     ["mk-kb",24],
//     ["mk-kx",43],
//     ["mk-vd",39],
//     ["mk-kh",24],
//     ["mk-kn",20],
//     ["mk-os",38],
//     ["mk-ky",29],
//     ["mk-kz",34],
//     ["mk-kg",29],
//     ["mk-ks",31],
//     ["mk-um",22],
//     ["mk-li",15],
//     ["mk-lo",18],
//     ["mk-mr",26],
//     ["mk-mk",31],
//     ["mk-md",33],
//     ["mk-mg",14],
//     ["mk-ng",28],
//     ["mk-nv",24],
//     ["mk-ns",24],
//     ["mk-od",30],
//     ["mk-pe",21],
//     ["mk-ph",38],
//     ["mk-pn",14],
//     ["mk-pp",23],
//     ["mk-pt",33],
//     ["mk-rv",25],
//     ["mk-rn",18],
//     ["mk-re",34],
//     ["mk-rm",29],
//     ["mk-aj",16],
//     ["mk-sl",37],
//     ["mk-ss",24],
//     ["mk-nа",25],
//     ["mk-ng",30],
//     ["mk-ru",42],
//     ["mk-su",11],
//     ["mk-tr",15],
//     ["mk-et",35],
//     ["mk-ce",59],
//     ["mk-cz",16],
//     ["mk-ci",27],
//     ["mk-ca",16],
//     ["mk-ch",29],
//     ["mk-cs",17],
//     ["mk-st",44],
//     ["mk-so",16],
//     ["mk-ug",30],
//     ["mk-gs",56],
//     ];
//  let   data2=[["mk-ad",4],
// ["mk-aj",18],
// ["mk-ar",11],
// ["mk-av",45],
// ["mk-bg",67],
// ["mk-br",4],
// ["mk-bs",3],
// ["mk-bu",30],
// ["mk-bn",6],
// ["mk-ca",7],
// ["mk-ce",73],
// ["mk-ch",4],
// ["mk-ci",35],
// ["mk-cs",17],
// ["mk-cz",1],
// ["mk-db",30],
// ["mk-de",10],
// ["mk-di",18],
// ["mk-dl",54],
// ["mk-dm",37],
// ["mk-dr",46],
// ["mk-et",6],
// ["mk-gb",41],
// ["mk-gp",45],
// ["mk-gr",3],
// ["mk-gs",54],
// ["mk-gt",1],
// ["mk-gv",49],
// ["mk-il",9],
// ["mk-jg",3],
// ["mk-kb",30],
// ["mk-kg",38],
// ["mk-kh",7],
// ["mk-kn",33],
// ["mk-ks",34],
// ["mk-kx",53],
// ["mk-ky",35],
// ["mk-kz",41],
// ["mk-li",10],
// ["mk-lo",17],
// ["mk-md",33],
// ["mk-mg",3],
// ["mk-mk",37],
// ["mk-mr",13],
// ["mk-nа",33],
// ["mk-ng",40],
// ["mk-ni",41],
// ["mk-ns",37],
// ["mk-nv",34],
// ["mk-od",36],
// ["mk-os",48],
// ["mk-pe",22],
// ["mk-ph",48],
// ["mk-pn",18],
// ["mk-pp",36],
// ["mk-pt",43],
// ["mk-re",39],
// ["mk-rm",34],
// ["mk-rn",17],
// ["mk-ru",48],
// ["mk-rv",9],
// ["mk-sd",37],
// ["mk-sl",47],
// ["mk-so",15],
// ["mk-ss",16],
// ["mk-st",56],
// ["mk-su",3],
// ["mk-tl",45],
// ["mk-tr",19],
// ["mk-ug",36],
// ["mk-um",30],
// ["mk-va",37],
// ["mk-vd",38],
// ["mk-ve",37],
// ["mk-vh",17],
// ["mk-vj",4],
// ["mk-vl",3],
// ["mk-vv",7],
// ["mk-ze",17],
// ["mk-zk",3],
// ["mk-zr",5]]
// console.log("-------------------")
// console.log(data1.length)
// console.log(data2.length)
// // data1 = data1.sort((a,b) => {
// //     let first = a[0] as string
// //     let second = b[0] as string
// //     return first.localeCompare(second)
// // })
// console.log(data1)
// console.log("-------------------")
// let resultNiza = []
// for (let d1 of data1){
//     let found = false
//     let number = -1
//     for (let d2 of data2){
//         if (d1[0]==d2[0]){
//             found = true
//             let tempNumber = d2[1] as number
//             number = tempNumber
//             // console.log("D1 " + d1 + " D2 "+d2)
//         }
//     }
//     // if (!found){
//     //     console.log(d1)
//     // }
//     resultNiza.push([d1[0],number])
// }
// console.log(resultNiza)
