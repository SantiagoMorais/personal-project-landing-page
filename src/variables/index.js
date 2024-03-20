import lifting from '../assets/lifting.jpg'
import pushUp from '../assets/push-up.jpg'
import running from '../assets/running.jpg'
import stretching from '../assets/stretching.jpg'
import treadmill from '../assets/treadmill.jpg'
import yoga from '../assets/yoga.jpg'

import trainer1 from '../assets/trainer-1.jpg'
import trainer2 from '../assets/trainer-2.jpg'
import trainer3 from '../assets/trainer-3.jpg'

const programs = [
    { title: "Workout at Home", classesNumber: 15},
    { title: "Stay Strong and Fit", classesNumber: 48},
    { title: "High Intensity", classesNumber: 25},
    { title: "Simple Workout", classesNumber: 35},
    { title: "Burn Calories", classesNumber: 35},
];

const exercices = [
    { src: treadmill, alt: "treadmill", title: "Treadmill" },
    { src: stretching, alt: "stretching", title: "Stretching" },
    { src: yoga, alt: "yoga", title: "Yoga" },
    { src: running, alt: "running", title: "Running" },
    { src: lifting, alt: "lifting", title: "Lifting" },
    { src: pushUp, alt: "push up", title: "Push Up" }
]

const trainers = [
    {src: trainer1, name: "Jonathan Wise"},
    {src: trainer2, name: "Michael Roberts"},
    {src: trainer3, name: "Karen Summer"}
]

export { programs, exercices, trainers }