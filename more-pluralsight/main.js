var w = 300
var h = 100
var padding = 2
var dataset = [4, 8, 15, 16, 23, 42]
var svg = d3.select('body').append('svg').attr('width', w).attr('height', h)

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
        .attr('x', function(d, i){
            return i * (w/dataset.length)
        })
        .attr('y', function(d){
            return h - (d*2)
        })
        .attr('width', w / dataset.length - padding)
        .attr('height', function(d){
            return d*2
        })
        .attr('fill', function(d) {
            return 'rgb(' + '0,0,' + (d*10) + ')'
        })

