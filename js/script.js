$(document).ready(function () {
  let result = $('.result-text');
  let playResult = '';
  let score = 0;
  let choiceContainer = $('.choice-circle');

  function clear(iconName) {
    if ($('#img-picked-bt').children().length == 0) {
      $('#img-picked-bt').append(`<img src="img/icon-${iconName}.svg">`);
    } else {
      $('#img-picked-bt').empty();
      $('#img-picked-bt').append(`<img src="img/icon-${iconName}.svg">`);
    }
  }

  function changeClass(className, element='img-picked-bt') {
    if(element == 'img-picked-bt') {
        $('#img-picked-bt').removeClass();
        $('#img-picked-bt').addClass(`${className}`);
    }else {
        $(`#${element}`).removeClass();
        $(`#${element}`).addClass(`${className}`);
    }
    
  }

  let afterChoice = (chosenElement) => {
    $('#choice').hide();
    $('#picked-id').show();
    $('#img-picked-bt').addClass(chosenElement);
    clear(chosenElement);
    changeClass(chosenElement);
    let oponent = getImage();
    changeClass(oponent.itemClass, 'img-house-bt');
    document.getElementById('img-house-bt').innerHTML = oponent.image;
  };

  let gameResult = (userChoice) => {
    let oponentChoice = $('#img-house-bt');
    if (userChoice == 'rock') {
      if ($(oponentChoice).hasClass('rock')) {
        playResult = 'DRAW';
        result.text(`${playResult}`);
        $('.play-again').addClass('play-again-flex');
          $('.play-button').removeClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      } else if ($(oponentChoice).hasClass('paper')) {
        score -= 1;
        playResult = 'YOU LOSE';
        result.text(`${playResult}`);
          $('.play-again').addClass('play-again-flex');
          $('.play-button').addClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      } else if ($(oponentChoice).hasClass('scissors')) {
        score += 1;
        playResult = 'YOU WIN';
        result.text(`${playResult}`);
        $('.play-again').addClass('play-again-flex');
          $('.play-button').removeClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      }
    } else if (userChoice == 'paper') {
      if ($(oponentChoice).hasClass('rock')) {
        score += 1;
        playResult = 'YOU WIN';
        result.text(`${playResult}`);
          $('.play-again').addClass('play-again-flex');
          $('.play-button').removeClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      } else if ($(oponentChoice).hasClass('paper')) {
        playResult = 'DRAW';
        result.text(`${playResult}`);
          $('.play-again').addClass('play-again-flex');
          $('.play-button').removeClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      } else if ($(oponentChoice).hasClass('scissors')) {
        score -= 1;
        playResult = 'YOU LOSE';
        result.text(`${playResult}`);
          $('.play-again').addClass('play-again-flex');
          $('.play-button').addClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      }
    } else if (userChoice == 'scissors') {
      if ($(oponentChoice).hasClass('rock')) {
        score -= 1;
        playResult = 'YOU LOSE';
        result.text(`${playResult}`);
          $('.play-again').addClass('play-again-flex');
          $('.play-button').addClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      } else if ($(oponentChoice).hasClass('paper')) {
        score += 1;
        playResult = 'YOU WIN';
        result.text(`${playResult}`);
          $('.play-again').addClass('play-again-flex');
          $('.play-button').removeClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      } else if ($(oponentChoice).hasClass('scissors')) {
        playResult = 'DRAW';
        result.text(`${playResult}`);
          $('.play-again').addClass('play-again-flex');
          $('.play-button').removeClass('play-button-lose');
        $('.score-wrapper').text(`${+score}`);
      }
    }
  };

  choiceContainer.click((e) => {
    let clickTarget = e.target;
    if ($(clickTarget).hasClass('paper')) {
      afterChoice('paper');
      gameResult('paper');
    } else if ($(clickTarget).hasClass('rock')) {
      afterChoice('rock');
      gameResult('rock');
    } else if ($(clickTarget).hasClass('scissors')) {
      afterChoice('scissors');
      gameResult('scissors');
    }
  });
  $('#show-rules').click(function () {
    $('#rule').show();
  });

  $('#close-modal').click(function () {
    $('#rule').hide();
  });

  $('.play-again').click(function () {
    $('#picked-id').hide();
    $('#choice').show();
  });

  function getImage() {
    const random = Math.floor(Math.random() * 3);
    let itemClass = '';
    switch (random) {
      case 0:
        $('#img-house-bt').addClass('scissors');
        itemClass = 'scissors';
        break;
      case 1:
        $('#img-house-bt').addClass('paper');
        itemClass = 'paper';
        break;
      case 2:
        $('#img-house-bt').addClass('rock');
        itemClass = 'rock';
        break;
      default:
        break;
    }
    return {
      itemClass,
      image: `<img src="img/${random}.svg"/>`,
    };
  }
});
