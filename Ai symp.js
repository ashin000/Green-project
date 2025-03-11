document.getElementById("carbonform").addEventListener("submit",function(event){
    event.preventDefault();
    let transport=document.getElementById("transport").value;
    let electric=document.getElementById("electricity").value;
    let diet=document.getElementById("diet").value;
    
    let transport_print=transport*0.2*30;
    let electric_print=electric*0.85;
    let diet_print=diet*30;
    
    let total_print=transport_print+electric_print+diet_print;
    
    let suggession=""
    if (total_print>500){
        suggession="Your footprint is high! Consider using public transport and reducing electricity usage.";
    }else if (totalFootprint > 300) {
        suggestion = "You're doing okay, but you can improve by using more energy-efficient appliances!";
    } else {
        suggestion = "Great job! Your carbon footprint is relatively low.";
    }

    document.getElementById("result").innerHTML = `
        <p>Your estimated monthly carbon footprint: <strong>${totalFootprint.toFixed(2)} kg CO2</strong></p>
        <p>${suggestion}</p>
    `;
});