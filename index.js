
// REGISTER & LOGIN PANEL
window.onload = function () {


    var registers = document.querySelector(".register");

    var loginToggle = document.querySelector("#loginToggle");
    var toggle = document.querySelector(".Loginmodal")

    var RegisterClose = document.querySelector(".RegisterClose");
    var RegisterModal = document.querySelector(".Registermodal");

    loginToggle.addEventListener('click', () => {
        toggle.showModal();
        RegisterModal.close();
    });

    registers.addEventListener('click', () => {
        RegisterModal.showModal();
    });

    RegisterClose.addEventListener('click', () => {
        RegisterModal.close();
    });

    // LOGIN MODAL PANEL

    var modal = document.querySelector(".Loginmodal");

    var registerToggle = document.querySelector(".Registermodal");
    var toggleClose = document.querySelector(".RegisterClose");

    var open = document.querySelector(".login");
    var close = document.querySelector(".close");
    var toggleRegister = document.querySelector("#toggleRegister");

    toggleRegister.addEventListener('click', () => {
        registerToggle.showModal();
        modal.close();
    });

    toggleClose.addEventListener('click', () => {
        RegisterModal.close();
    });

    open.addEventListener('click', () => {
        modal.showModal();
    });

    close.addEventListener('click', () => {
        modal.close();
    });


    // PAYMENT SUCCESS TOGGLE 
    var openModal = document.querySelector("#payNowBtn");
    var success = document.querySelector(".paymentModal");

    openModal.addEventListener('click', () => {
        success.showModal();
    });

    var closeModal = document.querySelector("#donePayment");

    closeModal.addEventListener('click', () => {
        success.close();
    });

    var reg = document.getElementById("Registered");
    var successfulRegistered = document.getElementById("registeredSuccessfulModal");

    reg.addEventListener('click', () => {
        successfulRegistered.showModal();
    });


}

function succefulRegister() {
    var successfulRegistered = document.getElementById("registeredSuccessfulModal");
    var registerModal = document.querySelector(".Registermodal");
    var loginModal = document.querySelector(".Loginmodal");

    var registerButton = document.getElementById("registeredButton");
    registerButton.addEventListener('click', () => {
        successfulRegistered.close();
        loginModal.showModal();
        registerModal.close();
    });
}



