const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    
function advanceDays(day, quantity) {
    if (days.includes(day)) {
        let dayIndex = days.indexOf(day)

        while (quantity > 0) {
            quantity--
            dayIndex++

            if (dayIndex > 6){
                dayIndex = 0
            }    
        } 

        return days[dayIndex]
    }
}

console.log(weekend_day('sunday', 8))