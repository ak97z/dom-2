
const a =jQuery('.test')
.addClass('red')
.find('.child')
.addClass('blue')
.end()
.addClass('green')
// .each(function (x,y) {
//     console.log(x,y)
// })
.find('.child')
// .each((div)=>console.log(div))
.end()
.children().print() 


console.log(a)//jQuery函数的结构 















