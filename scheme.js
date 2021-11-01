const redFirstInput    = document.querySelector("#redFirstInput")
const greenFirstInput  = document.querySelector("#greenFirstInput")
const orangeFirstInput = document.querySelector("#orangeFirstInput")
const blueFirstInput   = document.querySelector("#blueFirstInput")

const redSecondInput    = document.querySelector("#redSecondInput")
const greenSecondInput  = document.querySelector("#greenSecondInput")
const orangeSecondInput = document.querySelector("#orangeSecondInput")
const blueSecondInput   = document.querySelector("#blueSecondInput")

const redThirdInput    = document.querySelector("#redThirdInput")
const greenThirdInput  = document.querySelector("#greenThirdInput")
const orangeThirdInput = document.querySelector("#orangeThirdInput")
const blueThirdInput   = document.querySelector("#blueThirdInput")

const redFirstLine    = document.querySelector("#redFirstLine")
const greenFirstLine  = document.querySelector("#greenFirstLine")
const orangeFirstLine = document.querySelector("#orangeFirstLine")
const blueFirstLine   = document.querySelector("#blueFirstLine")

const redSecondLine    = document.querySelector("#redSecondLine")
const greenSecondLine  = document.querySelector("#greenSecondLine")
const orangeSecondLine = document.querySelector("#orangeSecondLine")
const blueSecondLine   = document.querySelector("#blueSecondLine")

const redThirdLine    = document.querySelector("#redThirdLine")
const greenThirdLine  = document.querySelector("#greenThirdLine")
const orangeThirdLine = document.querySelector("#orangeThirdLine")
const blueThirdLine   = document.querySelector("#blueThirdLine")

const firstDashFirst  = document.querySelector('#firstDashFirst')
const secondDashFirst = document.querySelector('#secondDashFirst')
const thirdDashFirst  = document.querySelector('#thirdDashFirst')
const fourthDashFirst = document.querySelector('#fourthDashFirst')

const firstDashSecond  = document.querySelector('#firstDashSecond')
const secondDashSecond = document.querySelector('#secondDashSecond')
const thirdDashSecond  = document.querySelector('#thirdDashSecond')
const fourthDashSecond = document.querySelector('#fourthDashSecond')

const firstDashThird  = document.querySelector('#firstDashThird')
const secondDashThird = document.querySelector('#secondDashThird')
const thirdDashThird  = document.querySelector('#thirdDashThird')
const fourthDashThird = document.querySelector('#fourthDashThird')

const plus  = document.querySelector('#plus')
const minus = document.querySelector('#minus')
let scale = 1 

const firstNumberFirst  = document.querySelector('#firstNumberFirst')
const secondNumberFirst = document.querySelector('#secondNumberFirst')
const thirdNumberFirst  = document.querySelector('#thirdNumberFirst')
const fourthNumberFirst = document.querySelector('#fourthNumberFirst')

const dashLinesFirst = [firstDashFirst, secondDashFirst, thirdDashFirst, fourthDashFirst]
const linesFirst = [{color: 'red',    height: 0},
                    {color: 'green',  height: 0},
                    {color: 'orange', height: 0},
                    {color: 'blue',   height: 0},]
let sortedLinesFirst = []

const dashLinesSecond = [firstDashSecond, secondDashSecond, thirdDashSecond, fourthDashSecond]
const linesSecond = [{color: 'red',    height: 0},
                     {color: 'green',  height: 0},
                     {color: 'orange', height: 0},
                     {color: 'blue',   height: 0},]
let sortedLinesSecond = []

const dashLinesThird = [firstDashThird, secondDashThird, thirdDashThird, fourthDashThird]
const linesThird = [{color: 'red',    height: 0},
                    {color: 'green',  height: 0},
                    {color: 'orange', height: 0},
                    {color: 'blue',   height: 0},]
let sortedLinesThird = []



const compare = (a, b) => {
  if ((a.height === 0) && (b.height !== 0)) return 1
  else return -1;
}

plus.addEventListener('click', () => {
  scale += 0.2
  wrapper.setAttribute('transform', `translate(0, 580) scale(1 ${scale}) translate(0, -580)`)
  reDrow(scale)
})

minus.addEventListener('click', () => {
  scale -= 0.2
  wrapper.setAttribute('transform', `translate(0, 580) scale(1 ${scale}) translate(0, -580)`)
  reDrow(scale)
})




