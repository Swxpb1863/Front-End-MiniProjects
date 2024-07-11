const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const Name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bGFwdG9wJTIwbW9ja3VwfHwwfHx8fDE2MjY4MDMwNjg&ixlib=rb-1.2.1&q=80&w=1080" alt="Laptop">'

    title.innerHTML = 'Lorem ipsum dolor sit amet.'

    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, sed.'

    profile_img.innerHTML = '<img src="https:randomuser.me/api/portraits/women/45.jpg" alt="Man">'

    Name.innerHTML = 'Jessica Doe'

    date.innerHTML = 'Oct 08, 2020'

    animated_bg_texts.forEach(bg =>bg.classList.remove('animated-bg-text'))
    animated_bgs.forEach(bg =>bg.classList.remove('animated-bg'))
}
