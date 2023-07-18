const socket = io();
let name;
let textarea = document.getElementById('textarea');
let messageArea = document.querySelector('.message__area');
do {
  name = prompt('Please enter your name: ');
} while (!name);
socket.emit('join', name);
textarea.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    sendMessage(e.target.value);
  }
});

function makeBold(ele) {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    if (selectedText !== '') {
      let newText = `<b>${selectedText}</b>`;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      textarea.setSelectionRange(start, start + newText.length);
      textarea.focus();
      ele.classList.toggle('active');
      textarea.classList.toggle('bold');
    }
  }
  
  function makeItalic(ele) {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    if (selectedText !== '') {
      let newText = `<i>${selectedText}</i>`;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      textarea.setSelectionRange(start, start + newText.length);
      textarea.focus();
      ele.classList.toggle('active');
      textarea.classList.toggle('italic');
    }
  }


  function makeStrike(ele) {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    if (selectedText !== '') {
      let newText = `<s>${selectedText}</s>`;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      textarea.setSelectionRange(start, start + newText.length);
      textarea.focus();
      ele.classList.toggle('active');
      textarea.classList.toggle('strike');
      
    }
  }

  function makeLink(ele) {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    if (selectedText !== '') {
      let newText = `<a href="#">${selectedText}</a>`;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      textarea.setSelectionRange(start, start + newText.length);
      textarea.focus();
      ele.classList.toggle('active');
      textarea.classList.toggle('link');
      
    }
  }

  function makeUl(ele) {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    if (selectedText !== '') {
      let newText = `<li>${selectedText}</li>`;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      textarea.setSelectionRange(start, start + newText.length);
      textarea.focus();
      ele.classList.toggle('active');
      textarea.classList.toggle('ul');
      
    }
  }

  function makeOl(ele) {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    if (selectedText !== '') {
      let newText = `<ol><li>${selectedText}</li></ol>`;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      textarea.setSelectionRange(start, start + newText.length);
      textarea.focus();
      ele.classList.toggle('active');
      textarea.classList.toggle('ol');
      
    }
  }

  function makeQuote(ele) {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    if (selectedText !== '') {
      let newText = `<q>${selectedText}</q>`;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      textarea.setSelectionRange(start, start + newText.length);
      textarea.focus();
      ele.classList.toggle('active');
      textarea.classList.toggle('block');
      
    }
  }

  function makeCode(ele) {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    if (selectedText !== '') {
      let newText = `<code>${selectedText}</code>`;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      textarea.setSelectionRange(start, start + newText.length);
      textarea.focus();
      ele.classList.toggle('active');
      textarea.classList.toggle('code');
      
    }
  }

  function makeUpload() {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
  
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          const imageData = reader.result;
          sendImage(imageData);
        };
        reader.readAsDataURL(file);
      }
    });
  
    fileInput.click();
  }

  document.getElementById('emoji-button').addEventListener('click', makeEmoji);

  function makeEmoji() {
    const emojiPicker = document.getElementById('emoji-picker');
    emojiPicker.classList.toggle('hidden');
  
    if (!emojiPicker.classList.contains('hidden')) {
      const emojiContainer = document.getElementById('emoji-container');
      emojiContainer.innerHTML = '';
  
      const emojis = ['😀', '😃', '😄', '😊', '😎', '😍', '🥳', '🤩', '😘', '😂', '🤣', '😉', '🙌', '👍', '👏', '🔥', '✨'];
      for (let emoji of emojis) {
        const emojiElement = document.createElement('span');
        emojiElement.classList.add('emoji');
        emojiElement.innerText = emoji;
        emojiElement.addEventListener('click', () => {
          insertEmoji(emoji);
        });
        emojiContainer.appendChild(emojiElement);
      }
    }
  }
  
  function insertEmoji(emoji) {
    const textarea = document.getElementById('textarea');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
  
    textarea.value = textarea.value.substring(0, startPos) + emoji + textarea.value.substring(endPos);
    textarea.selectionStart = startPos + emoji.length;
    textarea.selectionEnd = startPos + emoji.length;
    textarea.focus();
  }
  
  function sendEmoji(emoji) {
    let msg = {
      user: name,
      message: emoji
    };
  
    // Append
    appendMessage(msg, 'outgoing');
    scrollToBottom();
  
    // Send to server
    socket.emit('message', msg);
  }

  function mentionUser() {
    const textarea = document.getElementById('textarea');
    const mentionText = `@${name}`;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
  
    textarea.value = textarea.value.substring(0, startPos) + mentionText + textarea.value.substring(endPos);
    textarea.selectionStart = startPos + mentionText.length;
    textarea.selectionEnd = startPos + mentionText.length;
    textarea.focus();
  }
  
  function sendImage(imageData) {
    let msg = {
      user: name,
      message: `<img src="${imageData}" style="width: 200px; height: 200px; border-radius:50px 10px 10px 50px;">
      `
    };
  
    // Append
    appendMessage(msg, 'outgoing');
    scrollToBottom();
  
    // Send to server
    socket.emit('message', msg);
  }

function sendMessage() {
    let textarea = document.getElementById('textarea');
    let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd).trim();
  
    let isBold = document.queryCommandState('bold');
    let isItalic = document.queryCommandState('italic')
    let isStrike = document.queryCommandState('strike')
    let isLink = document.queryCommandState('link')
    let isUl = document.queryCommandState('ul')
    let isOl = document.queryCommandState('ol')
    let isBlock = document.queryCommandState('block')
    let isCode = document.queryCommandState('code')
  
    let msg = {
      user: name,
      message: ''
    };
  
    if (selectedText !== '') {
         if (isBold && isItalic && isStrike && isLink && isUl && isOl && isBlock && isCode){
          msg.message = `<b><i><s><a href="#"><li><ol><li><blockquote><code>${selectedText}</code></blockquote></li></ol></li></a></s></i></b>`;
        } else if (isBold) {
          msg.message = `<b>${selectedText}</b>`;
        } else if (isItalic) {
          msg.message = `<i>${selectedText}</i>`;
        } else if (isStrike){
            msg.message = `<s>${selectedText}</s>`;
        } else if(isLink)
        {
            msg.message = `<a href="#">${selectedText}</a>`
        } else if(isUl){
            msg.message = `<li>${selectedText}</li>`
        }else if(isOl){
            msg.message = `<ol><li>${selectedText}</li></ol>`
        }else if(isBlock){
          msg.message = `<blockquote>${selectedText}</blockquote>`
      } else if(isCode){
        msg.message = `<code>${selectedText}</code>`
      }
         else {
          msg.message = selectedText;
        }
      } else {
        msg.message = textarea.value.trim();
      }
  
    // Append
    appendMessage(msg, 'outgoing');
    textarea.value = '';
    scrollToBottom();
  
    // Send to server
    socket.emit('message', msg);
  }
  
  


function appendMessage(msg, type) {
  let mainDiv = document.createElement('div');
  let className = type;
  mainDiv.classList.add(className, 'message');
  
  let markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
  `;
  
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}

// Receive messages 
socket.on('message', (msg) => {
  appendMessage(msg, 'incoming');
  scrollToBottom();
});

function scrollToBottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}