var progressSection = document.getElementById('ratingSection');
var progressBar = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBar.forEach(progress => {
        const value = progress.dataset.progress;
        progress.style.opacity = 1;
        progress.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBar.forEach(progress => {
        progress.style.opacity = 0;
        progress.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    var progressPosition = progressSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (progressPosition < screenPosition) {
        showProgress();
    } else {
        hideProgress();
    }
});


// SEARCH FILTER CLEAR

// function clearSearch(){
//     document.getElementById("findData").value="";
//     document.getElementById("findData1").value="";
//     document.getElementById("findData2").value="";
//     document.getElementById("findData3").value="";
// }


// Filtration Panel

var product = document.querySelectorAll(".productBox");
var checkbox = document.querySelectorAll(".checkbox");
var groceryCheck = document.querySelectorAll(".groceryCheck");
var bevergeCheck = document.querySelectorAll(".bevergeCheck");
var HouseholdCheck = document.querySelectorAll(".HouseholdCheck");

var list = [];
var productCount = 0;

for (var check of checkbox) {
    check.addEventListener('click', function (e) {

        if (this.checked == true) {
            if (e.target.id == "allProductsGrocery") {
                for (var check of groceryCheck) {
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;

            } else if (e.target.id == "allProductsBeverge") {
                for (var check of bevergeCheck) {
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;

            } else if (e.target.id == "allProductsHousehold") {
                for (var check of HouseholdCheck) {
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;

            }

            const category = e.target;

            product.forEach((element) => element.classList.add("product-not-active"));

            const products = document.querySelectorAll(`.p-btn--${category.dataset.btnNum}`);

            if (products.length == 0) {
                document.getElementById("noProductsAvailable").innerHTML = ` No ${e.target.name} Products is Available`;
                setTimeout(() => {
                    this.checked = false;
                    e.target.disabled = true;
                }, 5000);
            } else {
                document.getElementById("noProductsAvailable").innerHTML = "";
            }

            productCount = products.length + productCount;

            list.push(category.dataset.btnNum);
            list.forEach(displayProducts);
        }

        if (this.checked != true) {

            if (e.target.id == "allProductsGrocery") {
                for (var check of groceryCheck) {
                    check.disabled = false;
                }
                list.splice(0, list.length);

                productCount = 0;
                this.disabled = false;

            } else if (e.target.id == "allProductsBeverge") {
                for (var check of bevergeCheck) {
                    check.disabled = false;
                }
                list.splice(0, list.length);

                productCount = 0;
                this.disabled = false;

            } else if (e.target.id == "allProductsHousehold") {
                for (var check of HouseholdCheck) {
                    check.disabled = false;
                }
                list.splice(0, list.length);

                productCount = 0;
                this.disabled = false;
            }

            if (e.target.id == "allProducts") {
                for (var check of groceryCheck) {
                    check.disabled = false;
                }
                for (var check of bevergeCheck) {
                    check.disabled = false;
                }
                for (var check of Household) {
                    check.disabled = false;
                }
                list.splice(0, list.length);

                productCount = 0;
            }

            const category = e.target;

            const products = document.querySelectorAll(`.p-btn--${category.dataset.btnNum}`);

            products.forEach((element) => element.classList.add("product-not-active"));

            const removes = category.dataset.btnNum;
            list.splice(list.indexOf(removes), 1);

            productCount = productCount - products.length;

            list.forEach(displayProducts);
        }

        if (list.length == 0) {
            product.forEach((element) => element.classList.remove("product-not-active"));
            productCount = 0;
            document.getElementById("productsAvailable").innerHTML = "";

        }

        function displayProducts(datas) {
            const products = document.querySelectorAll(`.p-btn--${datas}`);

            products.forEach((element) => element.classList.remove("product-not-active"));

            if (productCount != 0) {
                document.getElementById("productsAvailable").innerHTML = ` ${Math.abs(productCount)} Products Available `;
            }
        }

    });
}

// SEARCH FILTRATION



var clearFilter = document.querySelector("#clearFilter");

clearFilter.addEventListener('click', () => {
    list.splice(0, list.length);

    productCount = 0;
    document.getElementById("productsAvailable").innerHTML = "";
    document.getElementById("noProductsAvailable").innerHTML = "";

    product.forEach((element) => element.classList.remove("product-not-active"));
    for (var check of checkbox) {
        check.checked = false;
        check.disabled = false;
    }
});

// SEARCH FILTRATION SECTION

function filter() {
    var filter = document.getElementById('findData').value.toUpperCase();
    var products = document.querySelectorAll(".productBox");

    for (var productsDiv of products) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}

function filterGrocery() {
    var filter = document.getElementById('findData1').value.toUpperCase();
    var groceryProducts = document.querySelectorAll(".groceryProducts");

    for (var productsDiv of groceryProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}
function filterBeverges() {
    var filter = document.getElementById('findData2').value.toUpperCase();
    var bevergeProducts = document.querySelectorAll(".bevergeProducts");

    for (var productsDiv of bevergeProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}
function filterHousehold() {
    var filter = document.getElementById('findData3').value.toUpperCase();
    var householdProducts = document.querySelectorAll(".householdProducts");

    for (var productsDiv of householdProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}

// SHIPMENT PAGE TOGGLE

function toggleShipmentPage() {

    document.getElementById('ship').style.display = "none";
    document.getElementById('cartBtn').style.display = "none";
    document.getElementById('shipment').style.display = "block";
    // SHIPMENT DETAILS
    var customerName = document.getElementById("customerName");
    var customerMobile = document.getElementById("customerNumber");
    var customerAddress = document.getElementById("customerAddress");

    document.getElementById("customer").innerHTML = customerName.value;
    document.getElementById("customerMobile").innerHTML = customerMobile.value;
    document.getElementById("customerShippingAddress").innerHTML = customerAddress.value;

}

function backToCart() {
    document.getElementById('ship').style.display = "grid";
    document.getElementById('cartBtn').style.display = "block";
    document.getElementById('shipment').style.display = "none";
}

function payment() {
    document.getElementById('shipment').style.display = "none";
    document.getElementById('paymentSection').style.display = "grid";
}

function backToShippingPage() {
    document.getElementById('shipment').style.display = "grid";
    document.getElementById('paymentSection').style.display = "none";
}


// PAYMENT SUCCESFUL REDIRECT

function redirect() {

    alert("Redirecting To Your Cart");

    setTimeout(() => {
        window.open("cart.html")
    }, 5000)
}