const reDrow = (scale) => { 

  let currentYFirst  = 580
  let i = 0
  for (line of sortedLinesFirst) {
    switch (line.color) {
      case 'red':
        redFirstLine.setAttribute('y1', `${currentYFirst}`)
        currentYFirst -= line.height
        redFirstLine.setAttribute('y2', `${currentYFirst}`)
        dashLinesFirst[i].setAttribute('y1', `${currentYFirst}`);
        dashLinesFirst[i].setAttribute('y2', `${currentYFirst}`);
        i += 1 
        break;
      case 'green':
        greenFirstLine.setAttribute('y1', `${currentYFirst}`)
        currentYFirst -= line.height
        greenFirstLine.setAttribute('y2', `${currentYFirst}`)
        dashLinesFirst[i].setAttribute('y1', `${currentYFirst}`);
        dashLinesFirst[i].setAttribute('y2', `${currentYFirst}`);
        i += 1 
        break;
      case 'orange':
        orangeFirstLine.setAttribute('y1', `${currentYFirst}`)
        currentYFirst -= line.height
        orangeFirstLine.setAttribute('y2', `${currentYFirst}`)
        dashLinesFirst[i].setAttribute('y1', `${currentYFirst}`);
        dashLinesFirst[i].setAttribute('y2', `${currentYFirst}`);
        i += 1 
        break;
      case 'blue':
        blueFirstLine.setAttribute('y1', `${currentYFirst}`)
        currentYFirst -= line.height
        blueFirstLine.setAttribute('y2', `${currentYFirst}`)
        dashLinesFirst[i].setAttribute('y1', `${currentYFirst}`);
        dashLinesFirst[i].setAttribute('y2', `${currentYFirst}`);
        i += 1 
        break;            
    }
  }

  let currentYSecond  = 580
  let j = 0
  for (line of sortedLinesSecond) {
    switch (line.color) {
      case 'red':
        redSecondLine.setAttribute('y1', `${currentYSecond}`)
        currentYSecond -= line.height
        redSecondLine.setAttribute('y2', `${currentYSecond}`)
        dashLinesSecond[j].setAttribute('y1', `${currentYSecond}`);
        dashLinesSecond[j].setAttribute('y2', `${currentYSecond}`);
        j += 1 
        break;
      case 'green':
        greenSecondLine.setAttribute('y1', `${currentYSecond}`)
        currentYSecond -= line.height
        greenSecondLine.setAttribute('y2', `${currentYSecond}`)
        dashLinesSecond[j].setAttribute('y1', `${currentYSecond}`);
        dashLinesSecond[j].setAttribute('y2', `${currentYSecond}`);
        j += 1 
        break;
      case 'orange':
        orangeSecondLine.setAttribute('y1', `${currentYSecond}`)
        currentYSecond -= line.height
        orangeSecondLine.setAttribute('y2', `${currentYSecond}`)
        dashLinesSecond[j].setAttribute('y1', `${currentYSecond}`);
        dashLinesSecond[j].setAttribute('y2', `${currentYSecond}`);
        j += 1 
        break;
      case 'blue':
        blueSecondLine.setAttribute('y1', `${currentYSecond}`)
        currentYSecond -= line.height
        blueSecondLine.setAttribute('y2', `${currentYSecond}`)
        dashLinesSecond[j].setAttribute('y1', `${currentYSecond}`);
        dashLinesSecond[j].setAttribute('y2', `${currentYSecond}`);
        j += 1 
        break;            
    }
  }

  let currentYThird  = 580
  let z = 0
  for (line of sortedLinesThird) {
    switch (line.color) {
      case 'red':
        redThirdLine.setAttribute('y1', `${currentYThird}`)
        currentYThird -= line.height
        redThirdLine.setAttribute('y2', `${currentYThird}`)
        dashLinesThird[z].setAttribute('y1', `${currentYThird}`);
        dashLinesThird[z].setAttribute('y2', `${currentYThird}`);
        z += 1 
        break;
      case 'green':
        greenThirdLine.setAttribute('y1', `${currentYThird}`)
        currentYThird -= line.height
        greenThirdLine.setAttribute('y2', `${currentYThird}`)
        dashLinesThird[z].setAttribute('y1', `${currentYThird}`);
        dashLinesThird[z].setAttribute('y2', `${currentYThird}`);
        z += 1 
        break;
      case 'orange':
        orangeThirdLine.setAttribute('y1', `${currentYThird}`)
        currentYThird -= line.height
        orangeThirdLine.setAttribute('y2', `${currentYThird}`)
        dashLinesThird[z].setAttribute('y1', `${currentYThird}`);
        dashLinesThird[z].setAttribute('y2', `${currentYThird}`);
        z += 1 
        break;
      case 'blue':orangeHeight
        dashLinesThird[z].setAttribute('y1', `${currentYThird}`);
        dashLinesThird[z].setAttribute('y2', `${currentYThird}`);
        z += 1 
        break;            
    }
  }

      const firstYFirst  = 580 - linesFirst[0].height * scale 
      const secondYFirst = 580 - (linesFirst[1].height + linesFirst[0].height) * scale 
      const thirdYFirst  = 580 - (linesFirst[2].height + linesFirst[1].height + linesFirst[0].height) * scale
      const fourthYFirst = 580 - (linesFirst[3].height + linesFirst[2].height + linesFirst[1].height + linesFirst[0].height) * scale 
   
      firstNumberFirst.setAttribute('y', `${firstYFirst}`)     
      secondNumberFirst.setAttribute('y', `${secondYFirst}`)          
      thirdNumberFirst.setAttribute('y', `${thirdYFirst}`)        
      fourthNumberFirst.setAttribute('y', `${fourthYFirst}`)

      firstNumberFirst.textContent = (linesFirst[0].height > 0) ? linesFirst[0].height : ' ' ;
      secondNumberFirst.textContent = (linesFirst[1].height > 0) ? linesFirst[1].height + linesFirst[0].height : ' ' ;
      thirdNumberFirst.textContent = (linesFirst[2].height > 0) ? linesFirst[2].height + linesFirst[1].height + linesFirst[0].height : ' ' ;
      fourthNumberFirst.textContent = (linesFirst[3].height > 0) ? linesFirst[3].height + linesFirst[2].height + linesFirst[1].height + linesFirst[0].height : ' ' ;
 
  
      const firstYSecond  = 580 - linesSecond[0].height * scale 
      const secondYSecond = 580 - (linesSecond[1].height + linesSecond[0].height) * scale 
      const thirdYSecond  = 580 - (linesSecond[2].height + linesSecond[1].height + linesSecond[0].height) * scale
      const fourthYSecond = 580 - (linesSecond[3].height + linesSecond[2].height + linesSecond[1].height + linesSecond[0].height) * scale 
       
       firstNumberSecond.setAttribute('y', `${firstYSecond}`)     
      secondNumberSecond.setAttribute('y', `${secondYSecond}`)          
       thirdNumberSecond.setAttribute('y', `${thirdYSecond}`)        
      fourthNumberSecond.setAttribute('y', `${fourthYSecond}`)
  
       firstNumberSecond.textContent = (linesSecond[0].height > 0) ? linesSecond[0].height : ' ' ;
      secondNumberSecond.textContent = (linesSecond[1].height > 0) ? linesSecond[1].height + linesSecond[0].height : ' ' ;
       thirdNumberSecond.textContent = (linesSecond[2].height > 0) ? linesSecond[2].height + linesSecond[1].height + linesSecond[0].height : ' ' ;
      fourthNumberSecond.textContent = (linesSecond[3].height > 0) ? linesSecond[3].height + linesSecond[2].height + linesSecond[1].height + linesSecond[0].height : ' ' ;
      
      const firstYThird  = 580 - linesThird[0].height * scale 
      const secondYThird = 580 - (linesThird[1].height + linesThird[0].height) * scale 
      const thirdYThird  = 580 - (linesThird[2].height + linesThird[1].height + linesThird[0].height) * scale
      const fourthYThird = 580 - (linesThird[3].height + linesThird[2].height + linesThird[1].height + linesThird[0].height) * scale 
       
       firstNumberThird.setAttribute('y', `${firstYThird}`)     
      secondNumberThird.setAttribute('y', `${secondYThird}`)          
       thirdNumberThird.setAttribute('y', `${thirdYThird}`)        
      fourthNumberThird.setAttribute('y', `${fourthYThird}`)
  
       firstNumberThird.textContent = (linesThird[0].height > 0) ? linesThird[0].height : ' ' ;
      secondNumberThird.textContent = (linesThird[1].height > 0) ? linesThird[1].height + linesThird[0].height : ' ' ;
       thirdNumberThird.textContent = (linesThird[2].height > 0) ? linesThird[2].height + linesThird[1].height + linesThird[0].height : ' ' ;
      fourthNumberThird.textContent = (linesThird[3].height > 0) ? linesThird[3].height + linesThird[2].height + linesThird[1].height + linesThird[0].height : ' ' ;

}


  




