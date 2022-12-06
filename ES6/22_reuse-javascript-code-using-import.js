/*
import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions
*/

import { uppercaseString, lowercaseString } from "./string_functions.js";

uppercaseString("hello");
lowercaseString("WORLD!");
