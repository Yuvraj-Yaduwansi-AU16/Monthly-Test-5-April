class Generate{
    static text = document.querySelector('.text')
    static author = document.querySelector('.author')
    static transferedData;
    static quote(){
        const randomNumber = Math.floor(Math.random()*1643);
        const displayData = Generate.transferedData[randomNumber];
        console.log(displayData);
        Generate.text.innerText = displayData.text;
        Generate.author.innerText = `~ ${displayData.author}`;
        
    }

    static async getText() {
        let data = await fetch('https://type.fit/api/quotes');
        let dataJson = await data.text();
        Generate.transferedData= JSON.parse(dataJson);
        Generate.quote();
    }
}

document.querySelector('.btn-lg').addEventListener('click',(e)=>{
    e.preventDefault();
    Generate.getText();
})

document.addEventListener('DOMContentLoaded',Generate.getText());