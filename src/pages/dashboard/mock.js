export default {
    'stress': {
        title: 'STRESS MONITORING',
        chartType: 'Line',
        chartTitle: 'Weekly Stress Level',
        chartCurrentValue: 'Current stress: 4',
        yesterdayPercentage: -33.33,
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [[24, 20, 16, 11, 6, 6, 4]]
        },
        recommend: {
            header: 'Recommended solution',
            text: 'Modern life is so busy, and sometimes we just need to slow down and chill out.' 
        },
        stats: {
            header: 'Weekly Statistics',
            text: '<b>Max Stress: 14 <br/> Min Stress: 2</b>' 
        }
    },
    'steps': {
        title: 'STEPS MONITORING',
        chartType: 'Bar',
        chartTitle: 'Weekly Steps Progress',
        chartCurrentValue: "Today's steps: 5",
        yesterdayPercentage: 50,
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [[10, 10, 10, 11, 6, 6, 9]]
        },
        recommend: {
            header: 'Recommended solution',
            text: 'Look for walking paths, greenways, and pedestrian streets to enjoy.'
        },
        stats: {
            header: 'Weekly Statistics',
            text: '<b>Max Steps: 11 <br/> Min Steps: 6</b>'
        }
    },
    'calories': {
        title: 'CALORIES MONITORING',
        chartType: 'Line',
        chartTitle: 'Weekly calories track',
        chartCurrentValue: "Today's calories: 90",
        yesterdayPercentage: 42.85,
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [[100, 120, 110, 113, 63, 63, 90]]
        },
        recommend: {
            header: 'Recommended solution',
            text: 'Look for walking paths, greenways, and pedestrian streets to enjoy.'
        },
        stats: {
            header: 'Weekly Statistics',
            text: '<b>Max Calories: 120 <br/> Min Calories: 63</b>'
        }
    },
    'lifestyle': {
        title: 'LIFESTYLE SUGGESTIONS',    
        data: [
            {
                header: 'Eating habits',
                text: 'Eat a variety of vegetables, especially dark green, red, and orange vegetables (3 or more servings a day)'
            },
            {
                header: 'Exercise plans',
                text: 'Take the stairs instead of the elevator at work. Take the stairs instead of the elevator at work.'
            },
            {
                header: 'Meditation plans',
                text: 'Know Why You Want to Take Up Meditation. Know Why You Want to Take Up Meditation.'
            },
            {
                header: 'Sleeping habits',
                text: 'Set a consistent sleep schedule. Go to bed at the same time and wake up at the same time.'
            },
            {
                header: 'Work schedule',
                text: 'Stick to a routine. Stick to a routine. Stick to a routine. Stick to a routine. Stick to a routine.'
            },
            {
                header: 'Socializing',
                text: 'Step out and talk to a colleague. Step out and talk to a colleague. Step out and talk to a colleague.'
            }
        ]
    },
    'settings': {
        title: 'DARIOWATCH SETTINGS',
        data: [
            {
                title: 'STRESS MONITORING',
                checked: true
            },
            {
                title: 'CALORIES MONITORING',
                checked: false
            },
            {
                title: 'HEART RATE MONITORING',
                checked: false
            }
        ]

    }
}