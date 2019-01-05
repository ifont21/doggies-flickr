**Doggies Flickr Application** - Ignacio Fontalvo

 **1**. Installation
 **2**. Features
 **3**. Missing
 **4**. what i would have done  
 **5**. improvements

**1. Installation**
   Tech Stack used :
 - Angular 6
 - ngrx/store
 - rxjs
 - Bootstrap ( only to show modals )
 - Docker
 - Flickr Api services
 
 For docker container: 
  

    docker-compose up --> // to start application
    // open up the browser and copy http://localhost:4200
    docker-compose rm && docker-compose build --no-cache && docker-compose up

For manual installation:

    npm run start:dev ---> // to start application
    node -v --> 8.11.1
    npm -v --> 6.1.0
**2. features**

 - First 100 Dogs and able to see its name and owner
 - Infinite scroll to see other groups by calling the Api service
 - loadings indicators when loading list of photos and details as well as scrolling down using the infinite scroll
 -  Error handling modal when there was an error on calling the Api
 - Able to see other pictures from authors
 - Fetch Geolocation info but wasn't able to show the Map due to some issues getting the Google Api_Key.
