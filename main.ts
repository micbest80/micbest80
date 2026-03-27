datalogger.setColumnTitles(
"light",
"temperature",
"direction"
)
loops.everyInterval(60000, function () {
    datalogger.log(
    datalogger.createCV("light", input.lightLevel()),
    datalogger.createCV("direction", input.compassHeading()),
    datalogger.createCV("temperature", input.temperature())
    )
})