redFirstInput.addEventListener('keyup', () => {
     const redHeight = +(redFirstInput.value)
              linesFirst.forEach( line => {
                if (line.color === 'red') {
                  line.height = redHeight 
                }
              })
              sortedLinesFirst = linesFirst.sort(compare)
              reDrow(scale)                            
})
greenFirstInput.addEventListener('keyup', () => {
              const greenHeight = +(greenFirstInput.value)
              linesFirst.forEach( line => {
                if (line.color === 'green') {
                  line.height = greenHeight 
                }
              })
             sortedLinesFirst = linesFirst.sort(compare)                
             reDrow(scale)
})
orangeFirstInput.addEventListener('keyup', () => {            
              const orangeHeight = +(orangeFirstInput.value)
              linesFirst.forEach( line => {
                if (line.color === 'orange') {
                  line.height = orangeHeight 
                }
              })
             sortedLinesFirst = linesFirst.sort(compare)                
             reDrow(scale)         
 })
blueFirstInput.addEventListener('keyup', () => {         
              const blueHeight = +(blueFirstInput.value)
              linesFirst.forEach( line => {
                if (line.color === 'blue') {
                  line.height = blueHeight 
                }
              })
             sortedLinesFirst = linesFirst.sort(compare)                
             reDrow(scale)             
 })


 


 redSecondInput.addEventListener('keyup', () => {
  const redHeight = +(redSecondInput.value)
           linesSecond.forEach( line => {
             if (line.color === 'red') {
               line.height = redHeight 
             }
           })
           sortedLinesSecond = linesSecond.sort(compare)
           reDrow(scale)                            
})
greenSecondInput.addEventListener('keyup', () => {
           const greenHeight = +(greenSecondInput.value)
           linesSecond.forEach( line => {
             if (line.color === 'green') {
               line.height = greenHeight 
             }
           })
          sortedLinesSecond = linesSecond.sort(compare)                
          reDrow(scale)
})
orangeSecondInput.addEventListener('keyup', () => {            
           const orangeHeight = +(orangeSecondInput.value)
           linesSecond.forEach( line => {
             if (line.color === 'orange') {
               line.height = orangeHeight 
             }
           })
          sortedLinesSecond = linesSecond.sort(compare)                
          reDrow(scale)         
})
blueSecondInput.addEventListener('keyup', () => {         
           const blueHeight = +(blueSecondInput.value)
           linesSecond.forEach( line => {
             if (line.color === 'blue') {
               line.height = blueHeight 
             }
           })
          sortedLinesSecond = linesSecond.sort(compare)                
          reDrow(scale)             
})


