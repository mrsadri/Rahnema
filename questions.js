// Questions data parsed from Q1.txt, Q2.txt, Q3.txt

const questionsData = {
    Q1: [
        {
            id: 1,
            text: "When using a Top App Bar, how should the bar react when the user scrolls down the page content?",
            options: {
                A: "It must always disappear completely to save screen space.",
                B: "It should apply a drop shadow to separate it from the content.",
                C: "It should apply a color fill (overlay) to visually separate it from the content beneath.",
                D: "It should increase in height to display more actions."
            },
            correct: "C"
        },
        {
            id: 2,
            text: "Which App Bar type is recommended for screens that require a prominent headline that can collapse into a smaller size on scroll?",
            options: {
                A: "Small App Bar",
                B: "Center-aligned App Bar",
                C: "Medium Flexible App Bar",
                D: "Search App Bar"
            },
            correct: "C"
        },
        {
            id: 3,
            text: "According to M3 guidelines, what is the maximum recommended number of essential actions (icon buttons) to display on the trailing side of a Top App Bar?",
            options: {
                A: "1 to 2",
                B: "3 to 4",
                C: "5",
                D: "As many as fit the screen width"
            },
            correct: "A"
        },
        {
            id: 4,
            text: "Which of the following App Bar configurations is deprecated in Material Design 3 and should be replaced by a \"Flexible\" version?",
            options: {
                A: "Small App Bar",
                B: "Large App Bar (static height)",
                C: "Search App Bar",
                D: "Center-aligned App Bar"
            },
            correct: "B"
        },
        {
            id: 5,
            text: "What is the primary use case for a \"Small Badge\" (a simple dot with no text)?",
            options: {
                A: "To display a count of more than 10 items.",
                B: "To indicate an unread notification or status change without a specific count.",
                C: "To label a navigation icon with its name.",
                D: "To indicate an error state on a form field."
            },
            correct: "B"
        },
        {
            id: 6,
            text: "What is the maximum number of characters (including symbols) that should be displayed inside a \"Large Badge\"?",
            options: {
                A: "2 characters (e.g., \"99\")",
                B: "3 characters (e.g., \"99+\")",
                C: "4 characters (e.g., \"999+\")",
                D: "5 characters"
            },
            correct: "C"
        },
        {
            id: 7,
            text: "Where is the correct placement for a badge on an icon?",
            options: {
                A: "Top-left corner",
                B: "Bottom-right corner",
                C: "Top-right corner (trailing edge)",
                D: "Centered over the icon"
            },
            correct: "C"
        },
        {
            id: 8,
            text: "Which of the following is a \"Don't\" when using badges?",
            options: {
                A: "Truncating the label text if it exceeds the maximum character count.",
                B: "Using a Large Badge to show a specific count (e.g., \"5\").",
                C: "Placing a badge on a navigation bar icon.",
                D: "Changing the position of the badge arbitrarily or placing it directly over the icon face."
            },
            correct: "D"
        },
        {
            id: 9,
            text: "Which button style has the highest visual emphasis and should be used for the primary action on a screen?",
            options: {
                A: "Outlined Button",
                B: "Tonal Button",
                C: "Filled Button",
                D: "Text Button"
            },
            correct: "C"
        },
        {
            id: 10,
            text: "When should you use an \"Elevated Button\"?",
            options: {
                A: "For all primary actions.",
                B: "When the button requires visual separation from a patterned or visually prominent background.",
                C: "For inactive or disabled states.",
                D: "Inside a dialog box next to a text button."
            },
            correct: "B"
        },
        {
            id: 11,
            text: "What is the correct text styling for button labels?",
            options: {
                A: "ALL CAPS (e.g., \"BUTTON TEXT\")",
                B: "Sentence case (e.g., \"Button text\")",
                C: "Title Case (e.g., \"Button Text\")",
                D: "Lowercase (e.g., \"button text\")"
            },
            correct: "B"
        },
        {
            id: 12,
            text: "You have a screen with multiple actions. One is \"Save\" (primary) and one is \"Cancel\" (secondary). Which combination adheres best to M3 hierarchy?",
            options: {
                A: "Two Filled Buttons.",
                B: "One Filled Button (Save) and one Outlined or Text Button (Cancel).",
                C: "Two Outlined Buttons.",
                D: "One Text Button (Save) and one Filled Button (Cancel)."
            },
            correct: "B"
        },
        {
            id: 13,
            text: "How many Floating Action Buttons (FABs) are recommended per screen?",
            options: {
                A: "As many as needed for all actions.",
                B: "Exactly two (one left, one right).",
                C: "Only one, representing the primary action.",
                D: "None, they are deprecated."
            },
            correct: "C"
        },
        {
            id: 14,
            text: "When using an Extended FAB (icon + label), how should it behave when the user scrolls down a list?",
            options: {
                A: "It should disappear immediately.",
                B: "It should collapse into a standard FAB (icon only) to save space.",
                C: "It should expand to full width.",
                D: "It should become transparent."
            },
            correct: "B"
        },
        {
            id: 15,
            text: "In a standard mobile layout, what is the default position for a FAB?",
            options: {
                A: "Top left corner.",
                B: "Bottom center, overlapping the navigation bar.",
                C: "Bottom right corner.",
                D: "Vertically centered on the right edge."
            },
            correct: "C"
        },
        {
            id: 16,
            text: "Which of the following is an incorrect use (Don't) for a FAB?",
            options: {
                A: "Using it for a \"Create\" or \"New Message\" action.",
                B: "Using it for destructive actions like \"Delete\" or minor tasks like \"Volume\".",
                C: "Placing it above a list of content.",
                D: "Using it to trigger a modal or new screen."
            },
            correct: "B"
        },
        {
            id: 17,
            text: "What distinguishes a \"Toggle\" icon button from a standard icon button?",
            options: {
                A: "It changes color when hovered.",
                B: "It allows a single choice to be selected/deselected (e.g., Favorite), often changing from outlined to filled.",
                C: "It is always square shaped.",
                D: "It contains text and an icon."
            },
            correct: "B"
        },
        {
            id: 18,
            text: "Which icon button style offers the lowest visual emphasis, suitable for overflow menus or dense layouts?",
            options: {
                A: "Filled Icon Button",
                B: "Tonal Icon Button",
                C: "Standard Icon Button (no container)",
                D: "Outlined Icon Button"
            },
            correct: "C"
        },
        {
            id: 19,
            text: "When a toggle icon button is in the \"Selected\" state, how should the icon appear?",
            options: {
                A: "It should remain outlined but change color.",
                B: "It should become filled (or use a bolder weight if no filled version exists).",
                C: "It should rotate 90 degrees.",
                D: "It should shrink in size."
            },
            correct: "B"
        },
        {
            id: 20,
            text: "Why is a tooltip essential for icon buttons?",
            options: {
                A: "It is required for the button to function.",
                B: "It provides a text label describing the action, as there is no visible text label.",
                C: "It adds a decorative animation.",
                D: "It allows the user to customize the icon."
            },
            correct: "B"
        },
        {
            id: 21,
            text: "What is the recommended maximum number of segments in a Segmented Button?",
            options: {
                A: "3",
                B: "5",
                C: "7",
                D: "10"
            },
            correct: "B"
        },
        {
            id: 22,
            text: "How does a \"Multi-select\" Segmented Button differ from a \"Single-select\" one?",
            options: {
                A: "Users can select zero, one, or multiple segments simultaneously.",
                B: "It uses radio buttons instead of checkmarks.",
                C: "It must always have icons.",
                D: "It is used only for navigation."
            },
            correct: "A"
        },
        {
            id: 23,
            text: "If you have more than 5 categories to choose from, which component should you use instead of a Segmented Button?",
            options: {
                A: "Tabs",
                B: "Chips",
                C: "Checkboxes",
                D: "Switch"
            },
            correct: "B"
        },
        {
            id: 24,
            text: "When a segment with both a label and an icon is selected, what happens to the icon?",
            options: {
                A: "It disappears.",
                B: "It is replaced by a checkmark icon to indicate selection.",
                C: "It moves to the right of the text.",
                D: "It changes to a different color but stays the same shape."
            },
            correct: "B"
        },
        {
            id: 25,
            text: "Which card type is best for the highest visual emphasis, using a border to separate it from the background?",
            options: {
                A: "Filled Card",
                B: "Elevated Card",
                C: "Outlined Card",
                D: "Ghost Card"
            },
            correct: "C"
        },
        {
            id: 26,
            text: "Which gesture is explicitly \"Don't\" for cards on mobile devices?",
            options: {
                A: "Swiping to dismiss.",
                B: "Dragging to reorder.",
                C: "Scrolling content *within* the card itself (creating two scrollbars).",
                D: "Tapping to expand."
            },
            correct: "C"
        },
        {
            id: 27,
            text: "What is the only required element in a Card anatomy?",
            options: {
                A: "The Container.",
                B: "A Headline.",
                C: "An Image.",
                D: "A Button."
            },
            correct: "A"
        },
        {
            id: 28,
            text: "How should cards behave in a collection (e.g., a grid)?",
            options: {
                A: "They should all have different elevations to show importance.",
                B: "They should represent coplanar items, sharing the same resting elevation.",
                C: "They should overlap each other significantly.",
                D: "They should span the full width of the screen on all devices."
            },
            correct: "B"
        },
        {
            id: 29,
            text: "What is the recommended time threshold for using a \"Loading Indicator\" (circular spinner)?",
            options: {
                A: "Processes taking less than 200ms.",
                B: "Processes taking between 200ms and 5 seconds.",
                C: "Processes taking longer than 10 seconds.",
                D: "Any process regardless of time."
            },
            correct: "B"
        },
        {
            id: 30,
            text: "When should you use a \"Determinate\" progress indicator?",
            options: {
                A: "When the wait time is unknown.",
                B: "When the process duration can be calculated and progress is known (e.g., 50% done).",
                C: "Immediately upon a button press for a short action.",
                D: "For pull-to-refresh gestures."
            },
            correct: "B"
        },
        {
            id: 31,
            text: "Where is the best placement for a \"Linear\" progress indicator?",
            options: {
                A: "Centered in the middle of the screen.",
                B: "Inside a small circular button.",
                C: "Attached to the edge of a container (e.g., top of a card or screen).",
                D: "Floating randomly over content."
            },
            correct: "C"
        },
        {
            id: 32,
            text: "Which behavior is discouraged (Don't) when transitioning between indicator states?",
            options: {
                A: "Transitioning from Indeterminate to Determinate progress.",
                B: "Transitioning from a Loading indicator to a Determinate progress indicator.",
                C: "Hiding the indicator when the process is complete.",
                D: "Using a Loading indicator for pull-to-refresh."
            },
            correct: "B"
        },
        {
            id: 33,
            text: "What is the primary purpose of a Toolbar in Material Design 3?",
            options: {
                A: "To display the app title only.",
                B: "To provide a container for frequently used actions relevant to the current screen or context.",
                C: "To show long paragraphs of text.",
                D: "To replace the system status bar."
            },
            correct: "B"
        },
        {
            id: 34,
            text: "What distinguishes a \"Floating Toolbar\" from a \"Docked Toolbar\"?",
            options: {
                A: "A Floating Toolbar is always at the top; Docked is at the bottom.",
                B: "A Floating Toolbar floats above body content and is best for contextual actions; Docked spans the full width.",
                C: "Floating Toolbars cannot contain icon buttons.",
                D: "Docked Toolbars are transparent."
            },
            correct: "B"
        },
        {
            id: 35,
            text: "If you are using a Navigation Bar (bottom nav) on a screen, should you also use a Docked (bottom) Toolbar?",
            options: {
                A: "Yes, they work well together.",
                B: "No, avoid using a Docked Toolbar if other bottom-aligned elements like a Navigation Bar are present.",
                C: "Only if the Toolbar is red.",
                D: "Yes, but the Toolbar must be at the top."
            },
            correct: "B"
        },
        {
            id: 36,
            text: "How should emphasis be applied to actions inside a Toolbar?",
            options: {
                A: "All actions should be high-emphasis Filled buttons.",
                B: "Emphasize a single action (e.g., using a different color or FAB) and keep others less prominent.",
                C: "Make all icons different sizes.",
                D: "Use text labels for every single action."
            },
            correct: "B"
        }
    ],
    Q2: [
        {
            id: 1,
            text: "What is the primary use case for a Carousel in Material Design 3?",
            options: {
                A: "Displaying a large amount of text-heavy content that needs to be read in order.",
                B: "Browsing through a collection of visual content (like images) where users can swipe to view more.",
                C: "Creating a permanent navigation structure for the entire app."
            },
            correct: "B"
        },
        {
            id: 2,
            text: "Which Carousel strategy is best suited for highlighting a single prominent item while giving a peek at the next item?",
            options: {
                A: "Multi-browse",
                B: "Hero",
                C: "Uncontained"
            },
            correct: "B"
        },
        {
            id: 3,
            text: "In a \"Multi-browse\" carousel strategy, how are items typically sized?",
            options: {
                A: "All items are exactly the same size.",
                B: "Items are sized dynamically, often showing a large item, a medium item, and a small item simultaneously.",
                C: "Items start small and get larger as they reach the end of the list."
            },
            correct: "B"
        },
        {
            id: 4,
            text: "When should you use Checkboxes instead of Radio Buttons?",
            options: {
                A: "When the user needs to select exactly one option from a list.",
                B: "When the user can select one, multiple, or no options from a list.",
                C: "When the action takes effect immediately (like a toggle switch)."
            },
            correct: "B"
        },
        {
            id: 5,
            text: "What does the \"Indeterminate\" state (often a horizontal line) in a parent checkbox represent?",
            options: {
                A: "The checkbox is disabled and cannot be clicked.",
                B: "Some, but not all, of the child checkboxes are selected.",
                C: "The user has not yet interacted with the list."
            },
            correct: "B"
        },
        {
            id: 6,
            text: "For optimal touch usability, what is the minimum recommended touch target size for a checkbox?",
            options: {
                A: "24x24dp",
                B: "32x32dp",
                C: "48x48dp"
            },
            correct: "C"
        },
        {
            id: 7,
            text: "Which type of chip is specifically designed to let users refine content, such as search results?",
            options: {
                A: "Assist chips",
                B: "Filter chips",
                C: "Suggestion chips"
            },
            correct: "B"
        },
        {
            id: 8,
            text: "How do \"Input chips\" differ from other chip types?",
            options: {
                A: "They represent a piece of information (like a person or tag) entered by the user, often in a text field.",
                B: "They are used for permanent navigation tabs.",
                C: "They are always read-only and cannot be deleted."
            },
            correct: "A"
        },
        {
            id: 9,
            text: "When should you use an \"Assist chip\" instead of a Button?",
            options: {
                A: "For the primary, high-emphasis action on a screen (like \"Submit\").",
                B: "For supplementary, smart actions related to the context (like \"Add to calendar\" or \"Get directions\").",
                C: "When you need to toggle a setting on or off."
            },
            correct: "B"
        },
        {
            id: 10,
            text: "On a mobile device with limited screen space, which date picker presentation is standard?",
            options: {
                A: "A modal dialog (overlay) that blocks interaction with the rest of the screen.",
                B: "A permanent sidebar calendar.",
                C: "A dropdown menu inside a text field."
            },
            correct: "A"
        },
        {
            id: 11,
            text: "Why is it important to offer a \"Text Input\" mode in addition to the standard calendar view?",
            options: {
                A: "It allows the app to display ads in the calendar space.",
                B: "It is necessary for accessibility and for users who prefer typing dates quickly.",
                C: "It allows users to enter emojis."
            },
            correct: "B"
        },
        {
            id: 12,
            text: "Which date picker type is best for booking a hotel stay?",
            options: {
                A: "Input Date Picker (single date)",
                B: "Range Date Picker",
                C: "Docked Date Picker"
            },
            correct: "B"
        },
        {
            id: 13,
            text: "When should you use a \"Full-screen dialog\" instead of a standard \"Basic dialog\"?",
            options: {
                A: "For simple confirmation messages like \"Delete this item?\".",
                B: "When the user needs to complete a series of tasks or requires complex keyboard input (e.g., creating a calendar event).",
                C: "When you want to show a small notification that disappears automatically."
            },
            correct: "B"
        },
        {
            id: 14,
            text: "What is the primary purpose of a Basic Dialog?",
            options: {
                A: "To provide a non-interruptive suggestion.",
                B: "To interrupt the user with urgent information or a critical decision that requires acknowledgement.",
                C: "To display a large form with many inputs."
            },
            correct: "B"
        },
        {
            id: 15,
            text: "How can a user typically dismiss a standard modal dialog without choosing an action?",
            options: {
                A: "By swiping it off the screen.",
                B: "By tapping the scrim (darkened background) outside the dialog.",
                C: "They cannot; they must choose an option."
            },
            correct: "B"
        },
        {
            id: 16,
            text: "When should you use a \"Full-width\" divider?",
            options: {
                A: "To separate distinct content sections or break up large layouts.",
                B: "To separate individual items within a list where an icon anchors the content.",
                C: "To underline every single line of text in a paragraph."
            },
            correct: "A"
        },
        {
            id: 17,
            text: "What distinguishes an \"Inset\" divider?",
            options: {
                A: "It spans the entire width of the screen.",
                B: "It starts after a leading element (like an avatar or icon), separating related content without cutting the visual flow.",
                C: "It is always a thick, bold line."
            },
            correct: "B"
        },
        {
            id: 18,
            text: "According to M3, dividers should be used:",
            options: {
                A: "Sparingly, only when whitespace is insufficient to separate content.",
                B: "Between every single element on the screen to ensure maximum contrast.",
                C: "To decorate the background of the app."
            },
            correct: "A"
        },
        {
            id: 19,
            text: "In a standard list item, where should the primary action (like a checkbox or switch) be placed?",
            options: {
                A: "Leading (far left).",
                B: "Trailing (far right).",
                C: "Center."
            },
            correct: "B"
        },
        {
            id: 20,
            text: "What is the \"Three-line\" list item typically used for?",
            options: {
                A: "Simple navigation links.",
                B: "Displaying a large amount of text, such as a snippet of an email body or a description.",
                C: "Headers only."
            },
            correct: "B"
        },
        {
            id: 21,
            text: "What is the \"Leading\" element in a list item usually reserved for?",
            options: {
                A: "The timestamp.",
                B: "Visuals like an avatar, icon, or image thumbnail.",
                C: "The \"Delete\" button."
            },
            correct: "B"
        },
        {
            id: 22,
            text: "How does a \"Context menu\" typically appear?",
            options: {
                A: "By tapping a hamburger icon in the top left.",
                B: "By right-clicking (desktop) or long-pressing (mobile) on an element.",
                C: "By swiping up from the bottom of the screen."
            },
            correct: "B"
        },
        {
            id: 23,
            text: "If a menu contains too many items to fit on the screen, what is the correct behavior?",
            options: {
                A: "The menu should shrink the text size.",
                B: "The menu should become scrollable internally.",
                C: "The menu should cover the entire screen including the status bar."
            },
            correct: "B"
        },
        {
            id: 24,
            text: "Which UI element is a standard Menu NOT appropriate for?",
            options: {
                A: "A list of temporary actions (like Copy, Paste).",
                B: "A permanent selection of navigation tabs.",
                C: "A selection of items in a dropdown."
            },
            correct: "B"
        },
        {
            id: 25,
            text: "What is the recommended number of destinations for a Navigation Bar (bottom nav)?",
            options: {
                A: "1 to 2",
                B: "3 to 5",
                C: "6 to 8"
            },
            correct: "B"
        },
        {
            id: 26,
            text: "Which device type is the Navigation Bar primarily designed for?",
            options: {
                A: "Desktop monitors.",
                B: "Mobile/Handheld devices.",
                C: "Smart TVs."
            },
            correct: "B"
        },
        {
            id: 27,
            text: "When a destination in the Navigation Bar is active (selected), how is it visually distinguished?",
            options: {
                A: "It disappears from the bar.",
                B: "The icon becomes filled and/or is surrounded by a pill-shaped indicator.",
                C: "It spins."
            },
            correct: "B"
        },
        {
            id: 28,
            text: "What is the main difference between a \"Standard\" and a \"Modal\" navigation drawer?",
            options: {
                A: "Standard is always visible (on larger screens), while Modal appears as an overlay (on smaller screens).",
                B: "Standard is on the right, Modal is on the left.",
                C: "Standard is for settings, Modal is for navigation."
            },
            correct: "A"
        },
        {
            id: 29,
            text: "What is the recommended minimum number of destinations to justify using a Navigation Drawer?",
            options: {
                A: "2",
                B: "5",
                C: "15"
            },
            correct: "B"
        },
        {
            id: 30,
            text: "Where is a Navigation Drawer typically placed?",
            options: {
                A: "Attached to the bottom of the screen.",
                B: "Attached to the leading edge (left) of the screen.",
                C: "Floating in the center."
            },
            correct: "B"
        },
        {
            id: 31,
            text: "Which device context is the Navigation Rail best suited for?",
            options: {
                A: "Small mobile phones in portrait mode.",
                B: "Tablets, foldables, and desktop screens.",
                C: "Smartwatches."
            },
            correct: "B"
        },
        {
            id: 32,
            text: "What is the recommended range of destinations for a Navigation Rail?",
            options: {
                A: "1-2",
                B: "3-7",
                C: "8-12"
            },
            correct: "B"
        },
        {
            id: 33,
            text: "If a user needs to access a \"New\" or \"Create\" action globally, where should the FAB be placed in relation to the Navigation Rail?",
            options: {
                A: "At the very bottom of the rail.",
                B: "At the top of the rail, above the navigation icons.",
                C: "It should not be used with a rail."
            },
            correct: "B"
        },
        {
            id: 34,
            text: "When should you use a \"Determinate\" progress indicator?",
            options: {
                A: "When you have no idea how long the process will take.",
                B: "When the progress can be calculated and shown as a percentage (e.g., downloading a file).",
                C: "When the app is frozen."
            },
            correct: "B"
        },
        {
            id: 35,
            text: "Which type of indicator is best for a button that changes state to \"Loading\"?",
            options: {
                A: "A large Linear indicator across the top of the screen.",
                B: "A small Circular indicator inside or near the button.",
                C: "A Determinate indicator."
            },
            correct: "B"
        },
        {
            id: 36,
            text: "What does an \"Indeterminate\" linear indicator (moving back and forth) signify?",
            options: {
                A: "The process is broken.",
                B: "The process is happening, but the wait time is unknown.",
                C: "The process is exactly 50% complete."
            },
            correct: "B"
        },
        {
            id: 37,
            text: "What is the fundamental difference between Radio Buttons and Checkboxes?",
            options: {
                A: "Radio buttons allow multiple selections; Checkboxes allow only one.",
                B: "Radio buttons allow only one selection from a set; Checkboxes allow multiple.",
                C: "Radio buttons are square; Checkboxes are circular."
            },
            correct: "B"
        },
        {
            id: 38,
            text: "Should a Radio Button group have a default selection?",
            options: {
                A: "No, it is better to have nothing selected initially.",
                B: "Yes, one option should generally be selected by default.",
                C: "Only if there are more than 5 options."
            },
            correct: "B"
        },
        {
            id: 39,
            text: "Can a user deselect a Radio Button once it is clicked (without clicking another option)?",
            options: {
                A: "Yes, by clicking it again.",
                B: "No, radio buttons cannot be unchecked directly; a different option must be selected.",
                C: "Yes, by long-pressing it."
            },
            correct: "B"
        }
    ],
    Q3: [
        {
            id: 1,
            text: "What is the difference between a \"Search Bar\" and a \"Search View\" in Material Design 3?",
            options: {
                A: "The Search Bar is used for web, while Search View is for mobile only.",
                B: "The Search Bar is the static container where users enter text, while the Search View is the expanded interface showing suggestions and results.",
                C: "The Search Bar is outdated and replaced by the Search View.",
                D: "The Search Bar only searches local files, while Search View searches the internet."
            },
            correct: "B"
        },
        {
            id: 2,
            text: "When is it appropriate to use a \"Search Bar\" as the primary focus of a screen?",
            options: {
                A: "When search is the main functionality of the app (e.g., a map or music app).",
                B: "Only inside a settings menu.",
                C: "When you want to save screen space by hiding it behind an icon.",
                D: "When the search function is rarely used."
            },
            correct: "A"
        },
        {
            id: 3,
            text: "How many trailing action icons are recommended in a Search Bar (excluding the avatar/account image)?",
            options: {
                A: "Zero, it should only have text.",
                B: "Up to two.",
                C: "Exactly three.",
                D: "Unlimited."
            },
            correct: "B"
        },
        {
            id: 4,
            text: "Which type of Bottom Sheet blocks interaction with the rest of the screen and must be dismissed by the user?",
            options: {
                A: "Standard Bottom Sheet",
                B: "Modal Bottom Sheet",
                C: "Persistent Bottom Sheet",
                D: "Expanded Bottom Sheet"
            },
            correct: "B"
        },
        {
            id: 5,
            text: "What is the primary use case for a \"Standard\" Bottom Sheet?",
            options: {
                A: "To display a critical system error.",
                B: "To allow users to interact with supplementary content (like a music player) while still viewing the main screen.",
                C: "To show a simple toast message.",
                D: "To permanently replace the navigation bar."
            },
            correct: "B"
        },
        {
            id: 6,
            text: "Which UI element is essential for indicating that a Bottom Sheet can be dragged?",
            options: {
                A: "A \"Close\" button in the top right.",
                B: "A drag handle (small horizontal bar) at the top center of the sheet.",
                C: "A drop shadow at the bottom.",
                D: "A different background color."
            },
            correct: "B"
        },
        {
            id: 7,
            text: "How does a \"Standard\" Side Sheet differ from a \"Modal\" Side Sheet regarding user interaction?",
            options: {
                A: "Standard sheets block interaction with the main content; Modal sheets do not.",
                B: "Standard sheets allow interaction with the main screen content; Modal sheets block interaction (overlay).",
                C: "Standard sheets are only for mobile; Modal sheets are for desktop.",
                D: "They function exactly the same; the difference is only in width."
            },
            correct: "B"
        },
        {
            id: 8,
            text: "On mobile devices (compact screens), what should a Standard Side Sheet typically behave like?",
            options: {
                A: "It should remain as a side sheet and squash the content.",
                B: "It should turn into a Modal Bottom Sheet.",
                C: "It should disappear completely.",
                D: "It should become a new full-screen page."
            },
            correct: "B"
        },
        {
            id: 9,
            text: "Side sheets are primarily designed to display which type of content?",
            options: {
                A: "Global navigation links (like a drawer).",
                B: "Supplementary content related to the primary screen (e.g., details, filters, or an edit form).",
                C: "Brief status updates (like a snackbar).",
                D: "The main application settings."
            },
            correct: "B"
        },
        {
            id: 10,
            text: "When should you use a \"Discrete\" slider instead of a \"Continuous\" slider?",
            options: {
                A: "When the user needs to select a value from a specific, predetermined set (e.g., 1-5 stars).",
                B: "When the precise value doesn't matter (e.g., volume).",
                C: "When the range is infinite.",
                D: "When you want the slider to move smoother."
            },
            correct: "A"
        },
        {
            id: 11,
            text: "What is the correct behavior for a \"Range Slider\"?",
            options: {
                A: "It has one thumb and selects a single value.",
                B: "It has two thumbs and allows selection of a minimum and maximum value within a range.",
                C: "It moves vertically instead of horizontally.",
                D: "It automatically resets to zero after use."
            },
            correct: "B"
        },
        {
            id: 12,
            text: "For accessibility and touch targets, what happens to the slider handle (thumb) when a user hovers or presses it?",
            options: {
                A: "It disappears to show the value clearly.",
                B: "It displays a \"handle label\" (value indicator) above the thumb.",
                C: "It changes color to red.",
                D: "It vibrates only."
            },
            correct: "B"
        },
        {
            id: 13,
            text: "What is the maximum number of actions allowed in a Snackbar?",
            options: {
                A: "Zero (text only).",
                B: "One (e.g., \"Undo\" or \"Retry\").",
                C: "Two (e.g., \"Yes\" and \"No\").",
                D: "Three."
            },
            correct: "B"
        },
        {
            id: 14,
            text: "Why should Snackbars NOT contain icons (other than the optional close icon)?",
            options: {
                A: "Because they distract from the text.",
                B: "Because Snackbars are for short text labels only; icons clutter the limited space.",
                C: "Because icons are not supported in the code.",
                D: "Actually, big decorative icons are recommended."
            },
            correct: "B"
        },
        {
            id: 15,
            text: "How long should a Snackbar typically remain on screen?",
            options: {
                A: "Until the user manually dismisses it.",
                B: "4 to 10 seconds (transient), depending on text length.",
                C: "Less than 1 second.",
                D: "Permanently."
            },
            correct: "B"
        },
        {
            id: 16,
            text: "How does a Switch differ from a Checkbox in terms of behavior?",
            options: {
                A: "Switches are for multiple selections; Checkboxes are for single.",
                B: "Switches typically toggle a state immediately (e.g., WiFi On/Off), whereas Checkboxes often require a \"Save\" or \"Submit\" action.",
                C: "Switches are square; Checkboxes are round.",
                D: "Checkboxes are for mobile; Switches are for desktop."
            },
            correct: "B"
        },
        {
            id: 17,
            text: "Which of the following is the standard visual indicator for a \"Switch\" in the \"On\" state?",
            options: {
                A: "The track is gray and the thumb is on the left.",
                B: "The track is filled with color and the thumb is on the right.",
                C: "The thumb disappears.",
                D: "The entire component turns red."
            },
            correct: "B"
        },
        {
            id: 18,
            text: "Icons inside the switch thumb (handle) are:",
            options: {
                A: "Mandatory for all switches.",
                B: "Optional, but can help accessibility by distinguishing states (e.g., checkmark vs x).",
                C: "Forbidden.",
                D: "Only allowed in Dark Mode."
            },
            correct: "B"
        },
        {
            id: 19,
            text: "What is the difference between \"Fixed\" tabs and \"Scrollable\" tabs?",
            options: {
                A: "Fixed tabs are for mobile, Scrollable for desktop.",
                B: "Fixed tabs fit all items in the visible width (ideal for 2-3 items); Scrollable tabs allow swiping to access more items.",
                C: "Fixed tabs cannot be clicked.",
                D: "Scrollable tabs move vertically."
            },
            correct: "B"
        },
        {
            id: 20,
            text: "According to hierarchy, where should Tabs typically be placed?",
            options: {
                A: "At the very bottom of the screen (replacing the nav bar).",
                B: "Above the top app bar.",
                C: "Below the top app bar, but above the content they control.",
                D: "Inside a dialog box only."
            },
            correct: "C"
        },
        {
            id: 21,
            text: "Tabs are best used for:",
            options: {
                A: "Navigating between top-level unrelated destinations (like Home, Settings, Profile).",
                B: "Grouping related content at the same hierarchy level (e.g., \"Photos\", \"Albums\", \"For You\").",
                C: "Moving forward in a linear process (step 1, step 2).",
                D: "Opening external websites."
            },
            correct: "B"
        },
        {
            id: 22,
            text: "Which Text Field style has higher visual emphasis and is generally preferred for the primary content of a form?",
            options: {
                A: "Outlined Text Field",
                B: "Filled Text Field",
                C: "Dashed Text Field",
                D: "Invisible Text Field"
            },
            correct: "B"
        },
        {
            id: 23,
            text: "What is the purpose of \"Helper Text\" in a text field?",
            options: {
                A: "To replace the label.",
                B: "To provide additional guidance, such as \"Password must be 8 characters,\" appearing below the input line.",
                C: "To show the error state in red.",
                D: "To auto-complete the user's name."
            },
            correct: "B"
        },
        {
            id: 24,
            text: "When a Text Field is in an error state, what changes occur?",
            options: {
                A: "The label and indicator line/stroke turn red, and an error icon/message may appear.",
                B: "The text field disappears.",
                C: "The text becomes bold only.",
                D: "The background turns black."
            },
            correct: "A"
        },
        {
            id: 25,
            text: "Which Time Picker view is the default standard for mobile devices?",
            options: {
                A: "The \"Dial\" (clock face) view.",
                B: "The \"Input\" (keyboard typing) view.",
                C: "A long scrolling list of every minute.",
                D: "A map view."
            },
            correct: "A"
        },
        {
            id: 26,
            text: "The \"Input\" time picker (where users type numbers) is most essential for:",
            options: {
                A: "Users who prefer visual clocks.",
                B: "Desktop users or users on mobile who need precise entry/accessibility.",
                C: "Kids learning to tell time.",
                D: "Selecting dates instead of time."
            },
            correct: "B"
        },
        {
            id: 27,
            text: "In the 12-hour clock format, what is the standard selector separate from the hour/minute dial?",
            options: {
                A: "A seconds counter.",
                B: "A \"Confirm\" button only.",
                C: "An AM/PM selector.",
                D: "A Time Zone selector."
            },
            correct: "C"
        },
        {
            id: 28,
            text: "What is the trigger behavior for a Tooltip on a mobile (touch) device?",
            options: {
                A: "Tap.",
                B: "Long-press (touch and hold).",
                C: "Double-tap.",
                D: "Swipe right."
            },
            correct: "B"
        },
        {
            id: 29,
            text: "What distinguishes a \"Rich\" tooltip from a \"Plain\" tooltip?",
            options: {
                A: "Rich tooltips are gold colored.",
                B: "Plain tooltips only show short text; Rich tooltips can have a title, description, and actions (like a link).",
                C: "Rich tooltips are for paid users only.",
                D: "Plain tooltips are permanent; Rich tooltips disappear."
            },
            correct: "B"
        },
        {
            id: 30,
            text: "Tooltips should NOT be used to:",
            options: {
                A: "Explain an icon that has no text label.",
                B: "Provide extra detail about a feature.",
                C: "Contain essential information that is critical for the user to proceed (as they disappear).",
                D: "Clarify a button's function."
            },
            correct: "C"
        },
        {
            id: 31,
            text: "What are the two distinct touch targets in a \"Split Button\"?",
            options: {
                A: "A \"Confirm\" button and a \"Cancel\" button.",
                B: "A leading button (primary action) and a trailing button (dropdown menu arrow).",
                C: "A text label and an icon that perform the same action.",
                D: "A top half and a bottom half."
            },
            correct: "B"
        },
        {
            id: 32,
            text: "When navigating via keyboard, how does focus move through a Split Button?",
            options: {
                A: "It treats the whole button as one object.",
                B: "It focuses on the leading button (action) first, then the trailing button (menu).",
                C: "It skips the menu button entirely.",
                D: "It focuses on the menu first."
            },
            correct: "B"
        },
        {
            id: 33,
            text: "What is the primary advantage of using a Split Button over a simple Menu?",
            options: {
                A: "It allows the most common action to be performed with one click, while hiding less common options in the menu.",
                B: "It takes up more screen space.",
                C: "It is harder to click.",
                D: "It forces the user to always open the menu."
            },
            correct: "A"
        }
    ]
};

