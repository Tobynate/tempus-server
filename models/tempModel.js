let date = new Date()
let currentHour = date.getHours()

let temperatureModel = {
	id: null,
	time: currentHour,
	temperature: null,
	currentTemp: null,
	weatherCondition: null,
}

module.exports = temperatureModel
