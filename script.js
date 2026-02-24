function checkSymptom(){

let symptom = document.getElementById("symptomInput").value.toLowerCase()

let result = document.getElementById("result")

if(symptom.includes("fever")){
result.innerHTML = "Possible diseases: Malaria, Typhoid, Dengue"
}

else if(symptom.includes("cough")){
result.innerHTML = "Possible diseases: Tuberculosis, Pneumonia"
}

else if(symptom.includes("headache")){
result.innerHTML = "Possible diseases: Migraine, Malaria"
}

else if(symptom.includes("itching")){
result.innerHTML = "Possible diseases: Scabies, Dermatitis"
}

else{
result.innerHTML = "No disease found in database"
}

}