let NxtBtn = document.querySelectorAll(".btn a")[1]
let input = document.querySelector("input")
let errorMsg = document.querySelector(".error")
let label = document.querySelector("label")


var labelBefore = window.getComputedStyle(label, "::before");
let k = 0

function myFunction(){
  if(input.value == "")
   {
      
     label.style.setProperty("--labelBeforeColor","#4285f4")
     label.style.setProperty("--labelBeforeFontSize","12px")
     
     label.style.setProperty("--labelBeforeZindex","1")
     label.style.setProperty("--labelBeforeTop","-24px")
     input.style.borderColor="#4285f4"
     if (k > 0)
     {
       errorMsg.style.display = "flex"
       input.style.borderColor = "#EC3F3F"
       label.style.setProperty("--labelBeforeColor", "#EC3F3F")
       label.style.setProperty("--labelBeforeFontSize", "12px")
     
       label.style.setProperty("--labelBeforeZindex", "1")
       label.style.setProperty("--labelBeforeTop", "-24px")
     
     
     }
   }
   else{
     if(k <= 0)
     {
     label.style.setProperty("--labelBeforeColor","#4285f4")
     input.style.borderColor="#4285f4"
     }
     
   }
}

input.addEventListener("blur",()=>{
  if(input.value == "")
  {
    
    
    label.style.setProperty("--labelBeforeColor", "#878787")
    label.style.setProperty("--labelBeforeFontSize", "16px")
    
    label.style.setProperty("--labelBeforeZindex", "-1")
    label.style.setProperty("--labelBeforeTop", "1px")
    input.style.borderColor="#878787"
    if (k > 0)
    {
      errorMsg.style.display = "flex"
      input.style.borderColor = "#EC3F3F"
    
    }
    
  }
  else{
    label.style.setProperty("--labelBeforeColor", "#878787")
    input.style.borderColor="#878787"
    if(k > 0)
    {
      errorMsg.style.display = "flex"
      input.style.borderColor = "#EC3F3F"
      label.style.setProperty("--labelBeforeColor", "#EC3F3F")
      
    }
  }
})


NxtBtn.addEventListener("click",()=>{
  if(input.value == "")
  {
    k++;
    errorMsg.style.display="flex"
    input.focus();
    label.style.setProperty("--labelBeforeColor", "#EC3F3F")
    label.style.setProperty("--labelBeforeFontSize", "12px")
    
    label.style.setProperty("--labelBeforeZindex", "1")
    label.style.setProperty("--labelBeforeTop", "-24px")
    input.style.borderColor="#EC3F3F"
  }
  else{
    
  }
})
