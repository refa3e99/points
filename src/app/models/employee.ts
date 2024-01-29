export class Employee {
    constructor(
        public name: string,
        public title: string,
        public points: Points = new Points()
    ) { }
}

export class Points {
    negativePoints = 0;
    positivePoints = 0;
}