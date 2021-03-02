let menuItem = {
    "id": "speak",
    "title": "Speak Louder",
    "contexts": ["selection"]
};

//usar a chrome API add funcionalidades de contextMenu
chrome.contextMenus.create(menuItem);

//ouvir quando que o usuário clicou
chrome.contextMenus.onClicked.addListener(function(clickData){
    //verificar se o usuário escolheu o id da extensão e se selecionou algo na página
    if(clickData.menuItemId == "speak" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText, {'rate': 0.7 , 'lang': 'en-US'});
    }
});