// nested loops

// m + n
// 10 + 10 = 20
// 10 * 10 = 100
for (var i = 0; i < 10; i++) { // 10 *
    for (var j = 0; j < 10; j++) { // 10
        console.log(i, j);
        if (i === 5) break; // inner most
    }
    console.log();
    if (i === 5) break;
}
