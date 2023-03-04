var commands = '19 20 + DUP + 60 + DUP + 12 +'

function process(stream) {

    let commandsArray = stream.split(' ')

    let stack = [ ]
    let topOfStack = - 1

    let value = 0
    let valueA = 0
    let valueB = 0

    for (const token of commandsArray) {

        if (token == 'POP') {
        
            if (topOfStack == -1) return - 1
           
            stack.pop()
            topOfStack --
        
        } else if (token == 'DUP') {
        
            if (topOfStack == -1) return - 1
        
            value = stack[topOfStack]
        
            topOfStack ++
            stack.push(value)
        
        } else if (token == '+') {
        
            if (topOfStack < 1) return - 1
        
            valueA = stack[topOfStack]
            valueB = stack[topOfStack - 1]
        
            if (valueA + valueB > 1048576 - 1) return - 1
        
            stack.pop()
            stack.pop()
            topOfStack --
            stack.push(valueA + valueB)
        
        } else if (token == '-') {
        
            if (topOfStack < 1) return - 1
        
            valueA = stack[topOfStack]
            valueB = stack[topOfStack - 1]
        
            if (valueA - valueB < 0) return - 1
        
            stack.pop()
            stack.pop()
            topOfStack --
            stack.push(valueA - valueB)
        
        } else {
        
            topOfStack ++
            stack.push(+token)

        }

    }

    console.log(commandsArray)
    console.log(stack)

    return stack[topOfStack]

}


var result = process(commands)

console.log(result)
