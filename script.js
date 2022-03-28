function calculDelivery(total, country) {
    if (country == "CH"){
      if (total <= 50){
        return "Les frais de port sont de 20.-";
      }else if (total <= 100){
        return "Les frais de port sont de 10.-";
      }else if (total <= 150){
        return "Les frais de port sont de 5.-";
      }else {
        return "les frais de port sont gratuit";
      }
    }
    else if (country =="FR" || country == "DE"){
      if (total <= 50){
        return "Les frais de port sont de 30.-";
      }else {
        return "Les frais de port sont de 20.-";
      }
    }
    else {
      return "nous ne livrons pas dans cette zone";
    }
}

var total = Number(prompt("Quel est le montant total de la commande ?"));
var country = prompt("Quel est le pays de destination ( CH FR ou DE ) ?");

console.log(calculDelivery(total,country));
alert (calculDelivery(total, country))