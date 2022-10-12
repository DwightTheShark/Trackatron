
Array.from(document.querySelectorAll('.del-fb')).forEach((el)=>{
    el.addEventListener('click', deleteFBTracker)
})

Array.from(document.querySelectorAll('.del-tt')).forEach((el)=>{
    el.addEventListener('click', deleteTTTracker)
})

async function deleteTTTracker() {
    const trackerId = this.parentNode.dataset.id
    try{
        const response = await fetch('trackers/deleteTTTracker', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'TTTrackerId': trackerId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function deleteFBTracker() {
    const trackerId = this.parentNode.dataset.id
    try{
        const response = await fetch('trackers/deleteFBTracker', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'fbTrackerId': trackerId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


// const logoutbutton = document.getElementById('logoutbutton');
// button.addEventListener('click', function(e) {
//   console.log('button was clicked');
// });