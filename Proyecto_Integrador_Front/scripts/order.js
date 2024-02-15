const btnPurchase = document.getElementById("btn_purchase");
 btnPurchase.addEventListener("click", () => {
    // localStorage.setItem("id_product", product.id);
   window.location.href = "../pages/purchase.html";
   
 });

 

 const user=JSON.parse(localStorage.getItem("user"));
 console.log(user);
 console.log(!(Object.keys(user).length === 0));

if(!(Object.keys(user).length === 0)){
  const linkForm=document.getElementById("link_form");
  linkForm.style.display='none';
  const insertName=document.getElementById("nombre");
  insertName.innerHTML=`
   ${(user.nombreCompleto)} thanks for adding payment method
  `
}

