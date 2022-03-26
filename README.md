# JS-Math - BETA

# Warning! ⚠️
This code may contain (unlikely) a few bugs! Please contact me in therefor in the issues section! Thx a lot!
(It is important, to have installed the chrome extension "tamperkey"!)

# What does this script do? 
This project is a collection of many scripts solving math problems and equations, for exemple the theorem of pythagoras. <br>
Many of them arn't avaiable, but'll come as soon as possible!

# How to use this 
There is no proper implementation using an event listener yet. For this reason, the appropriate section of code must be taken and inserted into the console, making changes to the input as necessary. In the near future, when the script will be further extended, there will be a button to start the project, where a prompt can be used  to perform the desired operation.

# Referece for scripts

## Heron's method
The purpose of this method is to approximate root knots as accurately as possible. The following scheme is used: 
(a + b/a)/2
a represents here a star value, which is found by approximating the value by a root. A value in the square numbers closest to the root value is used. Thus, the approximation for √6 is two (2) or three (3), since 2^2=4 < √6 and 3^3=9 > √6. As a further explanation, we can use the one in the ild, which shows very nicely how the basic principle of this procedure works. The rectangle with side lengths a,b and area A is to become a square with the same area A and side length c. 

![alt text](https://github.com/Coolie09/JS-Math/blob/main/image.jpg?raw=true)
Img scr: https://www.mayer-ffm.de/index.php/heronverfahren-zum-approximativen-berechnen-einer-quadratwurzel
All rights of this picture belong to the creater!

## How to use this script?

To use this script you have to call the function ``` heron() ```.
from the script and paste it into any JavaScript console. The following values must be specified

```precisicion: ``` Specifies the "precision" of a value, or the number of passes through which the value should be run. <br>
``` value:``` The root to be approximated. The root must be neither one (1) nor zero (0) and must be in the positive range.

The output is in the following format: 
```
The first values are: 0,1
(1 + 0.5 / 1)/2 = 0.75
(0.75 + 0.5 / 0.75)/2 = 0.7083333333333333
(0.7083333333333333 + 0.5 / 0.7083333333333333)/2 = 0.7071078431372548
(0.7071078431372548 + 0.5 / 0.7071078431372548)/2 = 0.7071067811873449
(0.7071067811873449 + 0.5 / 0.7071067811873449)/2 = 0.7071067811865475
(0.7071067811865475 + 0.5 / 0.7071067811865475)/2 = 0.7071067811865475
(0.7071067811865475 + 0.5 / 0.7071067811865475)/2 = 0.7071067811865475
(0.7071067811865475 + 0.5 / 0.7071067811865475)/2 = 0.7071067811865475
(0.7071067811865475 + 0.5 / 0.7071067811865475)/2 = 0.7071067811865475
(0.7071067811865475 + 0.5 / 0.7071067811865475)/2 = 0.7071067811865475
```
First, the first approximate values are given. Afterwards one sees the calculation steps, which can be written off in such a way.
