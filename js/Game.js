class Game{
  constructor(){
    
  }
  start(){
    form = new Form()
    form.display()
    player = new Player()
    player.getCount()
  }
  //collect gamestate value from db
  getState(){
    db.ref("gameState").on("value", data=>{
      gameState = data.val()
    })
  }
//write the gameState to the database
  updateState(count){
    db.ref("/").update({
      gameState: count
    })
  }

  play(){
    form.hide()
  }
}