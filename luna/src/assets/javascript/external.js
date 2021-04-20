function showInput() {
    angular.element(document.getElementById('display').innerHTML) = angular.element(document.getElementById("startdate")).value;
    angular.element(document.getElementById('displayone')).innerHTML = angular.element(document.getElementById("cyclelength")).value-1+" days";
}  
