# Triangle job challenge

This is an exercise where I am supposed to show my coding skills for a possible job position. It is focused on logical thinking processes. 

## Rules

Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

Please use in-browser JavaScript for a solution and provide a user interface to input the lengths and display the result. (You don't need to draw the triangle)

### DEMO
[CodePen Demo](https://codepen.io/anon/pen/Zxdqaq) 

### Used tools
I tried to keep application as simple as possible, meaning using only HTML, CSS and JavaScript. No 3rd party library or framework.

### Explanation of made choices
In this section I would like to talk a little bit about decisions I made during building this application. I can start with choosing to use submit form vs on-click form. This has a simple advantage for a user. The user can use Enter to submit the form instead of only relying on mouse click with typical on-click button. However, a browser is trying to submit the form with this method and it must be stopped with JS.

```
if (e.preventDefault) e.preventDefault();
.
.
.
return false;
```

I have also validation of inputs in place. This prevents XSS injection or just a simple user's clumsiness when some field is left blank or is entered some non-numeric symbol.

### Logic when determining type of triangle
Code is self-explanatory. If sentence first checks if all 3 sides are matching. If not, it checks if 2 sides are matching. If not of the above is correct, then only option is Scalene Triangle.

```
  if (field1 === field2 && field1 === field3) {
    result = "Equilateral Triangle";
  }

  // Checks for Isosceles triangle = 2 equal sides 
  else if (field1 === field2 || field1 === field3 || field2 === field3) {
    result = "Isosceles Triangle";
  }

  // If first two checks failed, only Scalene Triangle is left = each side different
  else {
    result = "Scalene Triangle";
  }
```
So, if the triangle is determined, browser will render actual result on screen (only as a text).
Then it resets the form and can continue receiving new values. 

## Possible error situations and solutions

* One or more fields/inputs are missing - Popup alerts a user and stop execution
* Input does not contain numerics symbols - Popup alerts a user and stop execution. (This should also prevent XSS injection)
* Entered sides does not follow Triangle Inequality Theorem - Popup alerts a user and stop execution

### Design choices
As this was exercise focused on logical thinking and not on creative skills, I have created only very basic design. This could be, of course developed further, if needed. 


## Authors

* **Michal Sisak** - *Initial work* - [GitHub](https://github.com/jacksylvane)