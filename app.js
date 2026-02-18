"use strict";
$(document).ready(function () {



    $(document).on('keypress', function (e) {
        if (e.witch == 13) {
            let url = `http://api.openweathermap.org/data/2.5/weather?${$("myWeather").val()}&APPID=09a44534d8c631e10c460787bcff465f`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feels").html(data.main.feels_like)
                $("#myWeather").val("")
                console.log(data)
                
            }
            myweather()
        }
    })

    $('#btn').click(function (e) {
        e.preventDefault()
        let url = `http://api.openweathermap.org/data/2.5/weather?${$("myWeather").val()}&APPID=09a44534d8c631e10c460787bcff465f`
        async function myweather() {
            let responce = await fetch(url)
            let data = await responce.json()
            $("#city").html(data.name)
            $("#temp").html(data.main.temp)
            $("#feels").html(data.main.feels_like)
            $("#myWeather").val("")
            console.log(data)
        }
        myweather()

    })






});