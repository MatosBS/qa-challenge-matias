### Suggestions
- Modify Panels from Menu to display completelly the info and avoid vertical scroll bars.
When user goes to Menu > Route or Menu > Try Turbopack, seems that a scroll bar is displayed that could be avoided adjusting the height or the font size.
Something similar happens when user Goes to Menu > Route Info, a lot of white space is displayed that could also be avoided.

### Bugs
*[ALL BUGS WOULD CONTAIN A SCREENSHOT OR A VIDEO ATTACHED AS EVIDENCE OF THE ISSUE]*

> 0001 Menu - Route info: user is able to modify the size of the panel Description 
Priority: Low (it is a minor aesthetic issue, does not affect the functionality)

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
Priority: Low (it is a minor aesthetic issue, does not affect the functionality)

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
Priority: Medium (it is an aesthetic issue, but affects the complete UI)

*Description*
When user goes to Menu > Preferences and updates the Theme, changes are applied only to the panel

*Steps*
1. Go to Menu
2. Go to Preferences
3. In Theme, select a different option

*Actual Result*
Theme update is only applied to the Preferences Panel.

*Expected Result*
Selected theme should be applied to the complete site.

> 0004 Menu - Preferences - Size: changes are made only in the panel, not the size of the panel itself
Priority: Low (it is a minor aesthetic issue, does not affect the user)

*Description*
When user goes to Menu > Preferences and updates the Size, changes are applied only for the content of the panel but the size of the panel is not updated

*Steps*
1. Go to Menu
2. Go to Preferences
3. In Size, select a different option

*Actual Result*
Size update is only applied to the content of the panel

*Expected Result*
Content and size of the panel should be updated.

> 0005 Menu: when user is on a subsection and clicks on any other part, menu is not completely closed
Priority: Low (it is a minor aesthetic issue. User just has to click again to close it)

*Description*
When user is in Menu > Route / Try Turbopack / Route Info / Preferences, and clicks outside the panel, the menu is not completely closed.

*Steps*
1. Go to Menu
2. Go to, for example, Route 
3. Click outside the panel

*Actual Result*
Panel from suboption is closed, but menu is still being displayed.

*Expected Result*
Menu should be completelly closed when user clicks outside.

> 0006 Site: text "Enter a topic below to generate your first lesson plan." is displayed in two lines
Priority: Low (it is a minor aesthetic issue, does not affect the user)

*Description*
When user gest into the site, the text "Enter a topic below to generate your first lesson plan." is being displayed in two lines.

*Steps*
1. Go to Lesson Plan Generator

*Actual Result*
Text is displayed in two lines:
"Enter a topic below to generate your first lesson"
"plan."

*Expected Result*
Text should be displayed in onle line
"Enter a topic below to generate your first lesson plan."

> 0007 Site: user is able to submit inserting an empty space
Priority: High (it is a functional issue, it is allowing user to make an action that should not be allowed)

*Description*
When user focus on the input file and only inserts an empty space (" ") it is being possible to submit.

*Steps*
1. Go to Lesson Plan Generator
2. Focus on the input file
3. Press the space bar to insert an empty space
4. Click the button or press Enter to submit

*Actual Result*
Lessons is being generated taking " " as input.

*Expected Result*
Submit should not accept a whitespace-only  submit.

> 0008 Site - Lesson generator: user is not able to scroll while lesson is being generated
Priority: Critical (it is blocking user to move and read the content)

*Description*
When user inserts a topic and submits, he/she is not being able to scroll to the top while lessons is being generated.

*Steps*
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
Priority: High (user is able to generate multiple lessons at the same time, it could generate issues with the API; but it is not breaking the functionality and it would be generated from a wrong user input)

*Description*
When user inserts a topic and submits, it is being possible to submit another topic while  while lesson is being generated.

*Steps*
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
Priority: Critical (it is completelly affecting the main functionalitty)

*Description*
When user is trying to generate different lessons, same content is being generated even when the user inserts different topics

*Steps*
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
Priority: Low (it is a minor aesthetic issue, does not affect the functionality)

*Description*
When user is in Menu > Route / Try Turbopack / Route Info / Preferences, the bottom right corner of the panel is not correctly displayed. It seems that a tinny part is displayed.

*Steps*
1. Go to Menu
2. Go to, for example, Route 

*Actual Result*
Bottom right corner is not displayed correctly.

*Expected Result*
Bottom right corner should be displayed correctly 	

> 0011 Site: no clear message is displayed on an error
Priority: Medium (it could be a aesthetic issue, but it is important to inform clearly user in case of any error)

*Description*
When user is submitting a topic and an error is generated, no clear message is being displayed.

*Steps*
1. Go to Lesson Plan Generator
2. Insert "ERROR" in the input
3. Click on the Submit button or press the Enter key

*Actual Result*
Error is displayed in the browser console, but "Generating lesson plan…" remains in the view.

*Expected Result*
User friendly error should be displayed.

> 0012 Mobile - Site: in some resolutions, Menu button is displayed over the input field
Priority: Low (it is a aesthetic issue, does not affect the functionality)

*Description*
On mobile view (for example, iPhone 14 Pro Max), the Menu button is being displayed over the Input field

*Steps*
1. Use the developer tools to emulate a device, for example: iPhone 14 Pro Max
2. Go to Lesson Plan Generator

*Actual Result*
Menu button is being displayed over the Input field.

*Expected Result*
Input field should be displayed next to the Menu button



---------
## if the team can only fix two of these before the next release, which two and why?

I would prioritize fixing the following two bugs:

 - Bug 0010: Menu - Lesson Generator: same lessons are being generated when user inserts different topics (Critical)
[ASSUMING IT IS AN ERROR, and not only that it's implemented this way on purpose for the challenge]<br>

This is a complete showstopper. The main (and only) purpose of this application is to generate lesson plans based on a specific topic. If the app always returns the exact same text regardless of what the user inputs, the product completely loses its value. This bug makes the fundamental feature of the system useless and is unacceptable for a production release.

 - Bug 0009: Site - Lesson generator: user is able to submit another topic while a lesson is being generated (High)<br>
In applications that rely on APIs—and especially those that stream AI responses—this is a massive risk. Allowing multiple, concurrent submissions can trigger several severe issues: