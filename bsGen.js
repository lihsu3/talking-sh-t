// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generatePassword function
function generatePassword(options) {
  // define things user might want
  const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }

  const phrase = ['很簡單','很容易','很快','很正常']

  // start generating
  let bs = ''
  let ph = sample(phrase)
  if (options.inlineRadioOptions === 'opt1')
    bs += '身為一個工程師' + sample(task.engineer) + ph + '吧！'

  if (options.inlineRadioOptions === 'opt2')
    bs += '身為一個設計師' + sample(task.designer) + ph + '吧！'

  if (options.inlineRadioOptions === 'opt3')
    bs += '身為一個創業家' + sample(task.entrepreneur) + ph + '吧！'

  // return the generated
  return bs
}

// export generatePassword function for other files to use
module.exports = generatePassword