const links=document.querySelectorAll('a[href^="#"]')
links.forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault()
  const t=document.querySelector(a.getAttribute('href'))
  window.scrollTo({top:t.offsetTop-20,behavior:'smooth'})
}))

const canvas=document.getElementById('particles')
const ctx=canvas.getContext('2d')
let w=canvas.width=innerWidth
let h=canvas.height=innerHeight
const particles=[]
const count=Math.round((w*h)/70000)

for(let i=0;i<count;i++){
  particles.push({
    x:Math.random()*w,
    y:Math.random()*h,
    r:1+Math.random()*2.5,
    vx:(Math.random()-0.5)*0.3,
    vy:(Math.random()-0.5)*0.3,
    alpha:0.35+Math.random()*0.45
  })
}

function resize(){
  w=canvas.width=innerWidth
  h=canvas.height=innerHeight
}
addEventListener('resize',resize)

function draw(){
  ctx.clearRect(0,0,w,h)
  particles.forEach(p=>{
    p.x+=p.vx
    p.y+=p.vy

    if(p.x< -10)p.x=w+10
    if(p.x> w+10)p.x=-10
    if(p.y< -10)p.y=h+10
    if(p.y> h+10)p.y=-10

    ctx.beginPath()
    ctx.fillStyle=`rgba(110,231,255,${p.alpha})`
    ctx.shadowBlur=12
    ctx.shadowColor='rgba(107,77,230,0.3)'
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
    ctx.fill()
  })
  requestAnimationFrame(draw)
}
draw()