redThirdInput.addEventListener('keyup', () => {
  const redHeight = +(redThirdInput.value)
           linesThird.forEach( line => {
             if (line.color === 'red') {
               line.height = redHeight 
             }
           })
           sortedLinesThird = linesThird.sort(compare)
           reDrow(scale)                            
})
greenThirdInput.addEventListener('keyup', () => {
           const greenHeight = +(greenThirdInput.value)
           linesThird.forEach( line => {
             if (line.color === 'green') {
               line.height = greenHeight 
             }
           })
          sortedLinesThird = linesThird.sort(compare)                
          reDrow(scale)
})
orangeThirdInput.addEventListener('keyup', () => {            
           const orangeHeight = +(orangeThirdInput.value)
           linesThird.forEach( line => {
             if (line.color === 'orange') {
               line.height = orangeHeight 
             }
           })
          sortedLinesThird = linesThird.sort(compare)                
          reDrow(scale)         
})
blueThirdInput.addEventListener('keyup', () => {         
           const blueHeight = +(blueThirdInput.value)
           linesThird.forEach( line => {
             if (line.color === 'blue') {
               line.height = blueHeight 
             }
           })
          sortedLinesThird = linesThird.sort(compare)                
          reDrow(scale)             
})

// варианты создания пунктирных линий + чисел(масштабируемых) на линейке
// пока что для одного столбика
// создать в svg 4 линии и менять положение точек, в зависимости от height
// сложность в том, что при добвавлении других столбцов, этих линий станет 12, а это объёмный код
// в этом же сложность про вообще несколько столбцов, так как код объёмный
// target - minimum sizeCode(за счёт обобщений-абстрагирования),
// maximum readability(за счёт возможностей языка и его синтаксиса)
// есть вариант решения уменьшения codeSize за счёт изменения интерфейса(уменьшения инпутов)
// чтоб уменьшить количество пунктирных линий, можно глобально вынести вносимые высоты(обобщение), 

// пока что сделать бы хоть какой код , но чтобы работало, ратем оптимизация
// 1-й вариант с масштабированием через изменения viewbox и определением в %(от viewport) линий не получился,
// так как не смог решить проблему с масштабированием чисел на линейке(так как их нельзя определять через %)
// вариант другой : масштабирование производить через scale, применяя на часть svg элементов, соответственно
// не применяя scale на другую часть

//как считать положение чисел???
// линии, соответствующие числам, масштабируются 
// есть числа, не масштабируемые, значит надо как-то сделать положение координат от чисел + отмасштабировать
// ого
// в результате отмасштабировал линии без чисел, и высчитал положение для каждого числа с учётом масштабирования
// сначала хотел отмасштабировать числа с линиями и когда числа растягиваются, отмасштабировать обратно отдельно числа
// но этот путь сложнее(расчётов больше намного)