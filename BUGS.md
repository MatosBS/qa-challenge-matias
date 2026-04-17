### Suggestions
- Modify Panels from Menu to display completelly the info and avoid vertical scroll bars.
When user goes to Menu > Route or Menu > Try Turbopack, seems that a scroll bar is displayed that could be avoided adjusting the height or the font size.
Something similar happens when user Goes to Menu > Route Info, a lot of white space is displayed that could also be avoided.

### Bugs
##ALL BUGS WOULD CONTAIN A SCREENSHOT OR A VIDEO ATTACHED AS EVIDENCE OF THE ISSUE

> 0001 Menu - Route info: user is able to modify the size of the panel Description

*Description*
When user goes to Menu > Route info, he/she is able to modify the size of the panel, when this is not possible with the rest of the panels.

*Steps*
1. Go to Menu
2. Go to Route info
3. Mouve the mouse to border of the panel
4. Click and drag the mouse

*Actual Result*
User is able to modify the size of the panel.

*Expected Result*
User should not be able to modify the size of the panel

> 0002 Menu - Route info: user is able to modify the position of the panel Description

*Description*
When user goes to Menu > Route info, he/she is able to modify the position of the panel, when this is not possible with the rest of the panels.

*Steps*
1. Go to Menu
2. Go to Route info
3. Mouve the mouse to header of the panel
4. Click and drag the mouse

*Actual Result*
User is able to modify the position of the panel.

*Expected Result*
User should not be able to modify the position of the panel.

> 0003 Menu - Preferences - Theme: changes are made only in the panel

*Description*
When user goes to Menu > Preferences and updates the Theme, changes are applied only to the panel

*Steps *
1. Go to Menu
2. Go to Preferences
3. In Theme, select a different option

*Actual Result*
Theme update is only applied to the Preferences Panel.

*Expected Result*
Selected theme should be applied to the complete site.

> 0004 Menu - Preferences - Size: changes are made only in the panel

*Description*
When user goes to Menu > Preferences and updates the Size, changes are applied only for the content of the panel but the size of the panel is not updated

*Steps *
1. Go to Menu
2. Go to Preferences
3. In Size, select a different option

*Actual Result*
Size update is only applied to the content of the panel

*Expected Result*
Content and size of the panel should be updated.

> 0005 Menu: when user is on a subsection and clicks on any other part, menu is not completely closed
*Description*
When user is in Menu > Route / Try Turbopack / Route Info / Preferences, and clicks outside the panel, the menu is not completely closed.

*Steps *
1. Go to Menu
2. Go to, for example, Route 
3. Click outside the panel

*Actual Result*
Panel from suboption is closed, but menu is still being displayed.

*Expected Result*
Menu should be completelly closed when user clicks outside.

> 0006 Site: text "Enter a topic below to generate your first lesson plan." is displayed in two lines
*Description*
When user gest into the site, the text "Enter a topic below to generate your first lesson plan." is being displayed in two lines.

*Steps *
1. Go to Lesson Plan Generator

*Actual Result*
Text is displayed in two lines:
"Enter a topic below to generate your first lesson"
"plan."

*Expected Result*
Text should be displayed in onle line
"Enter a topic below to generate your first lesson plan."

> 0007 Site: user is able to submit inserting an empty space
*Description*
When user focus on the input file and only inserts an empty space (" ") it is being possible to submit.

*Steps *
1. Go to Lesson Plan Generator
2. Focus on the input file
3. Press the space bar to insert an empty space
4. Click the button or press Enter to submit

*Actual Result*
Lessons is being generated taking " " as input.

*Expected Result*
Submit should not accept a whitespace-only  submit.

> 0008 Site - Lesson generator: user is not able to scroll while lesson is being generated
*Description*
When user inserts a topic and submits, he/she is not being able to scroll to the top while lessons is being generated.

*Steps *
1. Go to Lesson Plan Generator
2. Insert a topic
3. Click the button or press Enter to Submit
4. Scroll to the top of the window

*Actual Result*
User is not able to scroll.
User is always taken to the bottom of the screen.

*Expected Result*
User should be able to scroll while lesson is generated.

> 0009 Site - Lesson generator: user is able to submit another topic while a lesson is being generated
*Description*
When user inserts a topic and submits, it is being possible to submit another topic while  while lesson is being generated.

*Steps *
1. Go to Lesson Plan Generator
2. Insert a topic
3. Click the button or press Enter to Submit
4. Insert another topic
5. Click the button or press Enter to Submit

*Actual Result*
User is able to submit several lessons while they are being generated.

*Expected Result*
User should be able to submit another topic while a lesson is being generated.
Input field and Submit button should be disabled until lessons is completelly displayed.

> 0010 Menu - Lesson Generator: same lessons are being generated when user inserts different topics
*Description*
When user is trying to generate different lessons, same content is being generated even when the user inserts different topics

*Steps *
1. Go to Lesson Plan Generator
2. Insert a topic, for example "Maths"
3. Wait until lesson is generated
4. Click the button or press Enter to Submit
5. Insert a different  topic, for example "History"
6. Click the button or press Enter to Submit

*Actual Result*
Same lesson is being generated for different topics.

*Expected Result*
Lessons should be generated correctly according to the inserted topic.

> 0011 Menu: bottom right corner of the panel is not correctly displayed

*Description*
When user is in Menu > Route / Try Turbopack / Route Info / Preferences, the bottom right corner of the panel is not correctly displayed. It seems that a tinny part is displayed.

*Steps *
1. Go to Menu
2. Go to, for example, Route 

*Actual Result*
Bottom right corner is not displayed correctly.

*Expected Result*
Bottom right corner should be displayed correctly 	

> 0011 Site: no clear message is displayed on an error

*Description*
When user is submitting a topic and an error is generated, no clear message is being displayed.

*Steps *
1. Go to Lesson Plan Generator
2. Insert "ERROR" in the input
3. Click on the Submit button or press the Enter key

*Actual Result*
Error is displayed in the browser console, but "Generating lesson plan…" remains in the view.

*Expected Result*
User friendly error should be displayed.

> 0012 Mobile - Site: in some resolutions, Menu button is displayed over the input field

*Description*
On mobile view (for example, iPhone 14 Pro Max), the Menu button is being displayed over the Input field

*Steps *
1. Use the developer tools to emulate a device, for example: iPhone 14 Pro Max
2. Go to Lesson Plan Generator

*Actual Result*
Menu button is being displayed over the Input field.

*Expected Result*
Input field should be displayed next to the Menu button
