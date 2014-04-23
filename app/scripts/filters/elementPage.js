webPracticeApp.filter('exactMatchFilter', function () {
    return function (input, menuName, elementType) {
        input = input || '';
        var keyName;
        var results = [];
        var groupedResult = {};
        elementType = elementType || "";
        //console.log("index: " + index);
        var dataLength = Object.keys(input).length
        for (i = 0; i < dataLength; i++) {
            keyName = input[Object.keys(input)[i]]
            // console.log(keyName);
            if (keyName.menu === menuName && keyName.type === elementType) {

                results.push(input[Object.keys(input)[i]]);

            }else if(keyName.menu === menuName && elementType === "" && (keyName.type != "OpenPage" || "ClosePage" || "CloseMenuPage" || "OpenMenuPage" )){

                results.push(input[Object.keys(input)[i]]);
            }
        }
       // var test = JSON.stringify(results)

       // console.log("Results: " + test);
        var l = 0;
        var length = results.length/2;
        for(var k = 0; k<length;k++){
            groupedResult[k] = {};

            groupedResult[k]["button" + l] = results[l];
            l++;
            if(results[l]){
            groupedResult[k]["button" + l] = results[l];
            l++;}else{
                groupedResult[k]["button" + l] = {};
            }


        }
       // var test2 = JSON.stringify(groupedResult);
       // console.log("groupedResult: " + test2)
        if(menuName === "AdvancedMenu") {
            return groupedResult;
        }else{
            return results;
        }
    };
})


