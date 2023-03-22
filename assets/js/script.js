

function canNest(arr1, arr2)
{
    let arr1Min = arr1[0];      //min value in arr1
    let arr1Max = arr1[0];      //max value in arr1
    let arr2Min = arr2[0];      //min value in arr2
    let arr2Max = arr2[0];      //max value in arr2

    //finding min and max value in arr1
    for(let i=0; i<arr1.length; i++)
    {
        if(arr1[i] < arr1Min)
        {
            arr1Min = arr1[i];
        }
        if(arr1[i] > arr1Max)
        {
            arr1Max = arr1[i];
        }
    }

    //finding min and max value in arr2
    for(let i=0; i<arr2.length; i++)
    {
        if(arr2[i] < arr2Min)
        {
            arr2Min = arr2[i];
        }
        if(arr2[i] > arr2Max)
        {
            arr2Max = arr2[i];
        }
    }

    return (arr1Min > arr2Min && arr1Max < arr2Max);

}

let arr1 = [1, 5, 6, 4]
let arr2 = [-2, 7, 10]

if(canNest(arr1, arr2))
    console.log("true");
else
    console.log("false")