var dashboard = document.getElementById("dashboard");
var users = document.getElementById("users");
var products = document.getElementById("products");
var orders = document.getElementById("orders");
var reviews = document.getElementById("reviews");

var dashboardData = document.getElementById("dashboardOverview");
var usersList = document.getElementById("usersList");
var productsData = document.getElementById("productDashboardSection");
var ordersData = document.getElementById("orderList");



dashboard.addEventListener('click', () => {
    dashboardData.style.display = "initial";
    usersList.style.display = "none";
    productsData.style.display = "none";
    ordersData.style.display = "none";
});

users.addEventListener('click', () => {
    dashboardData.style.display = "none";
    usersList.style.display = "grid";
    productsData.style.display = "none";
    ordersData.style.display = "none";
});

products.addEventListener('click', () => {
    dashboardData.style.display = "none";
    usersList.style.display = "none";
    productsData.style.display = "grid";
    ordersData.style.display = "none";
});

orders.addEventListener('click', () => {
    dashboardData.style.display = "none";
    usersList.style.display = "none";
    productsData.style.display = "none";
    ordersData.style.display = "grid";
});

reviews.addEventListener('click', () => {
    alert("Currently No Reviews Available");

    setTimeout(() =>{
        alert("Redirecting to Dashboard");
    },2000);

    setTimeout(()=>{
        dashboardData.style.display = "grid";
        usersList.style.display = "none";
        productsData.style.display = "none";
        ordersData.style.display = "none";
    },5000);
});