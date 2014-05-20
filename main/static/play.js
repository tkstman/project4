window.onload = function()
{
  document.body.style.marginTop = '20px';
  document.body.style.marginLeft = '100px';
  document.body.style.marginRight = '100px';
  document.body.style.backgroundImage ='url(http://toptravellists.net/wp-content/uploads/2012/05/Sunset-Dusk-Nature-Egypt-HD.jpg)';
  
  var bod = document.getElementById('bodi');
  bod.style.color='blue';
  bod.style.backgroundColor='white' ;
  bod.style.overflow='hidden';
  bod.style.width='408px';
  bod.style.marginLeft='30%';
  
  var player1name="";  
  var player2name="";
  
  var player1matches=0;
  var player2matches=0;
  var ply1cnt;
  var ply2cnt;
  
  var showwhosturn1 = document.createElement('span');
  var showwhosturn2 = document.createElement('span'); 
  showwhosturn1.innerHTML = 'Teran king';
  showwhosturn2.innerHTML ='TKSIS';
  
  showwhosturn1.style.position='absolute';
  showwhosturn1.style.marginLeft ='8%';
  showwhosturn1.style.marginTop ='-39%';
  
  showwhosturn2.style.position='absolute';
  showwhosturn2.style.marginLeft = '60%';
  showwhosturn2.style.marginTop ='-39%';
  
  var ply1span = document.createElement('span');
  var ply1span2 = document.createElement('span');
  ply1span.style.position='absolute';
  ply1span.style.marginLeft ='8%';
  ply1span.style.marginTop ='-43%';
  ply1span2.style.position='absolute';
  ply1span2.style.marginLeft ='19%';
  ply1span2.style.marginTop ='-43%';
  var ply1h1 = document.createElement('h2');
  var ply1h2 = document.createElement('h2');
  
  ply1h2.id = 'p1cntval';
  //ply1h2.innerHTML ='where';
  ply1h1.id = 'p1count';
  //ply1h1.innerHTML ='Lets test this';
  ply1span.appendChild(ply1h1);
  
  ply1span2.appendChild(ply1h2);
  document.body.appendChild(ply1span);
  document.body.appendChild(ply1span2);
  document.body.appendChild(showwhosturn1);
  document.body.appendChild(showwhosturn2);
  
  var ply2span = document.createElement('span');
  var ply2span2 = document.createElement('span');
  var ply2h1 = document.createElement('h2');
  var ply2h2 = document.createElement('h2');
  ply2span.style.position='absolute';
  ply2span.style.marginLeft = '60%';
  ply2span.style.marginTop ='-43%';
  ply2span2.style.position='absolute';
  ply2span2.style.marginLeft = '75%';
  ply2span2.style.marginTop ='-43%';
  
  
  ply2h2.id = 'p2cntval';
  //ply2h2.innerHTML ='there'
  
  ply2h1.id = 'p2count';
  //ply2h1.innerHTML ='Lets test this too'
  ply2span.appendChild(ply2h1);
  ply2span2.appendChild(ply2h2);
  
  document.body.appendChild(ply2span);
  document.body.appendChild(ply2span2);
  
  if(typeof(Storage)!=="undefined")
  {
      
  }
  else
  {
      alert('YOU WILL NOT BE ABLE TO SAVE YOUR GAME DATA!!');
  }
  
  
  
  var cards;
  var finaldeck = [];
  var cardcount=0;
  var whosturn = 1;
  var turnedcards=[];
  var savedTurnedcardsb;
  var countdiv = document.createElement('span');
  var clickedcard;
  var matches=0;
  countdiv.id='countdiv';
  countdiv.style.marginLeft = "25%";
       
  var butn = document.createElement('button');

  var audio1 = document.createElement('div');
  audio1.id = 'audio1';
  document.body.appendChild(audio1)
  
  var play1 = function(e)
  {    
    if(e===1)
    {
        $('#audio1').append('<embed id="embed_player" src="static/kiss.mp3" autostart="true" hidden="true"></embed>');
    }
    else if(e===2)
    {
         $('#audio1').append('<embed id="embed_player" src="static/battle018.mp3" autostart="true" hidden="true"></embed>');
    }
    else if(e===3)
    {
         $('#audio1').append('<embed id="embed_player" src="static/win.mp3" autostart="true" hidden="true"></embed>');
    }
  }
  
  
  var removeembed=function()
  {
      $('#embed_player').remove();
  }
  
   
    var clicktest = function()
    {
          cardcount = document.getElementById('countdiv').innerHTML;
       
        if(isNaN(parseInt(cardcount,10)))
        {    
            alert('it whent into this');
            cardcount = parseInt(1, 10);
        }
        else
        {
            cardcount = parseInt(cardcount, 10)+1;
            
        }
        
        ply1cnt = document.getElementById('p1count');
        ply2cnt = document.getElementById('p2count');
        
        document.getElementById('countdiv').innerHTML = cardcount;
    }
        /**
        * Randomize array element order in-place.
        * Using Fisher-Yates shuffle algorithm.
        */
        function shuffleArray(array) 
        {
            for (var i = array.length - 1; i > 0; i--) 
            {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }  
  
  // function that builds a deck of cards
    var identifiers=[];
    var build = function()
    {
        var suit=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var colour= ['C','H','D','S'];
    
        //determines the total size of the deck 
        
        var total = suit.length*colour.length;
        var inc=0;
    
        for(var cnt=0;cnt<suit.length;cnt++)
        {
        
            for(var cnts=0; cnts<colour.length; cnts++)
            {
                identifiers[inc] = suit[cnt] + colour[cnts];
                inc++;
            }
        }

    };
    build();
    
    //determines the cards to be shown in the matching card game
    var choose = function()
    {
        var firstshuf = shuffleArray(identifiers);
        var temparr= [];
        
        for(var k= 0;k<8;k++)
        {
            temparr[k] = firstshuf[k];
        }
        finaldeck = shuffleArray(temparr.concat(temparr));
      
     
    };
    choose();
    
    var setup = function(b,f)
    {
        b.style.webkitTransform='rotatey(-180deg)';
        b.style.msTransform='rotatey(-180deg)';
        b.style.mozTransform='rotatey(-180deg)';
        b.style.oTransform='rotatey(-180deg)';
        b.style.webkitTransformStyle= 'preserve- 3 d';
        b.style.mozTransformStyle= 'preserve- 3 d';
        b.style.oTransformStyle= 'preserve- 3 d';
        b.style.msTransformStyle= 'preserve- 3 d';
  
        b.style.webkitBackfaceVisibility= 'hidden';
        b.style.mozBackfaceVisibility= 'hidden';
        b.style.oBackfaceVisibility= 'hidden';
        b.style.msBackfaceVisibility= 'hidden';
        
        b.style.webkitTransition= 'all ease-in-out 0.8s';
        b.style.mozTransition= 'all ease-in-out 0.8s';
        b.style.oTransition= 'all ease-in-out 0.8s';
        b.style.msTransition= 'all ease-in-out 0.8s';
        b.style.zIndex= '800';
        
        f.style.webkitTransformStyle= 'preserve- 3 d';
        f.style.mozTransformStyle= 'preserve- 3 d';
        f.style.oTransformStyle= 'preserve- 3 d';
        f.style.msTransformStyle= 'preserve- 3 d';
  
        f.style.webkitBackfaceVisibility= 'hidden';
        f.style.mozBackfaceVisibility= 'hidden';
        f.style.oBackfaceVisibility= 'hidden';
        f.style.msBackfaceVisibility= 'hidden';
  
        f.style.webkitTransition= 'all ease-in-out 0.8s';
        f.style.mozTransition= 'all ease-in-out 0.8s';
        f.style.oTransition= 'all ease-in-out 0.8s';
        f.style.msTransition= 'all ease-in-out 0.8s';
        f.style.zIndex= '900';

    }
    
      
    var turnfront = function(f,b)
    {
        //alert('it entered this section');
      
        f.style.webkitTransform= 'rotatey(180deg)';
        f.style.oTransform= 'rotatey(180deg)';
        f.style.mozTransform= 'rotatey(180deg)';
        f.style.msTransform= 'rotatey(180deg)';
      
        b.style.webkitTransform= 'rotatey(0deg)';
        b.style.oTransform= 'rotatey(0deg)';
        b.style.mozTransform= 'rotatey(0deg)';
        b.style.msTransform= 'rotatey(0deg)';
        
        
        b.parentNode.classList.add('turned');

    }

    
    // creates a card from scratch and displays the type required
    var makeCard = function(cardval)
    {
        //create outer section of card
        var club = "url('static/clubs.png')";
        var heart = "url('static/heart.jpg')";
        var diamond = "url('static/diamond.png')";
        var spade = "url('static/spade.jpg')";
        var shade;
        var pic;
        var number;
        
       // var cardval = '10C';
        
        if(cardval.length===2)
        {
            number = cardval.charAt(0);
            
            if(cardval.charAt(1)==='C')
            {
                pic = club;
                shade ='black';
            }
            else if(cardval.charAt(1)==='H')
            {
                pic = heart;
                shade ='red';
            }
            else if(cardval.charAt(1)==='S')
            {
                pic = spade;
                shade ='black';
            }
            else if(cardval.charAt(1)==='D')
            {
                pic = diamond;
                shade ='red';
            }
        }
        else if(cardval.length===3)
        {
            if(cardval.charAt(2)==='C')
            {
                pic = club;
                shade ='black';
                number = 10;
            }
            else if(cardval.charAt(2)==='H')
            {
                pic = heart;
                shade ='red';
                number = 10;
            }
            else if(cardval.charAt(2)==='D')
            {
                pic = diamond;
                shade ='red';
                number = 10;
            }
            else if(cardval.charAt(2)==='S')
            {
                pic = spade;
                shade ='black';
                number = 10;
            }
        }
        
        var ele = document.createElement('div');
        ele.style.height = '130px';
        ele.style.width = '100px';
        ele.style.backgroundColor='black';
        ele.style.zIndex = '-1';
        
        // create cover for card(back)
        var cover = document.createElement('div');
        cover.style.height = '130px';
        cover.style.width = '100px';       
        cover.style.backgroundImage='url("static/chaos.jpg")';
        cover.style.backgroundSize='100px 130px';
        cover.style.float='left';
        cover.style.zIndex = '1';
        
        // create outer div for flipper
        var outerele = document.createElement('div');
        outerele.style.height = '130px';
        outerele.style.width = '100px';
        outerele.style.float='left';    
    
        //create middle section of card
        var inele = document.createElement('div');
        inele.style.height = '110px';
        inele.style.width = '80px';
        inele.style.backgroundColor='white';
        inele.style.top = '10px';
        inele.style.border='10px';
        inele.style.position= 'relative';
  
        //create small top display of card suit
        var topdiv= document.createElement('div');
        topdiv.style.height = '20px';
        topdiv.style.width = '20px';
        topdiv.style.position ='absolute';
        topdiv.style.backgroundImage=pic;
        topdiv.style.margin="4.5%";
        topdiv.style.backgroundSize = '20px 20px';
        
        //create centre div to display suit
        var centrdiv= document.createElement('div');
        centrdiv.style.height = '40px';
        centrdiv.style.width = '40px';
        centrdiv.style.position ='absolute';
        centrdiv.style.backgroundImage=pic;
        centrdiv.style.backgroundColor = 'white';
        
        //display the value on the card on bottom
        var lowdivpara= document.createElement('p');
        lowdivpara.innerHTML = number;
        lowdivpara.style.fontSize = '40px';
        lowdivpara.style.position = 'absolute';
        lowdivpara.style.top='28%';
        lowdivpara.style.color=shade;
        inele.appendChild(lowdivpara);
        
        //display number in top
        var topdivpara= document.createElement('p');
        topdivpara.innerHTML = number;
        topdivpara.style.fontSize = '40px';
        topdivpara.style.position = 'absolute';
        topdivpara.style.right='0%';
        topdivpara.style.bottom='27%';
        topdivpara.style.color=shade;
        inele.appendChild(topdivpara);
        
        centrdiv.style.margin="25%";
        centrdiv.style.marginTop="35%";
        centrdiv.style.backgroundSize = '40px 40px';
        
        var botdiv= document.createElement('div');
        botdiv.style.height = '20px';
        botdiv.style.width = '20px';
        botdiv.style.position ='absolute';
        botdiv.style.backgroundImage=pic;
        botdiv.style.marginTop="105%";
        botdiv.style.marginLeft="70%";
        botdiv.style.backgroundSize = '20px 20px';
        
    
    
        //add small top display to card    
        inele.appendChild(topdiv); 
        inele.appendChild(botdiv);
        inele.appendChild(centrdiv);
        inele.style.marginLeft='10px';
   
  
        ele.appendChild(inele);
        ele.style.marginBottom='2px';
        ele.style.marginRight='2px';
        ele.style.position='absolute'; 
               
        
        ele.className='flip-back';
        cover.className='flip-front';
      
        setup(ele, cover);
      
        outerele.className='flipper';
        
        outerele.appendChild(cover);
        outerele.appendChild(ele);
        
        
        outerele.style.float = 'left';
        outerele.style.marginRight='2px';
        outerele.style.marginBottom='2px';
        
        ele.setAttribute('data-name',cardval);

        bod.appendChild(outerele);
    };    
    
    var yourturn = function()
    {
        if(whosturn ===1)
        {
          showwhosturn1.innerHTML = 'YOUR TURN';
          showwhosturn2.innerHTML = '';
        }
        else
        {
          showwhosturn2.innerHTML = 'YOUR TURN';
          showwhosturn1.innerHTML = '';
        }
    }
    
    
    if(localStorage.getItem('savedGameb') )//|| finaldeck)
    {
        var savedDeck = JSON.parse(localStorage.getItem('savedGameb'));
        savedTurnedcardsb = JSON.parse(localStorage.getItem('turnedcardsb'));

        whosturn = JSON.parse(localStorage.getItem('whosturn'));
       // yourturn();s
        
        cardcount=JSON.parse(localStorage.getItem('triesb'));
        matches=JSON.parse(localStorage.getItem('matchesb'));
      
        player1matches=JSON.parse(localStorage.getItem('player1matchesb'));
        player2matches=JSON.parse(localStorage.getItem('player2matchesb'));
        player1name=JSON.parse(localStorage.getItem('player1nameb'));
        player2name=JSON.parse(localStorage.getItem('player2nameb'));
        finaldeck = savedDeck.deck;
    }
  
  
    //place all cards for game on screen
    var displayGame= function()
    {
        for(var j = 0; j<finaldeck.length; j++)
        {
           makeCard(finaldeck[j]);
        }
    };
    
    displayGame();
    yourturn();
  
  //Get the name of the players
  var getPlayerNames=function()
  {
     player1name = window.prompt("Player 1 Enter Your Name!:");  
     player2name = window.prompt("Player 2 Enter Your Name!:");
      
      if(player1name.length <1 ||player2name.length <1)
      {
          getPlayerNames();
      }
  }
  
      if(player1name.length <1 ||player2name.length <1)
      {
          getPlayerNames();
      }
  
  ply1h1.innerHTML = player1name;
  ply2h1.innerHTML = player2name;
  
  //turns the saved card matches over
    var flipsavedcards = function()
    {
      
        if (savedTurnedcardsb)
        {
            var listofcards = document.querySelectorAll('.flipper');
            for(var i = 0; i<savedTurnedcardsb.length;i++)
            {
                for(var u = 0; u<listofcards.length; u++)
                {
                    if(savedTurnedcardsb[i] === listofcards[u].childNodes[1].getAttribute('data-name'))
                    {
                        turnfront(listofcards[u].childNodes[0],listofcards[u].childNodes[1]);
                    }
                }
            }
        }
      ply1h2.innerHTML = player1matches;
      ply2h2.innerHTML = player2matches;
    };
    flipsavedcards();
    
    var state = 0;
    var match = [];
    var nodules = [];

    var turnback = function(e)
    {
      window.setTimeout(function(b){
        e.childNodes[0].style.webkitTransform ='rotatey(0deg)';
        e.childNodes[1].style.webkitTransform ='rotatey(-180deg)';
                                  },1200)
    };   
    
    var playersmatchcount = function()
    {
      if(whosturn%2===1)
        {      
            player1matches++;   
            ply1h2.innerHTML = player1matches;
        }
        else
        {
            player2matches++
            ply2h2.innerHTML = player2matches;
        }
    };
  
    var showWinner = function()
    {
        if(player1matches>player2matches)
        {
              alert(player1name +" YOU WON!");
        }
        else if(player1matches<player2matches)
        {
              alert(player2name +" YOU WON!");
        }
        else
        {
              alert("IT WAS A DRAW!");
        }
    }
    
    
  
    $('.flipper').on('click', function (e) {
        removeembed();      
          
      if(this.classList.contains('turned'))
        {} 
      else{
        play1(1);
        turnfront(this.childNodes[0],this.childNodes[1]);
        
        var code = this.childNodes[1].getAttribute('data-name');
        var nodule = this;
        
        if(state===0 || state===1)
        {
            nodules[state] = nodule;
            match[state] = code;
          
            state++;
            if(match.length===2)
            {

                if(match[0]==match[1])
                {
                    turnedcards=match.concat(turnedcards);  

                    match=[];
                    play1(2);
                    matches++;
                    
                    playersmatchcount();
                   

                    if(matches===8)
                    {
                        play1(3);
                        showWinner();
                    }

                }
                else
                {                
                    
                    if(whosturn === 1)
                    {
                        whosturn=2;
                        yourturn();
                    }
                    else
                    {
                        whosturn=1;
                        yourturn();
                    }
                  
                    for(var h=0; h<nodules.length; h++)
                    {
                      
                        turnback(nodules[h]);                      
                        nodules[h].classList.remove('turned');
                    }
                    nodules=[];
                    match=[];
                }

              clicktest();
            }
            
            if(state >1)
            {
                state = 0;
            }
        }
      }
      
      
    });
    
    
    
    var savegame= function()
    {
      
          localStorage.setItem('player1nameb', JSON.stringify(player1name));
          localStorage.setItem('player2nameb', JSON.stringify(player2name));
          localStorage.setItem('player1matchesb', JSON.stringify(player1matches));
          localStorage.setItem('player2matchesb', JSON.stringify(player2matches));
          localStorage.setItem('savedGameb', JSON.stringify(saveddeck));
          
          localStorage.setItem('turnedcardsb', JSON.stringify(turnedcards));
          localStorage.setItem('triesb', JSON.stringify(cardcount));
          localStorage.setItem('matchesb',JSON.stringify(matches));
          localStorage.setItem('whosturn',JSON.stringify(whosturn));
          
          alert('GAME SAVED');
      
    };
  
        
    butn.innerHTML = 'Save Game';
    butn.addEventListener('DOMActivate',savegame,false);
  
    var saveddeck = 
    { 
      'deck': finaldeck         
    };
    
        
    var assigntries=function()
    {
        document.getElementById('countdiv').innerHTML = cardcount;
    };
  
    var newGame=function()
    {
        localStorage.clear();
        location.reload();
    };
  
    var newgamebutn = document.createElement('button');
    newgamebutn.id ='newgame';
    newgamebutn.style.marginLeft = "25%";
    newgamebutn.innerHTML='New Game';
    newgamebutn.addEventListener('DOMActivate',newGame,false);
    
  
    var buttondiv = document.createElement('div');
    buttondiv.id = 'myDiv';
    buttondiv.appendChild(butn);
    buttondiv.appendChild(countdiv);
    buttondiv.appendChild(newgamebutn);
    setTimeout(assigntries, 2000);
    bod.appendChild(buttondiv);
    
};

