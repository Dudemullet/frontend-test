# Events
Events project

## TODO

- [x] Eventlist functionality
- [x] Routing
- [x] Share event functionality
- [] Add event detail view and route
- [] Add event detail Component
- [] Add higlighted events component
- [] Add create event view and route
- [] Add create event Component
- [] Eventlist styling
- [] Share event styling
- [] Add event detail styling
- [] Add higlighted events styling
- [] Add create event styling

## TODO - wishlist

- [] Modify date on the fly
- [] Show future events
- [] Show previous events?
- [] Share via differente medium
- [] Tests, ideally would come before implementation but time's critical here
- [] Service worker for caching and PWA enhancements?
- [] style guide - change style guide, livereload changes on page
- [] using flux ?

### NOTE - on tools used (Create react app)
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). I read the instructions and noticed how any types of frameworks/tools were permitted so I decided to bootstrap this project with CRA.

All in all, the biggest reason I'm using it is because it saves time by allowing me to not focus or spend time on setting up a build environment. In and of itself the build process wont make the application work or break, but it save me time but not worrying about:

- Babel (es6 on browsers)
- Live reload
- bundling

### NOTE #2 - Git Merges and commits
I've normally worked with a rebase, merge request and squash based type workflow. I've intentionally made merges into master with the `--no-ff` flag turned on so my work process can be more easily scrutinized.