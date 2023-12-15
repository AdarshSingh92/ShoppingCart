# Shopping Panels project 
In this project, we have developed several panels related to the shopping site. For generating dummy data, 
I utilized a JSON site available at 'https://dummyjson.com/docs/products'.
I have used Reactive Form validaitoin in Add/Edit Product panel. 

Below is the list of panels that are included in the project 
1. Login - This panel is utilized for logging into the project with the user ID 'kminchelle' and the password '0lelplR'.
2. Product List - This panel will open after a successful login. 
3. Product Details - This panel will open after selecting a specific product from the Product List panel.
4. Add Product - This panel will open when user will click Add Product Button in Product List panel. This panel is basically used Reactive form validaiton and calling Save data API of dummy json APIs.
5. Edit Product - This panel will open when user will click on Edit Details in product list panel. This panel is basically used Reactive form validaiton and calling Update data API of dummy json APIs.

Below is the list of Services that are included in the project
1. auth.service.ts - In this authentication service, the "Login()" function is responsible for verifying login credentials and returning user details along with a JWT token. This token will be stored in the session storage.
2. one more service "isLoggedIn()" this function is responsible for verifying token is stored in session or not.
3. http.service.ts - In this http service, have two funcitons "getData()","postData()".
5. product.service.ts - In this product services, i have created centralized related to Product Object,that is responsible to handle Product related operation like
6.   a. Use "getDataFromLocalStorage()" to retrieve the product list from local storage.
    b. Employ "setData()" to add a new product to the Product List and subsequently save that updated list in local storage.
    c. Utilize "getAllData()"—this function is responsible for fetching and storing all product lists from the dummy JSON API into the local storage.
    d. Implement "getDetails(id: number)"—this function is responsible for retrieving product details from the product list based on the provided ID.
    e. Use 'updateDetails(product: Product)'—this function manages the update of product details within the product list.
9. authguard.ts - This auth guard service is reponsible to handle route level authentication, if token has been expired than it will restrict to navigate on other panels.
    

