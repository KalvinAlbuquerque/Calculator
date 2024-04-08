var isPow = false

function clearInput()
{
    document.getElementById("operation").value = parseInt('0')
}

function calculate(type, value)
{   
    var inputValue = document.getElementById("operation").value
    var sinaisDeOperacao = ["+", "-", "*", "/", "^"]
    var inputValueLength = document.getElementById("operation").value.length
    

    if(type === 'action')
    {   
        if(value === '^')
        {
            isPow = true
        }

        if(value === 'clear')
        {
            document.getElementById("operation").value = ''
            document.getElementById("display-operation").value = ''
        }
        else if(value === "del")
        {
            if(inputValueLength > 0)
            {
                document.getElementById("operation").value = inputValue.slice(0,-1)
            }
        }
        else if(value === 'sqrt')
        {
            if(sinaisDeOperacao.includes(inputValue.charAt(inputValueLength -1)))
            {
                inputValue = inputValue.slice(0,-1)
            }
            document.getElementById("operation").value = Math.sqrt(inputValue)
        }
        else if(value === 'equal')
        {
            var result 
            if(isPow)
            {
                var exponent = document.getElementById("operation").value 
                result = document.getElementById("display-operation").value.slice(0,-1)
                result = Math.pow(result, exponent) 

                isPow = false

            }
            else
            {
                result = document.getElementById("display-operation").value
                result += document.getElementById("operation").value
    
                result = eval(result)
            }
            
            document.getElementById("display-operation").value = ''
            document.getElementById("operation").value = result
            
        }
        else if(sinaisDeOperacao.includes(value))
        {   
            /* Verificando se o primeiro caracter digitado é um sinal de operação e impedindo que mais de dois sinais de operações sejam digitados ao mesmo tempo */
            if( (document.getElementById("operation").value.length > 0) && (!sinaisDeOperacao.includes(inputValue.charAt(inputValueLength -1))) )
            {
                var value = document.getElementById("operation").value += value
                document.getElementById("display-operation").value = value
                document.getElementById("operation").value = ''
            }

        }

    }
    else if(type === 'number')
    {
        
        document.getElementById("operation").value += value
    }
    
}
