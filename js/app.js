
{
    function century(year){
        // return Math.ceil( year / 100 )
        let rest = year % 100
        let whole = (year - rest) / 100
        return rest > 0 ? whole + 1 : whole
    }
    // console.log( century(2025) ); // 21
    // console.log( century(1441) ); // 15
    // console.log( century(2000) ); // 20
    // console.log( century(1990) ); // 20
}

{
    const strRepeat = (str, n) => {
        // return `${str} `.repeat(n)
        let result = ""
        for(let i = 0; i < n; i++){
            result += `${str} `
        }
        return result
    }
    // console.log( strRepeat("ona", 3) );
    // console.log( strRepeat("laylo", 2) );
}


