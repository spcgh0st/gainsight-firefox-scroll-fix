# Firefox extension to fix Gainsight NXT issue with horizontal scrolling bar not clickable 

## Issue description
When using Firefox to browse my company's Gainsight NXT portal, the horizontal scrollbar is not clickable (it works OK with other browsers). The culprit appears to be a CSS rule "scrollbar-with: none" assigned to class "ag-center-cols-viewport".

## Solution
This is a very simple extension that upon user double-clicking on any part of the body (I couldn't find any reasonable event to hook to yet, that doesn't imply reacting to every DOM mutation) searches for the aformentioned CSS class and adds an inline style of "scrollbar-width: initial;" to the found elements.


