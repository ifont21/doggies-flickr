**Doggies Flickr Application** - Ignacio Fontalvo

 **1**. Installation
 **2**. Features
 **3**. Missing
 **4**. What i would have done  
 **5**. Improvements
 **6**. Final Thoughts

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


**3. Missing**
 - Filters based on params on doggies List
 -  Geolocation using Google Maps
 - offline functionality and ability to add app to Homescreen

**4. What i would have done**

 - Filters based on params -->  i would've solved by adding a new reusable component which would need a form to handle input parameters and dispatching every time one field changes the store with an action to update the state and fetch doggies according to the query.

   `this.store.dispatch(actions.fetchPhotosSummary(this.payload))`

   this payload can contain parameters such as *text*, *tags*, *sort*, *userId*,   *codeColors* etc.

 - Geolocation using Google Map: i was planning to use the Angular library **agm**
 which easily i would've imported the module into the **SharedModule** and then i would've included the tag component in my details component just like following the next approach:
   
   `<agm-map [latitude]="lat" 
           [longitude]="lng">  
 <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>  
 </agm-map>`

    

 - offline functionality and ability to add app to Homescreen: To be honest i've never tried before to use this feature but i know this is possible using PWA and web workers in javascript also i know it could easily adapted by using angular, but believe me i would've done if i'd had time to understand the feature.

**5. Improvements**

 - Well design for picture boxes since the Api provide us images of difference sizes to adjust the images to see it better keeping in mind it properties such as *width* and *height*. On another hand i think that we can create an auxiliary REST Api similar to a Gateway Api to process the images and responds to the client in a better way to be rendered.

- Mapping property data from service Api to help the client app to understand better that data, i might have in mind to use either the Restful service Api i said in the previous item or mapping through the response on the *side effects features*
- Cache services to avoid unnecessaries request to improve the application performance.
- Go over each component and avoid unnecessary change detections by using the `changeDetectionStrategy.OnPush`
-   better performance for infinite scroll directive i'm not sure if it was a good idea to handle it by the state of application, but that makes sense by following the idea of state concept.

> State is the single source of truth

**6. Final Thoughts**
It took me longer than expected to scaffold the project to make it easy to read and also scalable, i'm always worried about how we get started an application because to need to think about how big it's gonna be in the future and that thought helped me a lot because at the end i could adapt easily components or features.
