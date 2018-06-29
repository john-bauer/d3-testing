d3.selectAll('p')
    .data([4, 8, 15, 16, 23, 42])
    .enter().append('p')
    .text(function(d){
        return 'Im number' + d + '!'
    })