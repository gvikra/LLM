
// Add Gemini API key here later
const askButton = document.getElementById("askBtn");
const result=document.getElementById("result");
const promtInput = document.getElementById("prompt");
// alert(result);
// alert(promtInput);

askButton.addEventListener("click",async function () {
    const promt=promtInput.value;
    const response=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
    {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "x-goog-api-key":API_KEY
        },
        body:JSON.stringify({
             contents:[
                {
                    parts:[
                        {
                            text:promt
                        }
                    ]
                }
             ]
        })
    }
);
 const data=await response.json();

 console.log(data.candidates[0].content.parts[0].text);

 result.innerText=data.candidates[0].content.parts[0].text;
})