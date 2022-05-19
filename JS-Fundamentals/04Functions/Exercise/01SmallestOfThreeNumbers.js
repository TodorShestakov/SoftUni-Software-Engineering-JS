function smallestOfThreeNumbers(n1, n2, n3) {
    let smallest = (n1, n2, n3) => Math.min(n1, n2, n3);
    console.log(smallest(n1, n2, n3));
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);