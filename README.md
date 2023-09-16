Q1. Add at least three project features

Answer: Here are three project features :  
1. We can see the nine course in the display
2. We can select any course from the display by selecting select button
3. We can not select more than twenty credit course


Q2. Discuss how you managed the state in your assignment project

Answer: State management is the process of handling the state of an application optimally. I managed the state by using useState hook.  I first imported usestate hook in my components. I initialized my state by calling usestate in my function componenets. Usestate accepts an initial state and returns two values. They are the current state and a function that update the state. Example 
                               import {useState} from "react";
                               function FavoriteColor(){
                                const[color,setColor] = usestate("")
                               }
The first value , color , is my current state
The second value, setColor, is the function that is used to update my state                               