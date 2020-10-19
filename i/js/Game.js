class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    Player.getPlayerInfo();
   //if(allPlayers!==undefined){
   //  var db = 130;
   //  for(var plr in allPlayers){
   //    db = db+20
   //    textSize(25)
   //    text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,db)
   //  }
    //}

  if(keyDown(DOWN_ARROW) && player.index!== null){
    player.distance = player.distance-2;
    player.update();
      }

  }
}
