let result=document.getElementById('result')




const buttons=document.querySelectorAll('.colorButton')
const timesClicked={'red':0,'blue':0,'green':0}
buttons.forEach(button=> {
button.onclick=()=>{ result.innerText=`You clicked a ${button.value} button` 
  timesClicked[button.value]+=1
  button.innerText=timesClicked[button.value]
  result.style.color=`${button.value}`}
})

function clearScores(){
  timesClicked.red=0
  timesClicked.blue=0
  timesClicked.green=0
  buttons.forEach(button=>button.innerText='0')
}