function convertMoney() {
    const amount = parseFloat(document.getElementById("amount").value);
    const Currency1 = document.getElementById("currency1").value.toUpperCase();
    const Currency2 = document.getElementById("currency2").value.toUpperCase();

    

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.90, THB: 34.02},
        EUR: { USD: 1.111111111111111, EUR: 1, THB: 37.69},
        THB: { USD: 0.029393, EUR: 0.0265322366675511, THB: 1},
        
    };

    if (Currency1 === Currency2) {
        document.getElementById("result").innerText = "กรุณาเลือกสกุลเงินที่แตกต่างกัน";
        return;
    }

    const conversionRate = exchangeRates[Currency1][Currency2];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    document.getElementById("result").innerText = `${amount} ${Currency1} = ${convertedAmount} ${Currency2}`;
}

function metricLenghth() {
    const amountLength = parseFloat(document.getElementById("amountLength").value);
    const Length1 = document.getElementById("Length1").value;
    const Length2 = document.getElementById("Length2").value;

    const convertLength = {
        cm: { cm: 1, m: 0.01, Km: 0.00001},
        m: { cm: 100, m: 1, Km: 0.001},
        Km: { cm: 100000, m: 1000, Km: 1}
        
    };

    if (Length1 === Length2) {
        document.getElementById("result1").innerText = "กรุณาเลือกหน่วยที่แตกต่างกัน";
        return;
    }
    const metricConvertLenghth = convertLength[Length1][Length2];
    const metricConvertAmount = (amountLength * metricConvertLenghth).toFixed(10);

    document.getElementById("result1").innerText = `${amountLength} ${Length1} = ${metricConvertAmount} ${Length2}`;
}

function metricArea(){
    const amountArea = parseFloat(document.getElementById("amountArea").value);
    const Area1 = document.getElementById("Area1").value;
    const Area2 = document.getElementById("Area2").value;
    const convertArea = {
        cm2: {cm2: 1,m2: 0.0001,km2: 0.0000000001},
        m2: {cm2:10000 ,m2: 1,km2: 0.000001},
        km2: {cm2: 10000000000,m2: 1000000,km2: 1}
    }

    if (Area1 === Area2) {
        document.getElementById("result2").innerText = "กรุณาเลือกหน่วยที่แตกต่างกัน";
        return;
    }
    const metricConvertArea = convertArea[Area1][Area2];
    const ConvertAreaAmount = (amountArea * metricConvertArea).toFixed(10);
    document.getElementById("result2").innerText = `${amountArea} ${Area1} = ${ConvertAreaAmount} ${Area2}`;
}

function metricVolume(){
    const amountVolume = parseFloat(document.getElementById("amountVolume").value);
    const Volume1 = document.getElementById("Volume1").value;
    const Volume2 = document.getElementById("Volume2").value;
    const convertVolume = {
        cm3: {cm3: 1,m3: 0.000001,L: 0.001},
        m3: {cm3: 1000000,m3: 1,L: 1000},
        L: {cm3: 1000,m3: 0.001,L: 1}
    }

    if (Volume1 === Volume2) {
        document.getElementById("result3").innerText = "กรุณาเลือกหน่วยที่แตกต่างกัน";
        return;
    }
    const metricConvertVolume = convertVolume[Volume1][Volume2];
    const ConvertVolumeAmount = (amountVolume * metricConvertVolume).toFixed(10);
    document.getElementById("result3").innerText = `${amountVolume} ${Volume1} = ${ConvertVolumeAmount} ${Volume2}`;
}