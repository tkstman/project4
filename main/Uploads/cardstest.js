window.onload = function()
{
    
  var bod = document.getElementById('bodi');
  bod.style.color='blue';
  bod.style.backgroundColor='white' ;
  //bod.style.display='grid';
  bod.style.overflow='hidden';
  bod.style.width='450px';
  
  var cards;
  var finaldeck = [];
    
    var testfun = function(event)
    {
        alert(event.target);
        alert('it entered the function');
    };
    
    function myFunction(e)
    { 
        //alert(e.target);
        var check = e.target;
    alert(check);
    alert('it called the fucntion in the javascript file');
check.classList.add('mychange');
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
        
        alert(finaldeck);
    };
    choose();      
        

    
    // creates a card from scratch and displays the type required
    var makeCard = function(cardval)
    {
        //create outer section of card
        var club = "url('clubs.png')";
        var heart = "url('heart.jpg')";
        var diamond = "url('diamond.png')";
        var spade = "url('spade.jpg')";
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
        ele.style.float='left';
       // ele.style.zIndex = '-1';
        
        // create cover for card(back)
        var cover = document.createElement('div');
        cover.style.height = '130px';
        cover.style.width = '100px';
        cover.style.backgroundImage='url("chaos.jpg")';

        //cover.style.backgroundColor='red';
        cover.style.float='left';
        cover.style.zIndex = '1';
        
        // create outer div for flipper
        var outerele = document.createElement('div');
        outerele.style.height = '130px';
        outerele.style.width = '100px';
        //outerele.style.backgroundColor='black';
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
        //ele.addEventListener('click', testfunct(window.event), false);
        ele.style.float='left';
        //ele.onclick='testfun(event)';
        
        ele.className='flip-back';
        cover.className='flip-front';
        
        outerele.className='flipper';
        
        outerele.appendChild(ele);
        outerele.appendChild(cover);
        outerele.style.marginRight='2px';
        outerele.style.marginBottom='2px';
        //ele.name=cardval;
        
        ele.setAttribute('data-name',cardval);

        bod.appendChild(outerele);
    };
  
    
    
    //place all cards for game on screen
    var displayGame= function()
    {
        for(var j = 0; j<finaldeck.length; j++)
        {
           makeCard(finaldeck[j]);
        }
    };
    
    displayGame();
    
    var state = 0;
    var match = [];
    var nodules = [];
    
    $('.flip-front').on('click', function (e) {
        
        alert(this.classList);
        alert(this.parentNode.childNodes[0].classList);
        alert(this.parentNode.childNodes[1].classList);
        this.parentNode.childNodes[1].classList.add('front');
        this.parentNode.childNodes[0].classList.add('back');
        alert(this.parentNode.childNodes[0].getAttribute('data-name'));
        var code = this.parentNode.childNodes[0].getAttribute('data-name');
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
                    alert('they matched');
                    match=[];
                }
                else
                {
                    alert('they did not match');
                   
                    
                    for(var h=0; h<nodules.length; h++)
                    {
                        
                        nodules[h].parentNode.childNodes[1].classList.remove('front');
                        nodules[h].parentNode.childNodes[0].classList.remove('back');
                    }
                    nodules=[];
                    match=[];
                }
            }
            
            if(state >1)
            {
                alert(nodules);
                state = 0;
            }
        }
        
    });
    
    var player = document.createElement('textarea');
    player.rows='1';
    player.cols='15';
    
    var mytest = function()
    {
        alert('This is now active');
    };
    
    var butn = document.createElement('button');
    butn.innerHTML = 'Save Game';
    butn.addEventListener('DOMActivate',mytest,false);
    
    bod.appendChild(butn);
    

};
