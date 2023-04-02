/*
Basic context api setup:

 1.context api : Share auth state with other components(accross the application)   
 2.Create an UserContext
 3.ContextProvider with passed childen
 4.set the context provider in the index.js file
 5.To consume the context :export the AuthContext frpm userCOntext
 6.Now at header or anywhere else : use useContext hook
 */

/*
 Auth integration
    1.use getAuth by passing the app from firebase config
    2.Create a function named createUser to return createUserWithEmailAndPassword
 */
